import React from "react"
import Link from "gatsby-link"
import { grids } from "purecss"
// var grid = require("purecss/build/grids-responsive.css")

import styles from "./container.module.css"

export default ({ children }) => 
  <div className={`pure-g`}>
    {children}
  </div>