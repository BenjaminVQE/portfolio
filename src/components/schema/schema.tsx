import "./schema.css";

function Schema() {
  return (
    <div className="schemaBox">
      <div className="circle-dot posDot1"></div>
      <hr className="heightLine1 lineStyle" />
      <div className="square posSquare1"></div>
      <hr className="widhtLine lineStyle" />
      <p className="frontTitle">Front-End</p>
      <hr className="heightLineLeft lineStyle" />
      <p className="backTitle">Back-End</p>
      <hr className="heightLineRight lineStyle" />
      <div className="circle-dot posDot2"></div>
      <div className="circle-dot posDot3"></div>
    </div>
  );
}

export default Schema;
