
import BreadCrumb from "@/app/components/atom/BreadCrumb"
import { notFound } from 'next/navigation'
import { fetchPathBySlug } from "@/lib/utils/consume_apis/api_path"
import { fetchCourseBySlug } from "@/lib/utils/consume_apis/api_course"
import CourseScreen from "@/app/components/screen/CourseScreen"

const Page = async  ({params}) => {

  const { path_slug, course_slug } = await params;
  if(!path_slug || !course_slug) notFound()

  let dbPath = null
  let dbCourse = null

  try {
    dbPath = await fetchPathBySlug(path_slug);
    dbCourse = await fetchCourseBySlug(course_slug);
  } catch(err) {
    console.log(err)
  }

  
  if(!dbPath || !dbCourse) notFound()

  return (
    <div
      className="w-full bg-[#FFF9EC] text-slate-600 text-2xl p-0 pb-4
                h-fit min-h-full place-items-center"
    >
      <BreadCrumb items={[
          { label: dbPath.name, link: `/path/${path_slug}` }, 
          { label: dbCourse.name, link: `/path/${path_slug}/course/${course_slug}` } 
        ]} />

      <div className="w-full mt-4 px-4 flex flex-col">
          <div className="w-full px-2 lg:px-4">
              <CourseScreen course={dbCourse}/>
          </div>
      </div>
    </div>
  );
}

export default Page;
