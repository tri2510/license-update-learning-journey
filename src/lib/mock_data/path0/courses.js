export const COURSES = [
    {
        _id: "6452a86e7895abcd12345678", // Random MongoDB ObjectId
        name: "Overview",
        shortDescription: "Overview",
        description: "Overview",
        icon_name: "lesson-finished",
        state: "finished",
        type: "lesson",
        context: {
            user_id: 'abc',
            state: 'finished'
        },
        extends: {
            external_link: "https://www.sdv.guide/sdv101",
        },
    },
    {
        _id: "6452a86e7895abcd12345679", // Random MongoDB ObjectId
        name: "Part A: Essentials",
        shortDescription: "Part A: Essentials",
        description: "Part A: Essentials",
        icon_name: "lesson-finished",
        state: "finished",
        type: "lesson",
        context: {
            user_id: 'abc',
            state: 'finished'
        },
        extends: {
            external_link: "https://www.sdv.guide/sdv101/part-a-essentials",
        },
    },
    {
        _id: "6452a86e7895abcd12345680", // Random MongoDB ObjectId
        name: "Part B: Lessons Learned",
        shortDescription: "Part B: Lessons Learned",
        description: "Part B: Lessons Learned",
        icon_name: "lesson-inprogress",
        state: "inprogress",
        type: "lesson",
        context: {
            user_id: 'abc',
            state: 'progress'
        },
        extends: {
            external_link: "https://www.sdv.guide/sdv101/part-b-lessons-learned",
        },
    },
    {
        _id: "6452a86e7895abcd12345681", // Random MongoDB ObjectId
        name: "Part C: Building Blocks",
        shortDescription: "Part C: Building Blocks",
        description: "Part C: Building Blocks",
        icon_name: "lesson-ready",
        state: "locked",
        type: "lesson",
        context: {
            user_id: 'abc',
            state: 'ready'
        },
        extends: {
            external_link: "https://www.sdv.guide/sdv101/part-c-building-blocks",
        },
    },
    {
        _id: "6452a86e7895abcd12345682", // Random MongoDB ObjectId
        name: "Part D: Implementation Strategies",
        shortDescription: "Part D: Implementation Strategies",
        description: "Part D: Implementation Strategies",
        icon_name: "lesson-ready",
        state: "locked",
        type: "lesson",
        context: {
            user_id: 'abc',
            state: 'ready'
        },
        extends: {
            external_link: "https://www.sdv.guide/sdv101/part-d-implementation-strategies",
        },
    },
    {
        _id: "6452a86e7895abcd12345683", // Random MongoDB ObjectId
        name: "Verify your knowledge",
        shortDescription: "Verify your knowledge",
        description: "Verify your knowledge",
        icon_name: "lesson-ready",
        top_icon: "/imgs/badge/practice.png",
        state: "locked",
        type: "lesson",
        context: {
            user_id: 'abc',
            state: 'ready'
        },
        extends: {
            // external_link: "https://www.sdv.guide/sdv101/part-a-essentials",
        },
    },
    {
        _id: "6452a86e7895abcd12345684", // Random MongoDB ObjectId
        name: "Get Certificate",
        shortDescription: "Get your certification and show it off to the world!",
        description: "Congratulations! You have completed the course and are now ready to get your certification.",
        icon_name: "lesson-ready",
        top_icon: "/imgs/badge/quality-badge.png",
        state: "locked-highlight",
        type: "award",
        context: {
            user_id: 'abc',
            state: 'ready'
        },
    }
];
