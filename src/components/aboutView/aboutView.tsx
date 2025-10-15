import "./aboutView.css";

function AboutView() {
  const birth = new Date("1999-03-15");

  const date = new Date();

  const differenceMs: number = date.getTime() - birth.getTime();

  const differenceYears = differenceMs / (365.25 * 24 * 60 * 60 * 1000);

  const resultBirth = Math.floor(differenceYears);
  return (
    <section className="aboutView" id="about">
      <h2>&lt; Présentation &gt;</h2>
      <div className="aboutMe">
        Salut ! Je m'appelle <strong>Benjamin</strong>, j'ai {resultBirth} ans,
        J'ai récemment obtenu mon diplôme de <strong>Concepteur Développeur d'Applications</strong>. <br />
        et je poursuis actuellement mon parcours en alternance dans le cadre d’une formation <strong>Bac +5</strong> en développement informatique. <br />
        Passionné par le web et les nouvelles technologies, je suis constamment en quête de nouvelles compétences pour perfectionner mes connaissances techniques et m'adapter aux évolutions rapides du secteur. <br />
        Mon objectif est clair : évoluer en continu, relever de nouveaux défis et devenir un expert dans le domaine du développement web et logiciel.
      </div>
    </section>
  );
}

export default AboutView;
