import connectToDatabase from "@/lib/mongodb";
import { ALL_COURSES } from "@/lib/mock_data/all_courses";
import { ICONs } from "@/lib/mock_data/media";
import { PATHS } from "@/lib/mock_data/paths";

function addMediaUrlForCourses(courses) {
  courses.forEach((c) => {
    let matchMedia = ICONs.find((icon) => icon.name == c.icon_name);
    if (matchMedia) {
      c.icon = matchMedia.url;
    } else {
      console.log("Not match");
    }
  });
}

export default async function handler(req, res) {
  const { method } = req;
  const { slug } = req.query;

  switch (method) {
    case "GET":
      try {
        let dbPath = PATHS.find((path) => path.slug === slug);
        if (!dbPath) {
          return res
            .status(404)
            .json({ success: false, error: "Path not found" });
        }

        try {
          dbPath.courses = ALL_COURSES.filter((course) =>
            dbPath.course_ids.includes(course._id)
          );

          addMediaUrlForCourses(dbPath.courses);
        } catch (err) {
          console.log(err);
        }

        res.status(200).json({ success: true, data: dbPath });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      break;
  }
}
