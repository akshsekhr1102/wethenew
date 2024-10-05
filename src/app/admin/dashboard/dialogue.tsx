"use client";
import { addProduct } from "@/actions/admin.action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newProducts = {
      id: Date.now(),
      name: formData.get("name") as string,
      slug: formData.get("slug") as string,
      description: formData.get("description") as string | null,
      price: +(formData.get("price") as string),
      image: formData.get("image") as string,
      createdAt: new Date(),
      collectionId: null,
    };

    console.log(newProducts);
    addProduct(newProducts);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mb-4">Add Products</Button>
      </DialogTrigger>
      <DialogHeader className="bg-white">
        <DialogTitle>Add New Products</DialogTitle>
      </DialogHeader>
      <DialogContent className="bg-white">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Product Name</Label>
            <Input name="name" type="text" required />
          </div>

          <div>
            <Label htmlFor="slug">Slug</Label>
            <Input name="slug" type="text" required />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Input name="description" type="text" />
          </div>

          <div>
            <Label htmlFor="price">Price</Label>
            <Input name="price" type="number" required />
          </div>

          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input name="image" type="text" required />
          </div>

          <Button type="submit" className="self-end my-10">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
