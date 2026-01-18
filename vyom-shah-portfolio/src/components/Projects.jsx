import "./Projects.css";
import placeholderImg from "../assets/hero.png";

import Cam from "../assets/projects/cam.png";
import TEP from "../assets/projects/tep.png";
import Measily from "../assets/projects/measily.png";
import Vroom from "../assets/projects/vroom.jpg";
import Lingo from "../assets/projects/lingo.jpg";
import Zot from "../assets/projects/zot.jpg";
import Gyro from "../assets/projects/gyro.png";

const projects = [
    {
        name: "Measily",
        blurb: "An interactive medical diagnostic platform",
        image: Measily,
        tech: "HTML, CSS, JavaScript, Three.js, Python, Flask, Groq, Google Gemini API, Local JSON storage",
        links: {
            github: "https://github.com/vyomshah05/MEasily",
            demo: "https://www.linkedin.com/feed/update/urn:li:activity:7322774971959623680/",
            devpost: "https://devpost.com/software/measily"
        },
    },
    {
        name: "VroomMates",
        blurb: "Carpool route planning webapp",
        image: Vroom,
        tech: "React, JavaScript, Google Maps API, Python, Flask, Google Datastore",
        links: {
            github: "https://github.com/jonnypan2325/VroomMates",
            devpost: "https://devpost.com/software/vroommates"
        },
    },
    {
        name: "Lingo Live",
        blurb: "An interactive Real-time translation tool",
        image: Lingo,
        tech: "AWS, firebase, google-web-speech-api, google.generativeai, React, json, python",
        links: {
            github: "https://github.com/jonnypan2325/LingoLive",
            devpost: "https://devpost.com/software/lingolive",
            demo: "https://www.youtube.com/watch?v=VgcqeA-1SGo"
        },
    },
    {
        name: "ZotNotes",
        blurb: "A comprehensive learning experience platform",
        image: Zot,
        tech: "LangChain, Firebase, HTML, JavaScript, CSS, Python, React, Zilliz",
        links: {
            github: "https://github.com/vicksey/ZotNotes",
            devpost: "https://devpost.com/software/zotnotes"
        },
    },
    {
        name: "Gyro Maze",
        blurb: "A handheld motion-controlled maze game",
        image: Gyro,
        tech: "ESP32 (TTGO), IMU sensors, IoT devices, embedded C++, Wi-Fi, Microsoft Azure",
        links: {
            github: "https://github.com/vyomshah05/Gyro_Maze",
            demo: "https://drive.google.com/file/d/1uQYdaZd8vMwwliB8UuHKXI5Kv4btVXlp/view"
        },
    },
    {
        name: "Camera Geolocation",
        blurb: "Multi-camera triangulation pipeline",
        image: Cam,
        tech: "Python, NumPy, OpenCV, SciPy, MatPlotLib",
        links: {
            github: "https://github.com/vyomshah05/Camera_Geolocation"
        },
    },
    {
        name: "ML-based Cancer Classifier",
        blurb: "Cancer Classification From Tumor Platelet RNA",
        image: TEP,
        tech: "Python, scikit-learn, Pandas",
        links: {
            github: "https://github.com/vyomshah05/184_final_project",
            // devpost omitted
            // demo omitted
        },
    },
];

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projects__container">
                <h2 className="projects__title">Projects</h2>

                <div className="projects__grid">
                    {projects.map((p) => (
                        <article key={p.name} className="projectCard">
                            {/* FRONT */}
                            <div
                                className="projectCard__front"
                                style={{ backgroundImage: `url(${p.image || placeholderImg})` }}
                            >
                                <div className="projectCard__fade" />
                                <div className="projectCard__frontContent">
                                    <div className="projectCard__name">{p.name}</div>
                                    <div className="projectCard__blurb">{p.blurb}</div>
                                </div>
                            </div>

                            {/* BACK */}
                            <div className="projectCard__back">
                                <div className="projectCard__backTitle">Tech Stack</div>
                                <div className="projectCard__tech">{p.tech}</div>

                                <div className="projectCard__links">
                                    {p.links?.github && (
                                        <a href={p.links.github} target="_blank" rel="noreferrer">
                                            GitHub
                                        </a>
                                    )}
                                    {p.links?.devpost && (
                                        <a href={p.links.devpost} target="_blank" rel="noreferrer">
                                            Devpost
                                        </a>
                                    )}
                                    {p.links?.demo && (
                                        <a href={p.links.demo} target="_blank" rel="noreferrer">
                                            Demo Video
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
