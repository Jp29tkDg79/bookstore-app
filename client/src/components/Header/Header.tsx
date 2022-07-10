import { useState, Fragment } from "react";

import { Link, useLocation } from "react-router-dom";
import { GiSecretBook } from "react-icons/gi";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

import SearchBar from "../UI/SearchBar/SearchBar";

import { HOME, LOGIN } from "../../constants/Routes";

import { useSelector } from "../../store";

import classes from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const location = useLocation();
  const isLogin = useSelector((state) => state.curUser.isLogin);
  const isHome = location.pathname === HOME;

  return (
    <Fragment>
      <div className={classes["header-1"]}>
        <Link to={HOME} className={classes.logo}>
          <GiSecretBook /> books
        </Link>

        {isHome && <SearchBar isOpen={isOpen} />}

        <div className={classes.icons}>
          {isHome && (
            <FaSearch
              className={classes["search-btn"]}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          {isLogin && (
            <Link to="#">
              <FaHeart />
            </Link>
          )}
          {isLogin && (
            <Link to="#">
              <FaShoppingCart />
            </Link>
          )}
          <Link to={LOGIN}>
            <FaUser className={classes["login-btn"]} />
          </Link>
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
