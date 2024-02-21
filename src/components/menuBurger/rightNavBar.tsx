interface RightNavBarProps {
  isOpen: boolean;
}

function RightNavBar({ isOpen }: RightNavBarProps) {
  return (
    <div>
      <div className={`menuToggle ${isOpen ? "active" : ""}`}>
        <a href="#about">Présentation</a>
        <a href="#skills">Compétences</a>
        <a href="#project">Projets</a>
      </div>
    </div>
  );
}

export default RightNavBar;
