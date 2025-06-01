import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/images/logo.png";
import Link from "next/link";
import StoryWriter from "@/components/StoryWriter";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <section className="mx-5 flex-1 grid grid-cols-1 lg:grid-cols-2 container pb-2">
        <div className="border-2 border-purple-300 flex flex-col space-y-5 justify-center items-center rounded-2xl order-1 lg:-order-1 pb-10 lg:mr-5 lg:ml-20">
          <Image src={Logo} height={300} alt="logo" />
          <Button
            asChild
            className="px-20 bg-purple-700 p-10 text-xl hover:bg-purple-600"
          >
            <Link href="/stories">Explore Story Library</Link>
          </Button>
        </div>
        <StoryWriter />
      </section>
    </main>
  );
}
