import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineFavorite } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import styles from "./style.module.css"


function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
            <div className={styles.logo}>
                <p>SHOPPERS</p>
            </div>
            <div className={styles.links}>
                <li><Link to={""}>Home</Link></li>
                <li><Link to={"/addpage"}>Add Products</Link></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">CataLogue</a></li>
            </div>
            <div className={styles.rightSide}>
                <a href=""><SlBasket /></a>
                <Link to={"/favorites"}><MdOutlineFavorite /></Link>
                <a href=""><CgProfile /></a>
            </div>
      </div>
    </>
  )
}

export default Navbar
