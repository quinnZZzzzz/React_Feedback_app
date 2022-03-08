import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIcon() {
  return (
    <div className="about-link">
      {/* internal link use Link instead of a */}
      {/* <Link
        to={{
          pathname: "./about",
          search: "?sort=name",
          hash: "#hello",
        }}
      > */}
      <Link to="./about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIcon;
