import connectToDatabase from "@/lib/mongodb";
import { COURSES } from "@/lib/mock_data/courses";
import { PATHS } from "@/lib/mock_data/paths";

export default async function handler(req, res) {
  const { method } = req;
  const { slug } = req.query;

  switch (method) {
    case "GET":
      try {
        let dbPath = PATHS.find((path) => path.slug === slug);
        if (!dbPath) {
          return res.status(404).json({ success: false, error: "Path not found" });
        }
        dbPath.courses = COURSES.filter((course) =>
          dbPath.courses.includes(course._id)
        );

        res.status(200).json({ success: true, data: dbPath });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      break;
  }
}
