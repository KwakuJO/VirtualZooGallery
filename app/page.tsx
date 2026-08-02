import AnimalCards from "./components/AnimalCards";
import Link from "next/link";


{/*
  This is the Home / Landing page. People will see this first
  (Modify This)
  
  Last modified by: Kwaku Otchere
  
*/}
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <p>Page works fine</p>
        <Link href="/allanimals">TESTING Delete Later. To All Animals Page</Link>
      </main>
    </div>
  );
}
