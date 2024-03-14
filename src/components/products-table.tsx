import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  export function ProductsTable() {
    return (
      <Table>
        <TableHeader>
          <TableHead>ID</TableHead>
          <TableHead>Produto</TableHead>
          <TableHead>Preço</TableHead>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>82s8sdsd213s</TableCell>
              <TableCell>Produto {i}</TableCell>
              <TableCell>R$ 198,00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  