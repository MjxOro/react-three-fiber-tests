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
            <Link className='header__link' to='/'>Tornado Animation</Link>
        </header>

    )


}
export const Header2: React.FC = () => {
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
            <Link className='header__link' to='/spin'>Spin animation</Link>
        </header>

    )


}