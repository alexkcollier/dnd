import React from "react"
import Link from "gatsby-link"
import styles from "./nav.module.css"
import { grids } from "purecss"
// var grid = require("purecss/build/grids-responsive.css")

export default ({ children }) =>
  <div className={`pure-u-1-4 ${styles.nav}`}>
    <div className={`pure-u-1 ${styles.header}`}>
      <div className={`pure-u-1`}>
          <h1>
        <Link to={`/`}>
            {children}
        </Link>
          </h1>
        <Link className={styles.link} to={`/races/`}>Races</Link>
        <Link className={styles.link} to={`/classes/`}>Classes</Link>
        <Link className={styles.link} to={`/religion/`}>Religion</Link>
        <Link className={styles.link} to={`/time/`}>Time</Link>
        <Link className={styles.link} to={`/additional-rules/`}>Additional Rules</Link>
      </div>
    </div>
  </div>