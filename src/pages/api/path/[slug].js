import connectToDatabase from "@/lib/mongodb";
import Path from "@/lib/models/Path";

export default async function handler(req, res) {
  const { method } = req;
  const { slug } = req.query;

  await connectToDatabase();

  switch (method) {
    case "GET":
      try {
        let now = new Date();
        const dbPath = await Path.findOne({
          slug: slug,
          $or: [
            { valid_from: { $lte: now }, valid_to: { $gte: now } }, // Valid within range
            { valid_from: { $exists: false } }, // No start date (always valid)
            { valid_to: { $exists: false } }, // No end date (always valid)
          ],
          state: "released",
        })
          .populate("courses", "name slug thumb category")
          .exec();

        if (!dbPath) {
          return res
            .status(404)
            .json({ success: false, message: "Path not found" });
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
