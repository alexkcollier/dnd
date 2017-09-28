import React from "react"
import Link from "gatsby-link"

import styles from "./nav.module.css"

export default ({ children }) =>
  <div className={`pure-u-1-4 ${styles.nav}`}>
    <div className={`pure-u-1 ${styles.header}`}>
      <Link to={`/`}>
        <h1>
            {children}
        </h1>
      </Link>
      <Link className={`${styles.link}`} to={`/races/`}>Races</Link>
      <Link className={`${styles.link}`} to={`/classes/`}>Classes</Link>
      <Link className={`${styles.link}`} to={`/religion/`}>Religion</Link>
      <Link className={`${styles.link}`} to={`/time/`}>Time</Link>
      <Link className={`${styles.link}`} to={`/additional-rules/`}>Additional Rules</Link>
    </div>
  </div>