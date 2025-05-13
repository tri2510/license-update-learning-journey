import PathList from "./components/screen/PathList";
import { FaDiamond } from "react-icons/fa6";
import { fetchPaths } from "@/lib/utils/consume_apis/api_path"

export default async function Home() {
  let dbPaths = []
  try {
    dbPaths = await fetchPaths();
  } catch (err) {
    console.log(err)
  }


  return (
    <div className="bg-white text-slate-600 text-2xl p-0
        h-full w-full flex flex-col gap-4">

      <div className="w-full bg-[#46499E] text-white flex flex-col items-center pt-8 pb-8 px-4">
        <div className="container h-full flex flex-row gap-4">
          <div className="flex-2 px-2">
            <div className="text-5xl font-bold  pt-8 text-left">
              Your SDV journey starts here.
            </div>
            <div className="text-xl font-bold text-left pt-4 mt-4 flex flex-col gap-1">
              <div className="flex items-center"><FaDiamond size={20} className="mr-8 text-[#EF60A3]" /> From zero to hero for free</div>
              <div className="flex items-center"><FaDiamond size={20} className="mr-8 text-[#EF60A3]" /> Step-by-step instructions</div>
              <div className="flex items-center"><FaDiamond size={20} className="mr-8 text-[#EF60A3]" /> Practice in our virtual lab and seamlessly transition to physical kit</div>
              <div className="flex items-center"><FaDiamond size={20} className="mr-8 text-[#EF60A3]" /> Log in to track your progress and get certificates</div>
              <div className="flex items-center"><FaDiamond size={20} className="mr-8 text-[#EF60A3]" /> Stay in the loop with our community</div>
            </div>
          </div>

          <div className="flex-1 px-2 grid place-items-center">
            <img className="w-[20vw]" src="/imgs/sam-img.svg" />
          </div>

        </div>

        <div className="container h-full flex flex-col gap-2 mt-8">
          <div className="w-full text-center">How do you want to start?</div>
          <div className="flex flex-row gap-6 mt-2">
            <div className="flex-1 rounded-lg bg-white flex flex-col items-center justify-center text-lg px-2 py-2 cursor-pointer hover:scale-105">
              <img className="h-28 p-4" src="/imgs/learning_path_icon.png" />
              <div className="text-[#46499E] font-bold px-4 py-1">I want to follow a guided path</div>
            </div>

            <div className="flex-1 rounded-lg bg-white flex flex-col items-center justify-center text-lg px-2 py-2 cursor-pointer hover:scale-105">
              <img className="h-28" src="/imgs/edit_path_icon.jpg" />
              <div className="text-[#46499E] font-bold px-4 py-1">I want to design a new path</div>
            </div>

            <div className="flex-1 rounded-lg bg-white flex flex-col items-center justify-center text-lg px-2 py-2 cursor-pointer hover:scale-105">
              <img className="h-28" src="/imgs/hackathon.png" />
              <div className="text-[#46499E] font-bold px-4 py-1">I want to plan a hackathon</div>
            </div>

            <div className="flex-1 rounded-lg bg-white flex flex-col items-center justify-center text-lg px-2 py-2 cursor-pointer hover:scale-105">
              <img className="h-28" src="/imgs/dreamKit.png" />
              <div className="text-[#46499E] font-bold px-4 py-1">I want to work with dreamKIT</div>
            </div>
          </div>
        </div>

      </div>

      <div>
        <PathList paths={dbPaths} />
      </div>

    </div>
  );
}


