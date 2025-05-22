export const LESSONS = [
    {
        slug: 'quiz_a',
        name: "Quiz Part A",
        description: "This question set evaluates understanding of Software-Defined Vehicles (SDVs) from provided documents. It covers SDV characteristics, development challenges, and safety standards like ASILs.",
        type: "quiz",
        questions: [
            {
                "question": "According to the \"Smart Phone? No: Habitat on Wheels!\" document, what is a key similarity between modern vehicles and smartphones?",
                "answers": [
                    {
                        "label": "They are purely mechanical machines."
                    },
                    {
                        "label": "They primarily use physical buttons for interfaces."
                    },
                    {
                        "label": "They feature touchscreen-centric interfaces and receive over-the-air updates.",
                        "is_correct": true
                    },
                    {
                        "label": "They are judged primarily by horsepower."
                    }
                ]
            },
            {
                "question": "From the customer's perspective, what is a characteristic of a Software-Defined Vehicle (SDV)?",
                "answers": [
                    {
                        "label": "Hardware and software are tightly coupled."
                    },
                    {
                        "label": "It is primarily car-centric."
                    },
                    {
                        "label": "It is connected, personalized, and ever-expanding through updates.",
                        "is_correct": true
                    },
                    {
                        "label": "It focuses on long-term planning and stability."
                    }
                ]
            },
            {
                "question": "What does the term \"functional safety\" mean in automotive software development, according to the \"Challenges: What sets automotive software development apart?\" document?",
                "answers": [
                    {
                        "label": "The absence of unreasonable risk caused by hazards from malfunctioning electric or electronic systems.",
                        "is_correct": true
                    },
                    {
                        "label": "The ability to provide frequent updates and experimental features."
                    },
                    {
                        "label": "The focus on marketing new features to customers."
                    },
                    {
                        "label": "The process of decoupling hardware and software."
                    }
                ]
            },
            {
                "question": "The ISO 26262 standard defines ASILs (Automotive Safety Integrity Levels). Which ASIL level represents the highest safety requirement?",
                "answers": [
                    {
                        "label": "ASIL A"
                    },
                    {
                        "label": "ASIL B"
                    },
                    {
                        "label": "ASIL C"
                    },
                    {
                        "label": "ASIL D",
                        "is_correct": true
                    }
                ]
            },
            {
                "question": "According to the \"MHP: Expert Opinion\" document, what is the core principle of Software-Defined Vehicles (SDVs)?",
                "answers": [
                    {
                        "label": "Shifting from software-defined to hardware-embedded software."
                    },
                    {
                        "label": "Fully decoupling software from hardware, creating an abstraction layer for control and management.",
                        "is_correct": true
                    },
                    {
                        "label": "Relying solely on a distributed architecture with many ECUs."
                    },
                    {
                        "label": "Prioritizing physical attributes over digital performance."
                    }
                ]
            },
            {
                "question": "In the context of SDV E/E-Architecture, what is the modern design aiming to consolidate compute power into?",
                "answers": [
                    {
                        "label": "Only distributed architectures."
                    },
                    {
                        "label": "Zonal or centralized architectures.",
                        "is_correct": true
                    },
                    {
                        "label": "More than 150 ECUs spread across various vehicle zones."
                    },
                    {
                        "label": "Fragmented supplier landscapes."
                    }
                ]
            },
            {
                "question": "Which of the following is considered an ASIL (Automotive Safety Integrity Level) function in the AD/ADAS domain, according to the \"SDV Domains and Two-Speed Delivery\" document?",
                "answers": [
                    {
                        "label": "Camera Display Systems (blind spot monitoring without intervention)."
                    },
                    {
                        "label": "Basic Parking Assist (alerts without intervention)."
                    },
                    {
                        "label": "Lane Keeping Assist.",
                        "is_correct": true
                    },
                    {
                        "label": "Traffic Sign Recognition (display only)."
                    }
                ]
            },
            {
                "question": "In the Motion domain, which of the following is an ASIL function?",
                "answers": [
                    {
                        "label": "Powertrain modes (Eco, Sport)."
                    },
                    {
                        "label": "Suspension settings for comfort."
                    },
                    {
                        "label": "Anti-Lock Braking Systems (ABS).",
                        "is_correct": true
                    },
                    {
                        "label": "Non-critical drivetrain adjustments."
                    }
                ]
            },
            {
                "question": "From the Energy domain, which is classified as an ASIL function?",
                "answers": [
                    {
                        "label": "Battery Charge Level Display."
                    },
                    {
                        "label": "Auxiliary Power Management (infotainment, cabin lighting)."
                    },
                    {
                        "label": "Battery Management Systems (BMS).",
                        "is_correct": true
                    },
                    {
                        "label": "Solar Panel Integration (non-safety systems)."
                    }
                ]
            },
            {
                "question": "In the context of a two-speed delivery model for SDVs, how are QM (Quality Management) systems typically handled?",
                "answers": [
                    {
                        "label": "They require rigorous, slower validation processes."
                    },
                    {
                        "label": "They enable faster iterations and agile development for non-critical features.",
                        "is_correct": true
                    },
                    {
                        "label": "They prioritize long-term planning and hardened environments."
                    },
                    {
                        "label": "They are always combined with ASIL-rated systems without differentiation."
                    }
                ]
            }
        ]
    },
    {
        slug: 'quiz_b',
        name: "Quiz Part B",
        description: "This question set evaluates understanding of Software-Defined Vehicles (SDVs) from provided documents. It covers SDV characteristics, development challenges, and safety standards like ASILs.",
        type: "quiz",
        questions: [
            {
                "question": "According to the \"Learnings from the Smart Phone Folks\" document, what event marked the beginning of the true smartphone revolution?",
                "answers": [
                    {
                        "label": "The release of the Apple Newton."
                    },
                    {
                        "label": "The announcement of the iPhone in January 2007.",
                        "is_correct": true
                    },
                    {
                        "label": "The introduction of the Palm Treo."
                    },
                    {
                        "label": "The widespread adoption of BlackBerry devices."
                    }
                ]
            },
            {
                "question": "In the context of APIs and Developer Ecosystems as discussed in \"Learnings from the Smart Phone Folks\", what is the benefit for an app developer creating a feature like a whip sound?",
                "answers": [
                    {
                        "label": "They need to understand the physics behind measuring acceleration."
                    },
                    {
                        "label": "They must have direct access to the phone's internal hardware components."
                    },
                    {
                        "label": "They only need access to an API that provides acceleration data.",
                        "is_correct": true
                    },
                    {
                        "label": "They need to program every low-level sensor interaction themselves."
                    }
                ]
            },
            {
                "question": "What analogy is used in the \"Loose Coupling\" document to describe the challenges of scaling and maintaining complex software systems due to lack of shared language and coordination?",
                "answers": [
                    {
                        "label": "The Bento Box Analogy."
                    },
                    {
                        "label": "The Gordian Knot.",
                        "is_correct": true
                    },
                    {
                        "label": "The Tower of Babel.",
                        "is_correct": true
                    },
                    {
                        "label": "The Amazon Mandate."
                    }
                ]
            },
            {
                "question": "According to the \"Microservices & APIs\" document, what was a key mandate reportedly given by Jeff Bezos to all Amazon teams regarding data and functionality?",
                "answers": [
                    {
                        "label": "All teams must use the same technology for communication."
                    },
                    {
                        "label": "Teams should communicate via direct linking to data stores."
                    },
                    {
                        "label": "All teams must expose their data and functionality through service interfaces.",
                        "is_correct": true
                    },
                    {
                        "label": "Service interfaces are only for internal use and should not be externalized."
                    }
                ]
            },
            {
                "question": "What is the primary function of containers in cloud computing, as described in the \"Containerization\" document?",
                "answers": [
                    {
                        "label": "To run only monolithic applications."
                    },
                    {
                        "label": "To create heavy, interdependent environments."
                    },
                    {
                        "label": "To function as lightweight, isolated environments that package software and its dependencies.",
                        "is_correct": true
                    },
                    {
                        "label": "To manage hardware resources directly without abstraction."
                    }
                ]
            },
            {
                "question": "In the context of \"Building Robust and Resilient Systems\", what tool did Netflix develop to randomly disrupt services in their production environment to ensure reliability?",
                "answers": [
                    {
                        "label": "Chaos Builder."
                    },
                    {
                        "label": "Resilience Tester."
                    },
                    {
                        "label": "Chaos Monkey.",
                        "is_correct": true
                    },
                    {
                        "label": "Service Disruptor."
                    }
                ]
            },
            {
                "question": "Which of the following is NOT a simulated failure introduced by Netflix's proactive approach, as mentioned in \"Building Robust and Resilient Systems\"?",
                "answers": [
                    {
                        "label": "Server failure."
                    },
                    {
                        "label": "Service degradation."
                    },
                    {
                        "label": "Planned system downtime for maintenance.",
                        "is_correct": true
                    },
                    {
                        "label": "Security vulnerabilities."
                    }
                ]
            },
            {
                "question": "According to the \"Cloud Native Principles\" document, what does loose coupling enable?",
                "answers": [
                    {
                        "label": "Tightly integrated systems."
                    },
                    {
                        "label": "Difficult deployment and testing."
                    },
                    {
                        "label": "Rapid deployment, testing, and iteration without disrupting production systems.",
                        "is_correct": true
                    },
                    {
                        "label": "Centralized and inflexible development processes."
                    }
                ]
            },
            {
                "question": "What are the three methodologies that form a powerful toolbox behind the success of modern Internet companies, as mentioned in the \"Innovation Management\" document?",
                "answers": [
                    {
                        "label": "Waterfall, Scrum, and Kanban."
                    },
                    {
                        "label": "Design thinking, lean startup, and agile development.",
                        "is_correct": true
                    },
                    {
                        "label": "Traditional, linear, and iterative approaches."
                    },
                    {
                        "label": "Big Bang, phased, and rapid prototyping."
                    }
                ]
            },
            {
                "question": "The \"Digital-First Paradigm\" introduces two key elements: Shift North and Shift Left. What does \"Shift North\" involve?",
                "answers": [
                    {
                        "label": "Emphasizing early-stage prototyping and simulation."
                    },
                    {
                        "label": "Moving functionality into deeply embedded hardware areas."
                    },
                    {
                        "label": "Moving functionality out of deeply embedded areas and above the hardware abstraction layer.",
                        "is_correct": true
                    },
                    {
                        "label": "Focusing on long-term planning and hardened environments."
                    }
                ]
            }
        ]
    }
]