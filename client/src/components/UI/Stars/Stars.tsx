import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import classes from "./Stars.module.css";

type StarsProps = {
  stars: number;
};

const MAX_STARS = 5;

const Stars = ({ stars }: StarsProps) => {
  return (
    <div className={classes.Stars}>
      {[...Array(Math.floor(stars))].map((_, i) => (
        <FaStar key={i} />
      ))}
      {Math.floor(stars) !== stars && <FaStarHalfAlt />}
      {[...Array(MAX_STARS - Math.round(stars))].map((_, i) => (
        <FaRegStar key={i} />
      ))}
    </div>
  );
};

export default Stars;
