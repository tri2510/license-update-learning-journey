import connectToDatabase from "@/lib/mongodb";
import CourseProgress from "@/lib/models/CourseProgress";

export const getProgressForCourse = async (user_id, course_id) => {
    if(!user_id) return
    try {
        console.log(`getProgressForCourse user_id ${user_id}`)
        await connectToDatabase();
        const dbProgress = await CourseProgress.findOne({ user_id: user_id, course_id: course_id });
        return dbProgress
    } catch (err) {
        console.log(err)
        return null
    }
}

export const getProgressForCourses = async (user_id, course_ids) => {
    if(!user_id) return
    try {
        let tmpCourseIds = []
        if (Array.isArray(course_ids)) {
            tmpCourseIds = course_ids;
        } else if (typeof course_ids === "string") {
            tmpCourseIds = course_ids.split(",");
        }

        await connectToDatabase();
        const dbProgresses = (await CourseProgress.find({
            user_id: user_id,
            course_id: { $in: tmpCourseIds }
        }).lean())
        return dbProgresses;
    } catch (err) {
        console.log(err)
        return null
    }
}

export const processCourseContext = async (course) => {
    if (!course) return

    course.context = {
        state: 'not_started'
    }
    if(course.progress) {
        course.context.state = course.progress?.state || 'not_started'
    }
    
}