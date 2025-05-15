import { ALL_COURSES } from "@/lib/mock_data/all_courses";
// import { LESSONs } from "@/lib/mock_data/course1_lessons";

export default async function handler(req, res) {
  const { method } = req;
  const { slug } = req.query;

  switch (method) {
    case "GET":
      try {
        let dbCourse = ALL_COURSES.find((course) => course.slug === slug);
        if (!dbCourse) {
          return res.status(404).json({ success: false, error: "Course not found" });
        }
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
