import React from "react"
import Link from "gatsby-link"

import { grids } from "purecss"
import styles from "./content.module.css"

export default ({ children, data }) =>
  <div className={`${styles.content} pure-u-3-4`}>
    {children}
  </div>