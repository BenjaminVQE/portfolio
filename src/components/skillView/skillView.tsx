import IconSkill from "../iconSkill/iconSkill";
import Schema from "../schema/schema";
import "./skillView.css";
import Icon from "../iconSkill/iconSkill.json";

function SkillView() {
  const icon: any = Icon;
  return (
    <section className="skillView" id="skills">
      <h2>&lt; Compétences &gt;</h2>
      <Schema />
      <div className="iconContainer">
        <div className="front">
          {icon
            .filter((i: any) => i.lang === "front")
            .map((i: any, index: number) => (
              <IconSkill img={i.src} name={i.name} key={index} />
            ))}
        </div>
        <div className="back">
          {icon
            .filter((i: any) => i.lang === "back")
            .map((i: any, index: number) => (
              <IconSkill img={i.src} name={i.name} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default SkillView;
