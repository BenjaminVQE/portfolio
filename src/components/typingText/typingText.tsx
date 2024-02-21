import { TypeAnimation } from "react-type-animation";

function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Développeur web Full stack",
        2000,
        "Etudiant",
        1000,
        "Recherche une alternance",
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{
        textAlign: "center",
        color: "#F0ECE5",
        fontFamily: "'Roboto', sans-serif",
      }}
      repeat={Infinity}
    />
  );
}

export default TypingText;
