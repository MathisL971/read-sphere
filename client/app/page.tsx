import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";
import { auth } from "../auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <nav className="row-start-1 flex px-10 py-3 gap-[24px] flex-wrap items-center justify-end bg-cyan-800">
        {session && session?.user ? (
          <span className="flex gap-4 items-center">
            <Image
              src={session.user.image ?? ""}
              alt={session.user.name ?? ""}
              width={36}
              height={36}
              className="rounded-full border-2 border-cyan-100"
            />
            <SignOut />
          </span>
        ) : (
          <SignIn />
        )}
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
