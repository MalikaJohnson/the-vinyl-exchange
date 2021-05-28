import "./Nav.css"
import { NavLink } from "react-router-dom"

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-product">
      Add Record
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="sign-in">
      Sign In
    </NavLink>
  </>
)

const alwaysOptions = (
  <>
    <NavLink className="link" to="/products">
      Records
    </NavLink>
  </>
)

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          T.V.E.
        </NavLink>
        <div className="links">
          {user && <div className="link-welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}
export default Nav
