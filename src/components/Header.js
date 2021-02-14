import { NavLink } from 'react-router-dom'
import React from 'react'

const Header = () => (
  <>
    <h1>Ben's Hacker News</h1>
    <div className="nav-link">
      <NavLink to="/top" activeClassName="active">
        Top Stories
      </NavLink>
      <NavLink to="/new" activeClassName="active">
        Latest Stories
      </NavLink>
      <NavLink to="/best" activeClassName="active">
        Best Stories
      </NavLink>
    </div>
  </>
)

export default Header
