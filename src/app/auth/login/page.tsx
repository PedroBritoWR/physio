import Link from "next/link"
import { Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 mb-4">
            <Activity className="h-6 w-6 text-teal-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">PhysioClinic</h1>
          <p className="text-gray-500 text-sm">O seu começo para a recuperação começa aqui.</p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Entrar</CardTitle>
            <CardDescription className="text-center">Informe seus dados para acessar sua conta</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="exemplo@gmail.com"/>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/auth/recuperar-senha" className="text-sm text-teal-600 hover:text-teal-700">
                  Esqueceu sua senha?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="********" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-normal">
                Lembrar
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-teal-600 hover:bg-teal-700">Entrar</Button>
            <div className="text-center text-sm">
              Ainda não possui uma conta?{" "}
              <Link href="/auth/registrar" className="text-teal-600 hover:text-teal-700 font-medium">
                Criar conta
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PhysioClinic. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  )
}
