import prisma from "@/lib/db";

export async function fetchUser(userId: number) {
    try {
        const userInfo = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        return userInfo;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("User not found");
    }
}

export async function getDefaultUserDetails() {
    return await fetchUser(1);
}

export async function deleteUser(userId: number) {

    await prisma.user.delete({
        where: {
            id: userId,
        },
    });

}
