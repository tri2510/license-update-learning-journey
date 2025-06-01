import connectToDatabase from "@/lib/mongodb";
import LessonProgress from "@/lib/models/LessonProgress";
import { check_auth } from "@/lib/backend/check_auth";
import { STATE_IN_PROGRESS, LESSON_STATES, STATE_NOT_STARTED } from "../../../../../../lib/const";

export default async function handler(req, res) {
    const { method } = req;
    const { course_id, lesson_slug } = req.query;

    const { user_id, token } = check_auth(req, res);

    if (!user_id) {
        return res.status(401).json({ success: false, error: "Unauthorized" });
    }
    if (!course_id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ success: false, error: "Invalid course ID format" });
    }

    switch (method) {
        case "GET":
            try {

                await connectToDatabase();

                return res.status(501).json({
                    success: false,
                    error: "This method is not implemented yet"
                });

                const dbProgress = await LessonProgress.findOne({
                    user_id: user_id,
                    course_id: course_id
                });

                if (!dbProgress) {
                    return res.status(404).json({ success: false, error: "Lesson progress not found" });
                }

                res.status(200).json({ success: true, data: dbProgress });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;
        case "PUT":
            try {
                const updateData = req.body;
                if (!updateData || !LESSON_STATES.includes(updateData.state)) {
                    return res.status(400).json({ success: false, error: "Invalid request body, incorrect lesson state" });
                }

                await connectToDatabase();

                const existingProgress = await CourseProgress.findOne({
                    user_id: user_id,
                    course_id: course_id
                });

                if (!existingProgress) {
                    existingProgress = {
                        user_id: user_id,
                        course_id: course_id,
                        state: STATE_IN_PROGRESS
                    };
                }

                if(!existingProgress.lessons) {
                    existingProgress.lessons = {}
                }

                let existLesson = existingProgress.lessons[lesson_slug]

                if(!existLesson) {
                    existLesson = {
                        state: STATE_NOT_STARTED,
                        finished_at: null,
                        data: {},
                        records: []
                    }
                }

                existLesson.state = updateData.state
                existLesson.updated_at = new Date()
                if(payload.data) {
                    existLesson.data = {
                        ...existLesson.data,
                        ...updateData.data
                    }
                }
                

                switch(updateData.state) {
                    case STATE_NOT_STARTED:
                        existLesson.started_at = null;
                        existLesson.finished_at = null;
                        existLesson.records.push({
                            at: new Date(),
                            action: updateData.record?.action ||  "Withdraw lesson",
                            refId: updateData.record?.refId || '',
                            refType: updateData.record?.refType || ''
                        })
                        break;
                    case STATE_IN_PROGRESS:
                        if (!existLesson.started_at) {
                            existLesson.started_at = new Date();
                        }
                        existLesson.finished_at = null;
                        existLesson.records.push({
                            at: new Date(),
                            action: updateData.record?.action ||  "Do learning",
                            refId: updateData.record?.refId || '',
                            refType: updateData.record?.refType || ''
                        })
                        break;
                    case STATE_COMPLETED:
                        if (!existLesson.started_at) {
                            existLesson.started_at = new Date();
                        }
                        existLesson.finished_at = new Date();
                        existLesson.records.push({
                            at: new Date(),
                            action: updateData.record?.action ||  "Finish lesson",
                            refId: updateData.record?.refId || '',
                            refType: updateData.record?.refType || ''
                        })
                        break;
                }

                existingProgress.lessons[lesson_slug] = existLesson

                // when I do start or finish lesson, make sure auto set course to started
                if([STATE_IN_PROGRESS, STATE_COMPLETED].includes(updateData.state)) {
                    if(existingProgress.state == STATE_NOT_STARTED) {
                        existingProgress.state = STATE_IN_PROGRESS
                        existingProgress.started_at = new Date()
                    }
                }

                const updatedProgress = await LessonProgress.findOneAndUpdate(
                    existingProgress,
                    { new: true, upsert: true }
                );

                if (!updatedProgress) {
                    return res.status(404).json({ success: false, error: "Lesson progress not found" });
                }

                res.status(200).json({ success: true, data: updatedProgress });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;
        default:
            res.status(405).json({ success: false, error: "Method not allowed" });
            break;
    }
}
