import React from "react"
import Link from "gatsby-link"
import styles from "./nav.module.css"

export default ({ children }) =>
  <div className={styles.nav}>
    <Link to={`/`}>
      <h1>
        {children}
      </h1>
    </Link>
    <ul>
      <li>
        <Link to={`/races/`}>Races</Link>
      </li>
      <li>
        <Link to={`/classes/`}>Classes</Link>
      </li>
      <li>
        <Link to={`/religion/`}>Religion</Link>
      </li>
      <li>
        <Link to={`/time/`}>Time</Link>
      </li>
      <li>
        <Link to={`/additional-rules/`}>Additional Rules</Link>
      </li>
    </ul>
  </div>