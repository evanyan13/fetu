import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
   <main>
      <Link href="/dashboard">
        <Button className="primary-button">
          Home
        </Button>
      </Link>
   </main>
  );
}
