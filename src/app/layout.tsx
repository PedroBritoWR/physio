import { Poppins } from "next/font/google";
import { Metadata } from "next";
import "../styles/globals.css";
// import "maplibre-gl/dist/maplibre-gl.css";
import { ReactNode } from "react";
import Providers from "../utils/providers";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "SIA | Sistema de Identificação Animal",
  description: "Sistema de proteção de animais",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable}  antialiased font-sans mx-auto`}>
        <main>
          <div>
            <Toaster />
          </div>
          <div className={`min-h-screen`}>
            <Providers>{children}</Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
