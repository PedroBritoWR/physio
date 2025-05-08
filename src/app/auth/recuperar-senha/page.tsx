import Link from "next/link"
import { Activity, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RecueperarSenhaPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 mb-4">
            <Activity className="h-6 w-6 text-teal-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">PhysioClinic</h1>
          
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Recuperar senha</CardTitle>
            <CardDescription className="text-center">
              Informe seu endereço de e-mail e mandaremos um link para redefinir sua senha
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="exemplo@gmail.com" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-teal-600 hover:bg-teal-700">Enviar</Button>
            <Link href="/" className="flex items-center justify-center text-sm text-teal-600 hover:text-teal-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o login
            </Link>
          </CardFooter>
        </Card>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PhysioClinic. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  )
}
