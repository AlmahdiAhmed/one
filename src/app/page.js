import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Home</div>
      <div>
        <Link href="/api/blogs">Click me</Link>
      </div>
    </div>
  );
}
