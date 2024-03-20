import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/util/functions";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Props {
  products: Product[] | undefined;
}

export function ProductsTable({ products }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Produto</TableHead>
          <TableHead>Preço</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product: Product) => (
          <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{formatCurrency(product.price)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
