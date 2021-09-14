import React, { useEffect, useState } from "react";
import "./Header.scss"
import { Link } from "react-router-dom"

interface HeaderProps {
    handleOpen: () => void
    open: boolean

}


export const Header: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
        if (!open) {
            setOpen(true)
        }
        else {
            setOpen(false)
        }
        console.log(open)

    }

    return (
        <header className='header'>
            <h1 className='header__h1'>Matthew Oro</h1>
            <nav className="header__nav">
                <Link className='header__link' to='/'>Tornado Animation</Link>
                <Link className='header__link' to='/spin'>Spin Animation</Link>
                <Link className='header__link' to='/scroll'>Scroll Animation</Link>
            </nav>
        </header>

    )


}