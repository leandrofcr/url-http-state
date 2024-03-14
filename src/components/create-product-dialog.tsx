import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateProductDialog() {
  return (
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
  );
}
