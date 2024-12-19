import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { neon } from "@neondatabase/serverless";

export default async function StudentList() {
  const sql = neon(process.env.DATABASE_URL!);
  
  try {
    const { rows } = await sql`SELECT * FROM students`;

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>E-mail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  } catch (error) {
    console.error("Failed to fetch students:", error);
    return <div>Failed to load students. Please try again later.</div>;
  }
}
