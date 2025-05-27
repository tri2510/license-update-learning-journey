import {LESSONS as TEST_A } from "./test_a"

export const COURSES = [
    // {
    //     _id: "6452a86e7895abcd12345661", // Random MongoDB ObjectId
    //     name: "Overview",
    //     shortDescription: "Overview",
    //     description: "Overview",
    //     icon_name: "lesson-ready",
    //     state: "locked",
    //     type: "lesson",
    //     context: {
    //         user_id: 'abc',
    //         state: 'finished'
    //     },
    //     extends: {
    //         // external_link: "https://www.sdv.guide/sdv101",
    //     },
    // },
    {
        _id: "6452a86e7895abcd12345662", // Random MongoDB ObjectId
        name: "Video lessons: Cousera",
        shortDescription: "[External Material] View lessons on Coursera.",
        description: "[External Material] View lessons on Coursera.",
        icon_name: "lesson-ready",
        state: "locked",
        type: "lesson",
        context: {
            user_id: 'abc',
            state: 'finished'
        },
        extends: {
            external_link: "https://www.coursera.org/learn/sdv101",
        },
    },
    {
        _id: "6452a86e7895abcd12345669", // Random MongoDB ObjectId
        name: "Verify your knowledge",
        shortDescription: "Prepare to showcase your acquired knowledge and skills in this concluding test session",
        description: "Prepare to showcase your acquired knowledge and skills in this concluding test session",
        icon_name: "lesson-ready",
        image: "/imgs/final-test.jpg",
        top_icon: "/imgs/badge/practice.png",
        state: "released",
        type: "final-test",
        context: {
            user_id: 'abc',
            state: 'finished'
        },
        lessons: TEST_A,
        extends: {
            // external_link: "https://www.sdv.guide/sdv101/part-a-essentials",
        },
    },
    {
        _id: "6452a86e7895abcd12345663", // Random MongoDB ObjectId
        name: "Career Certificate",
        shortDescription: "Get your certification and show it off to the world!",
        description: "Congratulations! You have completed the course and are now ready to get your certification.",
        icon_name: "lesson-ready",
        image: "/imgs/cert/cert_101_introduction.png",
        top_icon: "/imgs/badge/quality-badge.png",
        state: "locked-highlight",
        type: "award",
        context: {
            user_id: 'abc',
            state: 'finished'
        },
    }
];
