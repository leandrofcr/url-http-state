import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product, createProduct } from "@/data/products";

const createProductsSchema = z.object({
  name: z.string(),
  price: z.coerce.number(),
});

type CreateProductsSchema = z.infer<typeof createProductsSchema>;

export function CreateProductDialog() {
  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm<CreateProductsSchema>({
    resolver: zodResolver(createProductsSchema),
  });

  const { mutateAsync: createProductFn } = useMutation({
    mutationFn: createProduct,
    onSuccess(response) {
      queryClient.setQueryData<Product[]>(["products"], (data) => {
        if (!data) {
          return;
        }
        return [...data, response];
      });
    },
  });

  const handleCreateProduct = async (data: CreateProductsSchema) => {
    try {
      await createProductFn({
        name: data.name,
        price: data.price,
      });

      alert("Produto cadastrado com sucesso!");
    } catch (err) {
      alert("Erro ao cadastrar produto");
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo produto</DialogTitle>
        <DialogDescription>Criar novo produto no sistema</DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleCreateProduct)} className="space-y-6">
        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="name">Produto</Label>
          <Input className="col-span-3" id="name" {...register("name")} />
        </div>

        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="price">Preço</Label>
          <Input className="col-span-3" id="price" {...register("price")} />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
