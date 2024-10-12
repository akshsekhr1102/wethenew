"use server"
import prisma from "@/lib/db";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";



export async function printTextAction(formData: FormData) {
    const text = formData.get("text")
    return {
        errors: {
            text: (!text) ? 'text is required' : undefined
        }
    }
}
export const addProduct = async (formData: {
    name: string;
    description: string | null;
    price: number;
    image: string;
    slug: string;
}, collectionName: string) => {
    const newProduct = await prisma.product.create({
        data: {
            name: formData.name,
            description: formData.description,
            price: formData.price,
            image: formData.image,
            slug: formData.slug,
            // The collection is linked based on the collectionName
            collection: {
                connectOrCreate: {
                    where: { name: collectionName },
                    create: { name: collectionName, description: null },
                },
            },
        },
    });
    return newProduct;
};

export const editProduct = async (
    formData: Omit<Product, "createdAt" | "collectionId"> & { collectionName: string }
) => {
    // Find the collection by name or create a new one
    const collection = await prisma.collection.upsert({
        where: { name: formData.collectionName },
        update: {}, // If it exists, do nothing
        create: { name: formData.collectionName, description: null },
    });

    // Update the product with the new data, including the updated collectionId
    const updatedProduct = await prisma.product.update({
        where: { id: formData.id },
        data: {
            name: formData.name,
            price: formData.price,
            description: formData.description ?? null,
            image: formData.image,
            collectionId: collection.id, // Update the collectionId
        },
    });

    // Revalidate the cache to reflect changes on the dashboard page
    revalidatePath("/dashboard");

    return updatedProduct;
};

// export const addProduct = async (formData: Product, collectionName: string) => {
//     const slug = (formData.name as string)
//         .toLowerCase()
//         .trim()
//         .replace(/[^a-zA-Z0-9 ]/g, "")
//         .replaceAll(" ", "-");


//     const collection = await prisma.collection.upsert({
//         where: { name: collectionName },
//         update: {},
//         create: {
//             name: collectionName,
//             description: null,
//         },
//     });


//     const newProduct = await prisma.product.create({
//         data: {
//             name: formData.name as string,
//             price: formData.price,
//             description: formData.description ?? null,
//             slug: slug,
//             image: formData.image,
//             collectionId: collection.id, // Associate with the collection's ID
//         },
//     });

//     revalidatePath("/dashboard", "page");
//     return newProduct;
// };

// export const editProduct = async (formData: Omit<Product, "createdAt" | "collectionId">) => {
//     const updatedProduct = await prisma.product.update({
//         where: { id: formData.id },
//         data: {
//             name: formData.name as string,
//             price: formData.price,
//             description: formData.description ?? null,
//             image: formData.image,
//         },
//     });
//     revalidatePath("/dashboard", "page")
//     return updatedProduct;
// };

export const deleteProduct = async ({ id }: { id: number }) => {
    const deleteProduct = await prisma.product.delete({
        where: { id: id },
    })
    revalidatePath("/dashboard", "page")
    return deleteProduct
}