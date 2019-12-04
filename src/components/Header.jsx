import React from 'react'

const Header = () => {
  return (
    <header>
      <section className="logoSect">
        <h1 className="logoText">Curt's</h1>
        <h1 className="logoText">Weather</h1>
        <h1 className="logoText">Station</h1>
      </section>
      <section className="inputSect">
        <button className="searchBtn">Search</button>
        <input
          type="text"
          placeholder="Show the weather in...city or zip"
          className="locationInput"
        />
      </section>
    </header>
  )
}

export default Header
