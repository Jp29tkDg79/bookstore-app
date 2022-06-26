import { useState, Fragment } from "react";

import { Link } from "react-router-dom";
import { GiSecretBook } from "react-icons/gi";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

import SearchBar from "../UI/SearchBar/SearchBar";

import { HOME } from "../../constants/Routes";

import classes from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <div className={classes["header-1"]}>
        <Link to={HOME} className={classes.logo}>
          <GiSecretBook /> books
        </Link>

        <SearchBar isOpen={isOpen} />

        <div className={classes.icons}>
          <FaSearch
            className={classes["search-btn"]}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Link to="#">
            <FaHeart />
          </Link>
          <Link to="#">
            <FaShoppingCart />
          </Link>
          <FaUser className={classes["login-btn"]} />
        </div>
      </div>
      <div className={classes["header-2"]}>
        <nav className={classes.navbar}>
          <Link to={HOME}>ホーム</Link>
          <Link to="#">特集</Link>
          <Link to="#">新刊</Link>
          <Link to="#">レビュー</Link>
          <Link to="#">ブログ</Link>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
