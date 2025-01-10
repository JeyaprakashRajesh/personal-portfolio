import "./TriangleArray.css";

function TrianglePurple() {
  return <div className="triangle-array-purple-triangle"></div>;
}

function TriangleWhite() {
  return <div className="triangle-array-white-triangle"></div>;
}

export default function TriangleArray() {
  return (
    <div className="triangle-array-container">
      <div className="triangle-array-inner-container">
        <TrianglePurple />
        <TrianglePurple />
        <TrianglePurple />
        <TrianglePurple />
        <TriangleWhite className="triangle-array-animation-triangle-1" />
        <TriangleWhite className="triangle-array-animation-triangle-2" /> {/* This will be the last triangle */}
      </div>
    </div>
  );
}
