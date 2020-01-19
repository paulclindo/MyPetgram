import React from 'react'
import { Nav, Link } from './style'
import { IoIosHome, IoMdStar, IoIosPerson } from "react-icons/io"

export const Navbar = () => {
    const SIZE = '32px'
    return (
        <Nav>
            <Link to="/"><IoIosHome size={SIZE} /></Link>
            <Link to="/favs" ><IoMdStar size={SIZE} /></Link>
            <Link to="/user" ><IoIosPerson size={SIZE} /></Link>
        </Nav>
    )
}