"use client"

import { useState } from "react"
import { Calendar, ChevronDown, Home, Menu, Search, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppointmentDashboard() {
  const [startDate, setStartDate] = useState("01/04/2025")
  const [endDate, setEndDate] = useState("30/04/2025")
  const [patient, setPatient] = useState("")
  const [resultsPerPage, setResultsPerPage] = useState("10")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-screen overflow-x-hidden bg-background">
        <Sidebar className="border-r">
          <SidebarHeader className="border-b p-0">
            <div className="bg-[#0a5e7d] text-white p-4 flex items-center justify-between">
              <h1 className="text-lg font-semibold">PhysioClinic</h1>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span>Início</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>

            <div className="px-3 py-2">
              <p className="text-xs font-semibold text-muted-foreground mb-2">CADASTROS</p>
            </div>

            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Confirmações de Consultas</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Agenda</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Pacientes</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Contatos</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Funcionários</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Fornecedores</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Campanhas</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Despesas</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="text-xs text-muted-foreground">
              <p>Logado como:</p>
              <p className="font-medium text-foreground">PEDRO FISIO</p>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          <header className="bg-[#0a5e7d] text-white p-4 flex items-center justify-between">
            <SidebarTrigger className="text-white" />
            <div className="flex items-center gap-2">
              <span className="font-medium">PhysioClinic</span>
              <Button variant="ghost" size="icon" className="text-white">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </header>

          <main className="flex-1 p-6 w-full">
            <div className="max-w-screen-xl w-full mx-auto px-20">
              <h1 className="text-2xl font-bold mb-4">Agendamento</h1>

              <div className="bg-muted/30 p-2 mb-6 rounded-md">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <a href="#" className="hover:underline">
                    Início
                  </a>
                  <span>/</span>
                  <span>Agendamento</span>
                </div>
              </div>

              <div className="bg-white border rounded-md p-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label htmlFor="start-date" className="block text-sm mb-1">
                      Data Inicial
                    </label>
                    <Input id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="end-date" className="block text-sm mb-1">
                      Data Final
                    </label>
                    <Input id="end-date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="patient" className="block text-sm mb-1">
                      Paciente
                    </label>
                    <Input id="patient" value={patient} onChange={(e) => setPatient(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="room" className="block text-sm mb-1">
                      Salas
                    </label>
                    <Select defaultValue="consultorio1">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma sala" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultorio1">Consultório 1</SelectItem>
                        <SelectItem value="consultorio2">Consultório 2</SelectItem>
                        <SelectItem value="consultorio3">Consultório 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="bg-[#333] hover:bg-[#444]">Filtrar</Button>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Select value={resultsPerPage} onValueChange={setResultsPerPage}>
                    <SelectTrigger className="w-16">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-sm text-muted-foreground">resultados por página</span>
                </div>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Pesquisar" className="pl-8 w-[250px]" />
                </div>
              </div>

              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">
                        <input type="checkbox" className="h-4 w-4" />
                      </TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Paciente</TableHead>
                      <TableHead>Celular</TableHead>
                      <TableHead>Situação</TableHead>
                      <TableHead>Opções</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                        Nenhum registro encontrado
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                <div>Mostrando 0 até 0 de 0 registros</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Anterior
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    Próximo
                  </Button>
                </div>
              </div>
            </div>
          </main>

          <footer className="border-t p-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
              <div>Copyright © 2020</div>
              <div className="flex gap-2">
                <a href="#" className="hover:underline">
                  Política de Privacidade
                </a>
                <span>·</span>
                <a href="#" className="hover:underline">
                  Termos & Condições
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  )
}
