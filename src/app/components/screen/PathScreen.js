"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const PathScreen = ({ path }) => {
  const router = useRouter();
  if (!path) return;

  return (
    <div className="p-0 m-0 w-full h-full bg-white flex items-center justify-center select-none">
      {!path && <div>Loading...</div>}
      {path && (
        <>
          <div className="relative w-[98%]">
            <img
              className="block w-full h-fit z-0"
              src={path.background_img}
              alt={path.name}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10 bg-white z-10"></div>
            {path.maps &&
              path.maps.map((item, index) => (
                <div
                  key={index}
                  className="absolute flex flex-col items-center cursor-pointer hover:scale-110 z-20"
                  style={{
                    top: item.y,
                    left: item.x,
                    width: "10wv",
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
                    className="text-slate-700 text-[1vw] font-bold text-center leading-none"
                    style={{
                      maxWidth: "10vw",
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
