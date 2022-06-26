import { Link } from "react-router-dom"
import {FaHome, FaList, FaTags, FaBlog, FaComments} from "react-icons/fa"

import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <nav className={classes.Footer}>
      <Link to="#"><FaHome /></Link>
      <Link to="#"><FaList /></Link>
      <Link to="#"><FaTags /></Link>
      <Link to="#"><FaComments /></Link>
      <Link to="#"><FaBlog /></Link>
    </nav>
  )
}

export default Footer