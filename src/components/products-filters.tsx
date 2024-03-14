import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ProductsFilters() {
  return (
    <form className="flex items-center gap-2">
      <Input name="id" placeholder="ID do produto" />
      <Input name="name" placeholder="Nome do produto" />
      <Button type="submit" variant="link">
        <Search className="size-4 mr-2" />
        Filtrar resultados
      </Button>
    </form>
  );
}
