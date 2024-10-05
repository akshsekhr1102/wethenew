"use client"; // Import the edit function
import { editProduct } from "@/actions/admin.action";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from "@prisma/client";
import { DialogTrigger } from "@radix-ui/react-dialog";

interface EditProductDialogProps {
  product: Product;
}

export function EditProductDialog({ product }: EditProductDialogProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const updatedProduct = {
      id: product.id,
      name: formData.get("name") as string,
      slug: formData.get("name") as string,
      description: formData.get("description") as string | null,
      price: +(formData.get("price") as string),
      image: formData.get("image") as string,
      collection: formData.get("collection") as string,
    };

    console.log(updatedProduct);
    editProduct(updatedProduct);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit</Button>
      </DialogTrigger>

      <DialogContent className="bg-white">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Product Name</Label>
            <Input
              name="name"
              type="text"
              required
              defaultValue={product.name}
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              name="description"
              type="text"
              defaultValue={product.description || ""}
            />
          </div>

          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              name="price"
              type="number"
              required
              defaultValue={product.price}
            />
          </div>

          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input
              name="image"
              type="text"
              required
              defaultValue={product.image}
            />
          </div>
          <div>
            <Label htmlFor="collection">Collection</Label>
            <Input
              name="collection"
              type="text"
              required
              defaultValue={product.image}
            />
          </div>

          <Button type="submit" className="self-end my-10">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
