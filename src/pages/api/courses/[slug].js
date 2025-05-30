import { ALL_COURSES } from "@/lib/mock_data/all_courses";
// import { LESSONs } from "@/lib/mock_data/course1_lessons";

import { getProgressForCourse } from "../progress/courses/utils";
import { check_auth } from "@/lib/check_auth";


const processCourseContext = async (course, courseProgress) => {
  if(!course) return
  course.context = {
    state: courseProgress?.state || 'not_started'
  }
  course.progress = courseProgress
}

export default async function handler(req, res) {
  const { method } = req;
  const { slug } = req.query;
  const { user_id, token } = check_auth(req, res);

  switch (method) {
    case "GET":
      console.log(`BE get course ${slug}`)
      try {
        let dbCourse = ALL_COURSES.find((course) => course.slug === slug);
        if (!dbCourse) {
          return res.status(404).json({ success: false, error: "Course not found" });
        }

        let courseProgress
        if(user_id) {
          courseProgress = await getProgressForCourse(user_id, course_id)
        }
        await processCourseContext(dbCourse, courseProgress)
        
        // dbCourse.lessons = LESSONs
        res.status(200).json({ success: true, data: dbCourse });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      break;
  }
}
