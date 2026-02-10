import useInView from "../hooks/useInView";
import "./Education.css";

export default function Education() {
    const [ref, inView] = useInView({ threshold: 0.1 });

    return (
        <section id="education" className="education">
            <h2 className="section_title">Education</h2>
            <div ref={ref} className={`education__container reveal reveal--left ${inView ? 'is-visible' : ''}`}>
                <div className="education__school">
                    University of California, Irvine

                    <div className="education__details">
                        Bachelor's of Science
                    </div>
                </div>

                <div className="education__divider" />

                <div className="education__details">
                    <div><strong>GPA:</strong> 3.9</div>
                    <div><strong>Major:</strong> Computer Science</div>
                    <div><strong>Honors:</strong> 7× Dean&apos;s Honor&apos;s List</div>

                    <div className="education__coursework">
                        <strong>Relevant Coursework:</strong>
                        <ul>
                            <li><u>Core CS:</u> Data Structure Implementation and Analysis, Design and Analysis of Algorithms, Principles of Operating Systems, Principles in System Design </li>
                            <li><u>Artificial Intelligence:</u> Introduction to Artificial Intelligence, Machine Learning and Data-Mining, Algorithms for Probabilistic and Deterministic Graphical Models, Artificial Intelligence in Biology and Medicine</li>
                            <li><u>Other:</u> Internet of Things (IoT) Software and Systems, Database Management, Project in Computer Vision</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
