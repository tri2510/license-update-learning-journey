import { COURSES as path2_courses } from "@/lib/mock_data/path2/courses.js" 
import { COURSES as path0_courses } from "@/lib/mock_data/path0/courses.js"

const processCourse = (course) => {
    course.forEach(c => {

        c.created_at = c.created_at || new Date("2023-01-01")
        c.updated_at = c.updated_at || new Date("2023-06-07")
        c.lessons = c.lessons || []
        c.created_by = c.created_by || "John Doe"
        c.num_learners = c.num_learners || 745
        c.num_certified_learners = c.num_certified_learners || 532
        c.context = c.context || {
            user_id: 'abc',
            state: 'finished'
        }
        c.lessons = c.lessons || []
        c.hiddenContent = c.hiddenContent || {}
        c.course_type = c.course_type || "standard"
        c.background_img = c.background_img || "/imgs/green_bg.png"
        c.path_type = c.path_type || "standard"
        c.tags = c.tags || []
        c.extends = c.extends || {}
        c.configs = c.configs || {}
        c.image = c.image || "https://example.com/images/js-course.jpg"
        c.thumb = c.thumb || "https://example.com/images/js-thumb.jpg"
        c.category = c.category || "Programming"
        c.icon = c.icon || "https://example.com/icons/js-icon.png"
        c.icon_name = c.icon_name || "lesson-finished"
        c.state = c.state || "finished"
        c.duration = c.duration || "4 hrs"
        c.difficulty = c.difficulty || "beginner"
        c.valid_from = c.valid_from || new Date("2023-01-01")
        c.valid_to = c.valid_to || new Date("2026-12-31")
        c.slug = c.slug || c.name.toLowerCase().replace(/ /g, "-")
    })
}

processCourse(path0_courses)
processCourse(path2_courses)

export const ALL_COURSES = [...path0_courses, ...path2_courses]