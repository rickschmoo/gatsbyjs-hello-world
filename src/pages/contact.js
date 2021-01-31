import React from "react"
import Nav from "../components/nav"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="Contact" />
      <Nav/>
      <p>Email us.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}

