import React from 'react'

const Home = ({user, onLogout}) => {
  return (
    <>
        <h1>Hiii, {user || "Guest"}</h1>
        <button onClick={onLogout} className="logout-btn">LogOut -_-</button>
    </>
  )
}

export default Home;