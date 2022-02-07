

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return <div><NavLink to='/'exact>Home</NavLink> <NavLink to='/contacts' exact>Contacts</NavLink></div>;
}

