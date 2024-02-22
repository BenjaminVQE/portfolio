import "./buttonDownload.css";
import { FaEye } from "react-icons/fa";
import cvPdf from "../../pdf/CVBenjaminVaique.pdf";

function ButtonDownload() {
  return (
    <a href={cvPdf} target="_blank" className="buttonCV" rel="noreferrer">
      Visualiser mon CV <FaEye size={30} className="iconDL" />
    </a>
  );
}

export default ButtonDownload;
