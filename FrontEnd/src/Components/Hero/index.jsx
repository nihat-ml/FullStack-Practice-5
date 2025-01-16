import React from 'react'
import styles from "./style.module.css"
function Hero() {
  return (
    <>
      <div className={styles.hero}>
            <div className={styles.overHero}>
                <h1>Finding Your <br /> Perfect Shoes</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Phasellus at iaculis quam. Integer accumsan <br /> tincidunt fringilla.</p>
                <button>SHOP NOW</button>
            </div>
      </div>
    </>
  )
}

export default Hero
