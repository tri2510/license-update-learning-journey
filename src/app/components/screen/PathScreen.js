"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { TfiHome } from "react-icons/tfi";
import Link from "next/link";

const PathScreen = ({ path }) => {
  const router = useRouter();
  if (!path) return;

  return (
    <div className="m-0 w-full h-full bg-white flex items-center justify-center select-none p-3">
      {!path && <div>Loading...</div>}
      {path && (
        <>
          <div className="relative w-full h-full rounded-xl  "
            style={{
              backgroundImage: `url(${path.background_img})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            {/* <img
              className="w-full h-full z-0 object-cover"
              src={path.background_img}
              alt={path.name}
            /> */}

            <div className="z-0 w-full h-full left-0 top-0 opacity-50 bg-white"></div>

            <div className="absolute top-6 left-6 z-20">
              <Link href="/">
                <TfiHome size={30} className="text-slate-700 hover:scale-110"/>
              </Link>
            </div>

            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10 bg-white z-10"></div>
            {path.maps &&
              path.maps.map((item, index) => (
                <div
                  key={index}
                  className={`absolute flex flex-col items-center cursor-pointer hover:scale-110 z-20 
                    ${["locked"].includes(item.course?.state) && "opacity-50"}
                    ${["locked-highlight"].includes(item.course?.state) && "opacity-70"}
                    `}
                  style={{
                    top: item.y,
                    left: item.x,
                    width: "11wv",
                  }}
                  onClick={() => {
                    router.push(
                      `/path/${path.slug}/course/${item.course?.slug}`
                    );
                  }}
                >
                  <img
                    src={item.course?.icon}
                    style={{
                      width: "6.5vw",
                      height: "6.5vw",
                    }}
                    className=""
                  />
                  <div
                    className="mt-1 text-slate-700 text-[9px] lg:text:[10px] font-semibold text-center leading-none"
                    style={{
                      maxWidth: "11vw",
                    }}
                  >
                    {item.course?.name}
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PathScreen;
