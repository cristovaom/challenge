"use server"

import { redirect } from "next/navigation";

export default async function Home() {
  redirect("availables")
  return (
    <>
      <h1>Redirecting...</h1>
    </>
  );
}
