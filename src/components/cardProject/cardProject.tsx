import { FaGithub } from "react-icons/fa";
import "./cardProject.css";

interface IconProps {
  link: string;
  name: string;
  github: string;
  lang: Array<string>;
  desc: string;
  logo: string;
}

function CardProject({ link, name, github, lang, desc, logo }: IconProps) {
  return (
    <div className="parent">
      <a href={link}>
        <div className="cardProject card">
          <div className="backCard">
            <span>{name}</span>
          </div>
          <div className="containerCard">
            <div className="containerImgProject">
              <img
                src={process.env.PUBLIC_URL + logo}
                alt={`Logo ${name}`}
                className="cardImgProject"
              />
            </div>

            <div className="cardBodyProject content-box">
              <div className="card-title">
                <h3>{name}</h3>
              </div>
              <p className="card-content">
                <span className="desc ">Descriptif :</span> <br /> {desc}
              </p>
              <div className="langContainer langCard">
                {lang.map((i: any, index: number) => (
                  <span key={index} className="langCard">
                    {i}{" "}
                  </span>
                ))}
              </div>
              <div className="githubLinkCard">
                <a href={github}>
                  <div>
                    <FaGithub size={40} className="logoGitHub" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CardProject;
