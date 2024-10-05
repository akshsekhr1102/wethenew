"use server";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/db";
import { DialogDemo } from "./dialogue";
import { EditProductDialog } from "./edit-dialogue";
import DeleteDialog from "./delete-dialog";
import Link from "next/link";

export default async function AdminDashboard() {
  const products = await prisma.product.findMany({});
  const collection = await prisma.collection.findMany({});

  return (
    <Card className="w-full">
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <DialogDemo />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Products</TableHead>
              <TableHead className="hidden sm:table-cell">
                Collections
              </TableHead>
              <TableHead className="hidden sm:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Update</TableHead>
              <TableHead className="text-right">ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((e) => (
              <TableRow key={e.id} className="bg-accent">
                <TableCell>
                  <Link href={`/products/${e.slug}`}>
                    <div className="font-medium">{e.name}</div>
                  </Link>
                </TableCell>

                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs">
                    {collection.find((col) => col.id === e.collectionId)
                      ?.name || "No Collection"}
                  </Badge>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {e.price}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {e.createdAt.toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">{e.id}</TableCell>
                <TableCell>
                  <EditProductDialog product={e} />{" "}
                  {/* Pass the current product here */}
                </TableCell>
                <TableCell>
                  <DeleteDialog product={e} />
                  {/* Pass the current product here */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
