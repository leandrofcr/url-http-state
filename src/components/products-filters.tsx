import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router-dom";

const productsFiltersSchema = z.object({
  id: z.string(),
  name: z.string(),
});

type ProductsFiltersSchema = z.infer<typeof productsFiltersSchema>;

export function ProductsFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const name = searchParams.get("name");

  const { register, handleSubmit } = useForm<ProductsFiltersSchema>({
    resolver: zodResolver(productsFiltersSchema),
    values: {
      id: id ?? "",
      name: name ?? "",
    },
  });

  const handleFilterProducts = ({ id, name }: ProductsFiltersSchema) => {
    setSearchParams((state) => {
      if (id) {
        state.set("id", id);
      } else {
        state.delete("id");
      }

      return state;
    });

    setSearchParams((state) => {
      if (name) {
        state.set("name", name);
      } else {
        state.delete("name");
      }

      return state;
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleFilterProducts)}
      className="flex items-center gap-2"
    >
      <Input placeholder="ID do produto" {...register("id")} />
      <Input placeholder="Nome do produto" {...register("name")} />
      <Button type="submit" variant="link">
        <Search className="size-4 mr-2" />
        Filtrar resultados
      </Button>
    </form>
  );
}
