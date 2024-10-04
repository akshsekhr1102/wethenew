"use client";
import { deleteProduct } from "@/actions/admin.action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";

interface Product {
  id: number;
}

interface DeleteDialogProps {
  product: Product;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({ product }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await deleteProduct({ id: product.id });
    } catch (err) {
      setError("Failed to delete product. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <p className="text-xs">Are you sure you want to delete this product?</p>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex space-x-2">
          <Button
            onClick={handleDelete}
            variant="destructive"
            disabled={isLoading}
          >
            {isLoading ? "Deleting" : "Confirm"}
          </Button>
          <Button
            onClick={() => {
              DialogClose;
            }}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
