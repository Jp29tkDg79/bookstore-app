import { Link } from "react-router-dom";

import { HOME } from "../constants/Routes";

import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={classes.NotFoundContainer}>
      <div className={classes.NotFoundBox}>
        <h2>404</h2>
        <p>Sorry, the page you're looking con not found.</p>
        <Link to={HOME}>メイン画面</Link>
      </div>
    </section>
  );
};

export default NotFound;
