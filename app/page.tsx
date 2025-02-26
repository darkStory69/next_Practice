import Link from "next/link";
import ProductPage from "./components/Product";

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <Link href="/users">Users</Link>
      <ProductPage />
    </div>
  );
}
