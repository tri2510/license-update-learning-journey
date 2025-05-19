"use client";

import Image from "next/image";
import CanvaScreen from "../paths/CanvaScreen";
import PathListScreen from "../paths/PathListScreen";

const PathScreen = ({ path }) => {
  
  if (!path) return;

  return (
    <div className="m-0 w-full h-full bg-white flex justify-center select-none p-0">
      {!path && <div>Loading...</div>}
      {path && <>
        {
          path.configs?.display_type==="canvas" && <CanvaScreen path={path}/>
        }

        {
          path.configs?.display_type!=="canvas" && <PathListScreen path={path}/>
        }
      </>}
    </div>
  );
};

export default PathScreen;
