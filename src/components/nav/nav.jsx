import React from "react"
import Link from "gatsby-link"
import styles from "./nav.module.css"
import { grids } from "purecss"
// var grid = require("purecss/build/grids-responsive.css")

export default ({ children }) =>
  <div className={`pure-u-1-4 ${styles.nav}`}>
    <div className={`pure-u-1 ${styles.header}`}>
      <div className={`pure-u-1`}>
          <Link to={`/`}>
        <h1>
              {children}
        </h1>
          </Link>
        <ul>
          <li>
            <Link className={`pure-button ${styles.link}`} to={`/races/`}>Races</Link>
          </li>
          <li>
            <Link className={`pure-button ${styles.link}`} to={`/classes/`}>Classes</Link>
          </li>
          <li>
            <Link className={`pure-button ${styles.link}`} to={`/religion/`}>Religion</Link>
          </li>
          <li>
            <Link className={`pure-button ${styles.link}`} to={`/time/`}>Time</Link>
          </li>
          <li>
            <Link className={`pure-button ${styles.link}`} to={`/additional-rules/`}>Additional Rules</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>