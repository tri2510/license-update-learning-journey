import PathScreen from "@/app/components/screen/PathScreen"
import { notFound } from 'next/navigation'

async function fetchPathBySlug(slug) {
  if(!slug) throw ('Invalid post slug');
  try {
      const response = (await fetch((process.env.HOST||'http://localhost:3000') +  "/api/paths/" + slug))
      const data = await response.json();
      if (data && data.success) {
          return data.data
      } else {
          throw ('Path not found')
      }
  } catch (error) {
    console.log(error)
      return null
  }
}

const Page =  async ({params}) => {

    const { path_slug } = await params;
    if(!path_slug) notFound()
    let curPath
    try {
      curPath =  await fetchPathBySlug(path_slug);
    } catch(err) {
      console.log(err)
    }
    
    if(!curPath) notFound()

    if(curPath.maps && curPath.courses) {
      curPath.maps.forEach((item) => {
          item.course = curPath.courses.find(c => c._id == item.course_id)
      })
    }

    // console.log(curPath)

    return (
      <div
        className="bg-slate-100 text-slate-600 text-2xl p-1
            h-full w-full grid place-items-center"
      >
        <PathScreen path={curPath}/>
      </div>
    );
  }

  export default Page;
  