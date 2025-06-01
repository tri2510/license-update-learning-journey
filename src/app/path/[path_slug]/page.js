import PathScreen from "@/app/components/screen/PathScreen"
import { notFound } from 'next/navigation'
import { fetchPathBySlug } from "@/lib/utils/consume_apis/api_path"
import BreadCrumb from "@/app/components/atom/BreadCrumb"

import { cookies } from 'next/headers';

const Page = async ({ params }) => {
  const cookieStore = await cookies();

  const { path_slug } = await params;
  if (!path_slug) notFound()
  let curPath

  try {
    curPath = await fetchPathBySlug(
      path_slug, 
      cookieStore.get('user_id')?.value || "", 
      cookieStore.get('token')?.value || "");
  } catch (err) {
    console.log(err)
  }

  if (!curPath) notFound()

  if (curPath.maps && curPath.courses) {
    curPath.maps.forEach((item) => {
      item.course = curPath.courses.find(c => c._id == item.course_id)

      console.log(`\r\n------------------- ${item.course.slug}`)
      console.log("context", item.course.context)
      console.log("progress", item.course.progress)
      console.log("icon", item.course.icon)
      console.log("icon_name", item.course.icon_name)
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
      <PathScreen path={curPath} />
    </div>
  )
}

export default Page;
