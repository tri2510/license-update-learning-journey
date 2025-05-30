import connectToDatabase from "@/lib/mongodb";
import CourseProgress from "@/lib/models/CourseProgress";

export const getProgressForCourse = async (user_id, course_id) => {

    try {
        await connectToDatabase();
        const dbProgress = await CourseProgress.findOne({ user_id: user_id, course_id: course_id });
        return dbProgress
    } catch(err) {
        console.log(err)
        return null
    }
}