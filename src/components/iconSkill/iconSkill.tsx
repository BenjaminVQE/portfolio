import "./iconSkill.css";

interface IconProps {
  img: string;
  name: string;
}

function IconSkill({ img, name }: IconProps) {
  return (
    <div className="iconSkill">
      <img src={img} alt={`Icon ${name}`} title={name} />
    </div>
  );
}

export default IconSkill;
