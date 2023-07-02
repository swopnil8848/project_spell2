import React from "react"
import Navbar from "./components/Navbar"
import Home from "./Home/Home"
import Home1 from "./Home/Home1"


export default function App() {
  return (
    <h1 className="">
      <div className="sticky top-0 bg-white z-50"><Navbar/></div>
      <Home/>
    </h1>
  )
}