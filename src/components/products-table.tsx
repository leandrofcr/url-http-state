import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "@/data/products";
import { formatCurrency } from "@/util/functions";

interface Props {
  data: Product[] | undefined;
}

export function ProductsTable({ data }: Props) {
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
        {data?.map((product: Product) => (
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
