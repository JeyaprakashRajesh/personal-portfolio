import "./ChangingShapes.css";

function One() {
  return <div className="changing-shapes-square-one"></div>;
}
function Two() {
  return <div className="changing-shapes-square-two"></div>;
}
function Three() {
  return <div className="changing-shapes-square-three"></div>;
}
function Four() {
  return <div className="changing-shapes-square-four"></div>;
}

export default function ChangingShapes() {
  return (
    <div className="changing-shapes-container">
      <div className="changing-shapes-inner-container">
        <One />
        <Two />
        <Three />
        <Four />
      </div>
    </div>
  );
}
    