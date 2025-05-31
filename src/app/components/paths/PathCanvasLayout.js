'use client'

import { useRouter } from "next/navigation";
import CertificateScreen from "../atom/CertificateScreen";
import { useState } from "react"

import { saveStateCourseStarted, saveStateCourseCompleted } from "@/lib/frontend/course"

const CourseNode = ({ path, item }) => {
  const router = useRouter();
  const [showCert, setShowCert] = useState(false)

  if (!path || !item) return <></>
  return <>
    {showCert && <CertificateScreen image={item.course?.image} requestClose={() => setShowCert(false)} />}
    <div
      className={`absolute flex flex-col items-center cursor-pointer hover:scale-110 z-20 
            ${["locked"].includes(item.course?.state) && "opacity-50"}
            ${["locked-highlight"].includes(item.course?.state) && "opacity-70"}
            `}
      style={{
        top: item.y,
        left: item.x,
        width: "11wv",
      }}
      onClick={async () => {

        if (item.course?.state === "locked") {
          return;
        }

        if (item.course?.type == 'award') {
          if (item.course?.context?.state === 'finished') {
            setShowCert(true);
          }
          return
        }

        if (item.course?.extends?.external_link) {
          window.open(item.course?.extends?.external_link, "_blank");
          window.location.reload()

          if(item.course?.state!='completed') {
            await saveStateCourseCompleted(item.course)
          }
          return;
        }

        router.push(
          `/path/${path.slug}/course/${item.course?.slug}`
        );
      }}
    >

      <div className="relative" style={{
        width: "6.5vw",
        height: "6.5vw",
      }}>

        <img
          src={item.course?.icon}
          className="absolute h-full w-full top-0 left-0 z-0 object-contain"
        />
        {item.course?.top_icon && <img src={item.course?.top_icon}
          className="absolute top-[27%] left-[30%] z-10 w-[40%] h-[40%]" />}
      </div>

      <div
        className="mt-0 text-slate-700 text-[9px] lg:text:[10px] xl:text-base 
                      font-semibold text-center leading-none"
        style={{
          maxWidth: "11vw",
        }}
      >
        {item.course?.name}
      </div>
    </div>
  </>
}

const PathCanvasLayout = ({ path }) => {
  const router = useRouter();

  return <div className="px-2 lg:px-4">
    <div className="relative w-full h-[560px] rounded-sm border-6 border-gray-200"
      style={{
        backgroundImage: `url(${path.background_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>

      <div className="z-0 w-full h-full left-0 top-0 opacity-50 bg-white"></div>

      {/* <div className="absolute top-6 left-6 z-20">
        <Link href="/">
          <TfiHome size={30} className="text-slate-700 hover:scale-110" />
        </Link>
      </div> */}

      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10 bg-white z-10"></div>
      {path.maps &&
        path.maps.map((item, index) => <CourseNode key={index} path={path} item={item} />)}
    </div>
  </div>
}

export default PathCanvasLayout