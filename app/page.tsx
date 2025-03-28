// app/page.js
import Link from "next/link";
import ProductPage from "./components/Product";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session?.user?.name || "Guest"}</h1>
      <Link href="/users">Users</Link>
      <ProductPage />
    </main>
  );
}
