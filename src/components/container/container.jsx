import React from "react"
import Link from "gatsby-link"
import { grids } from "purecss"

import styles from "./container.module.css"

export default ({ children }) => 
  <div className={`pure-g ${styles.container}`}>
    {children}
  </div>