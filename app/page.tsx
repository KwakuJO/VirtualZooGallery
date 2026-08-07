import AnimalCards from "./components/AnimalCards";
import Link from "next/link";
import RectangleImageCard from "./components/RectangleImageCard";
import RectangleTextBox from "./components/RectangleTextBox";

{/*
  This is the Home / Landing page. People will see this first
  (Modify This)
  
  Last modified by: Kwaku Otchere
  
*/}
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-wrap items-center justify-between bg-white dark:bg-black sm:items-start">
        <div className="bg-blue-200 w-full h-100">
          <img src="/" alt="Image of the zoo" />
        </div>
        <div className="bg-blue-50 w-full h-25 border-solid border-black border-y-3 flex items-center justify-center">
          <p className="">
            What the zoo does AHHHHH
          </p>
        </div>
        <div className="px-16 w-full">
          <div className="w-full">
            <section className="py-5 w-full flex flex-wrap gap-5">
              <RectangleTextBox text="adwawd" />
              <RectangleImageCard altText="j"/>
            </section>
            <section className="py-5 w-full flex flex-wrap gap-5">
              <RectangleImageCard altText="j"/>
              <RectangleTextBox text="adwawd" />
            </section>
            <section className="py-5 w-full flex flex-wrap gap-5">
              <RectangleTextBox text="adwawd" />
              <RectangleImageCard altText="j"/>
            </section>
          </div>
          <div>
            
          </div>
        </div>
        {/* <p>Page works fine</p> */}
        {/* <Link href="/allanimals">TESTING Delete Later. To All Animals Page</Link> */}
      </main>
    </div>
  );
}
