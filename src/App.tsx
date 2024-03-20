import { PlusCircle } from "lucide-react";

import { CreateProductDialog } from "@/components/create-product-dialog";
import { ProductsFilters } from "@/components/products-filters";
import { ProductsTable } from "@/components/products-table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./data/products";

export function App() {
  const { data: products } = useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
  });

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-4xl font-bold">Produtos</h1>
      <div className="flex items-center justify-between">
        <ProductsFilters />

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="size-4 mr-2" />
              Novo produto
            </Button>
          </DialogTrigger>

          <CreateProductDialog />
        </Dialog>
      </div>

      <div className="border rounded-lg p-2">
        <ProductsTable products={products} />
      </div>
    </div>
  );
}
