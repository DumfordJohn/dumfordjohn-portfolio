import React from "react";

export default function Portfolio(){
    return (
        <main className="min-h-screen bg-white text-gray-800 p-6">
            <header className="text-center py-8">
                <h1 className="text-4xl font-bold">John Dumford</h1>
                <p className="text-lg text-gray-600">Full-Stack Developer</p>
            </header>

            <section className="max-w-4xl mx-auto space-y-10">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">About Me</h2>
                    <p>
                        I am a recent information technology graduate based in Fort Wayne, IN, with a strong focus on game development and a solid foundation in software development.  I enjoy building engaging, efficient applications-whether it's designing gameplay systems or developing full-stack web apps.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc list-inside">
                        <li>Java</li>
                        <li>C#</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>Unreal Engine 5</li>
                        <li>Unity</li>
                        <li>GitHub</li>
                        <li>DevOps</li>
                        <li>Agile Methodology</li>
                        <li>Windows OS</li>
                        <li>Spanish (Conversational)</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                    <ul className="space-y-4">
                        <li>
                            <strong>An Enlightening Journey</strong> - Led development of a role-playing game in Unreal Engine 5 to help children manage anxiety and trama.  Presented at the UC IT Expo 2025 and published in the university library.
                        </li>
                        <li>
                            <strong>QuestFinder</strong> - Co-developed a quest-based RPG in Unreal Engine 5 with CI/CD using DevOps.
                        </li>
                        <li>
                            <strong>Castle Catacombs</strong> - Team-developed a zombie shooter in Unity and published to GitHub.
                        </li>
                        <li>
                            <strong>Maze</strong> - Designed a maze game using JavaScript and CSS with a team of 3.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                    <ul className="space-y-4">
                        <li>
                            <strong>Application Development Intern</strong> - Great American Insurance Group (2022-2023)
                            <br />Transitioned backend to frontend systems using Sitefinity CMS. Optimized and modernized 20+ widgets on the corporate site.
                        </li>
                        <li>
                            <strong>Front Desk Assistant</strong> - UC Conference & Event Services (2022-Present)
                            <br />Provided, directions, coordinated events, and managed logistics for campus organizations.
                        </li>
                        <li>
                            <strong>Front Desk Attendant</strong> - UC Physics Department (2023-2025)
                            <br />Implemented a secure exam printing process, provided faculty lunch support, and delivered visitor assistance.
                        </li>
                        <li>
                            <strong>Personal Shopper</strong> - Walmart (2021-2022)
                            <br />Maintained high order fulfillment rates and ensured customer satisfaction.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Leadership & Honors</h2>
                    <ul className="space-y-4">
                        <li>
                            <strong>Captain - Rainbow Six: Siege Team</strong> - University of Cincinnati
                            <br />Coordinated team schedules and facilitated matches with other teams.
                        </li>
                        <li>
                            <strong>Queen City Clash Production Manager</strong> - University of Cincinnati
                            <br />Produced and managed the official LAN tournament for the university.
                        </li>
                        <li>
                            <strong>Dean's List</strong> - University of Cincinnati
                            <br />Spring 2023, Fall 2024, Spring 2025
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Contact</h2>
                    <p>Email: john@dumford.net</p>
                    <p>GitHub: <a className="text-blue-600 underline" href="https://github.com/dumfordjohn">@DumfordJohn</a></p>
                    <p>LinkedIn: <a className="text-blue-600 underline" href="https://www.linkedin.com/in/john-dumford-27a108201">John Dumford</a></p>
                </div>
            </section>
        </main>
    );
}