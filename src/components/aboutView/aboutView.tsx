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
        je suis actuellement en alternance en tant que 
        <strong>Concepteur Développeur d'Application</strong>. <br />
        Je suis passionné par le web, mon objectif est d'améliorer mes
        connaissances en la matière dans une perspective d'évolution constante.
      </div>
    </section>
  );
}

export default AboutView;
