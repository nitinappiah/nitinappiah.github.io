import { useEffect, useState } from "react";
import "../assets/type_out_style.css";
import "../assets/font.css";
import resume from '../assets/Resume - Oct 9 2024.pdf'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { FaGoogleScholar } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

interface typewriter {
  textArray: string[];
  period: number;
}
const Typewriter = ({ textArray, period }: typewriter) => {
  const [text, setText] = useState("");
  // const [displayText, setDisplayText] = useState(" ".repeat(50));
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);
  // const elementRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[loopNum % textArray.length];
      const isFullText = text === currentText;
      const isEmptyText = text === "";

      if (isDeleting) {
        setText((prev) => currentText.substring(0, prev.length - 1));
        setTypingSpeed(100); // Deleting speed
      } else {
        setText((prev) => currentText.substring(0, prev.length + 1));
        setTypingSpeed(100); // Typing speed
      }

      if (!isDeleting && isFullText) {
        setTimeout(() => setIsDeleting(true), period); // Pause before deleting
      } else if (isDeleting && isEmptyText) {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setTypingSpeed(500); // Pause before next word
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer); // Cleanup timer
  }, [text, isDeleting, loopNum, typingSpeed, textArray, period]);

  return (
    <div className="title-div source-code-pro-font">
      <a className="icon-pad" href="https://www.linkedin.com/in/nitin-appiah/">
        <FaLinkedin size={40}/>
      </a>
      <a className="icon-pad" href="https://scholar.google.com/citations?user=2AeT0hUAAAAJ&hl=en&authuser=2">
        <FaGoogleScholar size={35}/>
      </a>
      <a className="icon-pad" href="https://github.com/nitinappiah">
        <FaGithub size={38}/>
      </a>
      <a className="icon-pad" href="https://www.instagram.com/nitin.appiah/">
        <FaInstagram size={40}/>
      </a>
      <a className="icon-pad" href="mailto:nitinappiah@gmail.com">
        <IoIosMail size={50}/>
      </a>
      <a className="icon-pad" href = {resume} target = "_blank">
        <GrDocumentDownload size={35}/>
      </a>
      <br></br>
      <h1 className="inline">Nitin Appiah</h1>
      <h3 className="inline dull-text">&nbsp;[நிதின் அப்யா]</h3>
      <br></br>
      <h1 className="inline">I'm an experienced&nbsp;</h1>
      <h1 className="typewrite inline">
        <div className="wrap">{text}</div>
      </h1>
    </div>
  );
};

export default Typewriter;
