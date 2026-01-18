import "./Education.css";

export default function Education() {
    return (
        <section id="education" className="education">
            <h2 className="section_title">Education</h2>
            <div className="education__container">
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
                            <li>Data Structure Implementation and Analysis, Design and Analysis of Algorithms, Machine Learning and Data-Mining, Algorithms for Probabilistic and Deterministic Graphical Models, Artificial Intelligence in Biology and Medicine, Database Management, Principles of Operating Systems, Principles in System Design, Internet of Things (IoT) Software and Systems, Project in Computer Vision</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
