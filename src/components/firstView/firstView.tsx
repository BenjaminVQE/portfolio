import ButtonDownload from "../buttonDownload/buttonDownload";
import TypingText from "../typingText/typingText";
import "./firstView.css";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";

function FirstView() {
  return (
    <section className="firstView">
      <div className="nameDesc">
        <h1>Benjamin Vaique</h1>
        <TypingText />
      </div>
      <div className="socialNetwork">
        <div className="buttonSN">
          <a href="https://github.com/BVCoca" target="_blank" rel="noreferrer">
            <FaGithub size={50} className="iconSN" />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-vaique/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={50} className="iconSN" />
          </a>
        </div>
        <div className="cvContainer">
          <ButtonDownload />
        </div>
      </div>
      <div className="buttonsFirstView">
        <a href="#about" className="arrowScrollDown">
          <FaArrowDown size={40} className="iconArrowDown" />
        </a>
      </div>
    </section>
  );
}

export default FirstView;
