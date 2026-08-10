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
        <div className="bg-green-700 w-full h-100 relative">
          <div className="items-center absolute w-full justify-center flex top-2">
            <h1 className="text-white bg-green-700/90 p-2 rounded-2xl text-5xl text-center border-b-7 border-solid border-green-900">Welcome to the zoo!</h1>
          </div>
          <img src="https://images.unsplash.com/photo-1534567153574-2b12153a87f0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8em9vfGVufDB8fDB8fHww" alt="Image of the zoo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-700 w-full h-25 border-y-4 border-solid border-green-900 flex items-center justify-center">
          <p className="text-white">
            Welcome to our zoo! We've got a lot of animals
          </p>
        </div>
        <div className="px-16 py-20 w-full bg-yellow-50">
          <h2 className="text-3xl text-orange-400 font-bold italic">
              The Zoo is Full of Fun Experiences!
          </h2>
          <div className="w-full flex flex-wrap gap-10">
            <section className="w-full flex flex-wrap gap-5">
              <RectangleTextBox 
                title="Pet The Animals!" 
                text="At our zoo, we host regular petting events 
                  between 12pm to 4pm. Make sure to drop on by to 
                  see all the animals and get to pet one!" 
              />
              <RectangleImageCard 
                altText="Image of the Petting Event"
                image="https://tse2.mm.bing.net/th/id/OIP.uXXG0-FY0KGNbpm5eI7zBwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              />
            </section>
            <section className="w-full flex flex-wrap gap-5">
              <RectangleImageCard altText="Conservation Efforts" image="https://th.bing.com/th/id/R.3057b670ae23587586a33bc460439573?rik=n9LEW43JZpo4sQ&pid=ImgRaw&r=0"/>
              <RectangleTextBox title="Conservation Matters" text="At your local zoo..." />
            </section>
            <section className="w-full flex flex-wrap gap-5">
              <RectangleTextBox title="John" text="adwawd" />
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
