import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer
      isOpen={isOpen}
      onClick={toggle}
    >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Desserts</SidebarLink>
        <SidebarLink to='/'>American Pancakes</SidebarLink>
        <SidebarLink to='/'>Shakes</SidebarLink>
        <SidebarLink to='/'>Hot Drinks</SidebarLink>
        <SidebarLink to='/'>Mocktails</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>

    </SidebarContainer>
  )
}

export default Sidebar
