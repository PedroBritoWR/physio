"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Bell, ShareFat } from "@phosphor-icons/react";
import { FaRegSadCry } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BackendInstance } from "@/hooks/useAxiosAuth";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

interface Notification {
  id: string;
  text: string;
  read: boolean;
  route: string;
  userId: string;
  readAt?: string;
}

const fetchNotifications = async (): Promise<Notification[]> => {
  try {
    const { data } = await BackendInstance.get("/notifications");
    return data.content;
  } catch {
    return [];
  }
};

const markAsRead = async (
  notification: Notification
): Promise<Notification> => {
  try {
    const { data } = await BackendInstance.put(
      `/notifications/${notification.id}`,
      {
        text: notification.text,
        read: true,
        route: notification.route,
        userId: notification.userId,
      }
    );
    return data;
  } catch {
    toast.error("Erro ao marcar notificação como lida");
    throw new Error("Erro ao marcar notificação como lida");
  }
};

const NotificationsDropdown = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  const { data: notifications = [], isLoading } = useQuery<Notification[]>({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
  });

  const mutation = useMutation(markAsRead, {
    onSuccess: () => {
      queryClient.invalidateQueries(["notifications"]);
    },
  });

  // Conta quantas não estão lidas (valor real do backend)
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Marcar todas como lidas no backend ao abrir o dropdown
  const handleDropdownClick = async () => {
    const isOpening = !showNotifications;
    setShowNotifications(isOpening);

    if (isOpening) {
      const unreadNotifications = notifications.filter((n) => !n.read);
      await Promise.all(
        unreadNotifications.map((n) => mutation.mutateAsync(n))
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const bgColors = [
    "bg-[#FFFE9A]",
    "bg-[#FF9A9A]",
    "bg-[#92ceff]",
    "bg-[#92ffc4]",
  ];
  const texteColorsIcon = [
    "text-[#FFA800]",
    "text-meta-1",
    "text-[#3699FF]",
    "text-meta-3",
  ];

  return (
    <div className="relative font-satoshi" ref={dropdownRef}>
      <div onClick={handleDropdownClick} className="relative cursor-pointer">
        <Bell size={24} color="#000" />
        {unreadCount > 0 && (
          <div className="absolute -top-[8px] -right-1 flex items-center justify-center text-white text-xs font-bold rounded-full w-5 h-5 bg-meta-1">
            {unreadCount > 99 ? "99+" : unreadCount}
          </div>
        )}
      </div>

      {showNotifications && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute w-96 left-[-190px] top-[50px] z-10"
        >
          <div className="w-[90%] max-w-[676px] h-auto max-h-[444px] bg-white border-graydark rounded-lg shadow-lg mr-10">
            <div className="font-normal text-white rounded-t-lg bg-[#0071ce] w-full h-[38px]">
              <h1 className="absolute pl-3 pt-2 font-satoshi">Notificações</h1>
            </div>

            <div className="overflow-y-auto border-t-2 border-[#10B981] h-[260px] w-full">
              {isLoading ? (
                <p className="p-4">Carregando notificações...</p>
              ) : notifications.length ? (
                notifications.map((notification, index) => {
                  const bgColor = bgColors[index % bgColors.length];
                  const bgColorIcon =
                    texteColorsIcon[index % texteColorsIcon.length];

                  return (
                    <Link
                      key={notification.id}
                      href={`/admin/notificacoes?notificacao=${notification.id}`}
                      onClick={() => setShowNotifications(false)}
                      className={`flex items-center p-3 last:border-none text-sm cursor-pointer ${
                        notification.read
                          ? "text-black opacity-50"
                          : "text-black"
                      }`}
                    >
                      <div
                        className={`w-[40px] h-[40px] flex items-center justify-center rounded-md mr-3 ${bgColor} bg-opacity-65`}
                      >
                        <ShareFat className={`${bgColorIcon}`} size={24} />
                      </div>
                      <div
                        className="w-[233px] line-clamp-2"
                        title={notification.text}
                      >
                        {notification.text && notification.text.length > 50
                          ? `${notification.text.slice(0, 50)}...`
                          : notification.text || ""}
                      </div>
                    </Link>
                  );
                })
              ) : (
                <div className="flex flex-col items-center justify-center pt-24">
                  <FaRegSadCry className="text-azul mr-4" size={40} />
                  <p className="font-semibold uppercase text-graydark text-center text-sm">
                    Nenhuma notificação
                  </p>
                </div>
              )}
            </div>

            <div className="pt-1">
              <div className="flex justify-center pb-2">
                <Link
                  href={"/admin/notificacoes"}
                  onClick={() => setShowNotifications(false)}
                  className="flex items-center justify-center w-[95px] h-[36px] rounded-md font-medium cursor-pointer bg-[#CCE5FF]"
                >
                  <small className="text-azul text-sm">Ver todas</small>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NotificationsDropdown;
