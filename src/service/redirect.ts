'use server';

import { redirect } from "next/navigation";

export async function redirectToUID(data: FormData) {
  redirect(`/profile/${data.get('uid')}`)
}