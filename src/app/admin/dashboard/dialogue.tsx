"use client";
import { addProduct, printTextAction } from "@/actions/admin.action";
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
import { useFormState } from "react-dom";

export function DialogDemo() {
  const [state, formAction] = useFormState(printTextAction, {
    errors: {
      text: undefined,
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newProducts = {
      id: Date.now(), // Get the current timestamp as a number
      name: formData.get("name") as string,
      slug: formData.get("name") as string,
      description: formData.get("description") as string | null, // Make sure description can be null if needed
      price: +(formData.get("price") as string),
      image: formData.get("image") as string, // Changed from imageUrl to image
      createdAt: new Date(), // Set createdAt to the current date
    };

    console.log(newProducts);
    addProduct(newProducts);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mb-4">Add Products </Button>
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
