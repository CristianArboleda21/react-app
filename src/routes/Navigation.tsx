import { BrowserRouter } from "react-router-dom"
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="Recat Logo" />

                    <ul>
                        <li>
                            <NavLink to='/home'>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>

                        <li>
                            <NavLink to='/users'>User</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={ <h1>About Page</h1> } />
                    <Route path="users" element={ <h1>Users Page</h1> } />
                    <Route path="home" element={ <h1>Home Page</h1> } />

                    <Route path="/*" element={ <Navigate to='/home' replace /> } />

                </Routes>
            </div>
        </BrowserRouter>
    </>
  )
}
