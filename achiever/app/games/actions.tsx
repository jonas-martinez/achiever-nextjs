"use server";

import { revalidatePath } from "next/cache";

let counter = 0;

export async function increment() {
    counter++;

    revalidatePath("/test");
}

export async function getCounter() {
    return counter;
}
