import React from "react"
import Link from "gatsby-link"
import styles from "./nav.module.css"
// import { grids } from "purecss"
var grid = require("purecss/build/grids-responsive.css")

export default ({ children }) =>
  <div className= {`pure-u-lg-1-4 pure-u-1 ${styles.nav}`}>
    <div className={styles.header}>
      <div>
        <Link to={`/`}>
          <h1>
            {children}
          </h1>
        </Link>
        <Link to={`/races/`}>Races</Link>
        <Link to={`/classes/`}>Classes</Link>
        <Link to={`/religion/`}>Religion</Link>
        <Link to={`/time/`}>Time</Link>
        <Link to={`/additional-rules/`}>Additional Rules</Link>
      </div>
    </div>
  </div>