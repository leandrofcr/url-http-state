import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewProductDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="size-4 mr-2" />
          Novo product
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo produto</DialogTitle>
          <DialogDescription>Criar novo produto no sistema</DialogDescription>

          <form action="" className="space-y-6">
            <div className="grid grid-cols-4 items-center text-right gap-3">
              <Label htmlFor="name">Produto</Label>
              <Input className="col-span-3" id="name" />
            </div>

            <div className="grid grid-cols-4 items-center text-right gap-3">
              <Label htmlFor="price">Preço</Label>
              <Input className="col-span-3" id="price" />
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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
