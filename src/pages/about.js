import React from "react"
import Header from "../components/header"
import Nav from "../components/nav"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <Nav/>
      <p>Such wow. Very React.</p>
    </div>
  )
}
