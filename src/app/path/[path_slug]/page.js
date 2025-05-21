import PathScreen from "@/app/components/screen/PathScreen"
import { notFound } from 'next/navigation'
import { fetchPathBySlug } from "@/lib/utils/consume_apis/api_path"
import BreadCrumb from "@/app/components/atom/BreadCrumb"

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

    return (
      <div
        className="bg-slate-100 text-slate-600 text-2xl p-1
            h-full w-full flex flex-col"
      >
        <BreadCrumb items={[
          { label: curPath.name, link: `/path/${curPath.slug}` },
        ]} />
        <PathScreen path={curPath}/>
      </div>
    )
  }

  export default Page;
  