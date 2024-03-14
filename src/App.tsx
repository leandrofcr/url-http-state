import { ProductsFilterForm } from "@/components/organisms/form/ProductsFilterForm";
import { NewProductDialog } from "@/components/organisms/modal/NewProductDialog";
import { ProductsTable } from "@/components/organisms/table/ProductsTable";

export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-4xl font-bold">Produtos</h1>
      <div className="flex items-center justify-between">
        <ProductsFilterForm />
        <NewProductDialog />
      </div>

      <div className="border rounded-lg p-2">
        <ProductsTable />
      </div>
    </div>
  );
}
