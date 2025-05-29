import { PATHS } from "@/lib/mock_data/paths";
import { ALL_COURSES } from "@/lib/mock_data/all_courses";

let COLLECTIONs = [
    {
        name: 'Theory & Methods',
        description: 'Fundamental theory, key concepts, and methodologies shaping software-defined vehicles',
        paths_slugs: ['sdv-101', 'sdv-guide-sdv101', 'pulse-framework'],
        paths: []
    },
    {
        name: 'Playground',
        description: 'Do quick prototyping on virtual environments',
        paths_slugs: ['playground-onboarding', 'sdv-runtime-getting-started', 'widget-development'],
        paths: []
    },
    {
        name: 'dreamKIT',
        description: 'Bring your ideas to life with dreamKIT',
        paths_slugs: ['dreamkit-getting-started', 'dreampack-getting-started'],
        paths: [],
        titleTag: "dreamkit"
    }
]



COLLECTIONs.forEach(collection => {
    collection.paths = PATHS.filter(path => collection.paths_slugs.includes(path.slug));
    collection.paths.forEach(path => {
        path.courses = ALL_COURSES.filter(course => path.course_ids.includes(course._id));
    });
});

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        res.status(200).json({ success: true, data: COLLECTIONs });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      break;
  }
}
