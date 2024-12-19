import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { neon } from "@neondatabase/serverless";
import { redirect } from "next/navigation";


async function registerStudent(formData: FormData) {
  'use server'
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const sql = neon(`${process.env.DATABASE_URL}`);
  await sql`INSERT INTO students (name, email) VALUES (${name}, ${email})`
  console.log('Registering student:', { name, email })
  await new Promise(resolve => setTimeout(resolve, 1000))
  redirect('/dashboard/student/list')
}

export default function StudentRegistration() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Cadastro de Estudante</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={registerStudent} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Nome
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                E-mail
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              Cadastrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

