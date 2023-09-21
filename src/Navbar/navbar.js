import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <Link className='left' to='/'>HACKER NEWS</Link>

                {/* Menu dropdown */}
                <div class="dropdown">
                    <button class="dropbtn"><a href="#category"> FILTER BY <i class="fa fa-caret-down"></i></a></button>
                    <div class="dropdown-content">
                        <a href="/menu/buffetmenu">DATE</a>
                        <a href="/menu/thechefmenu">AUTHOR</a>
                        <a href="/menu/westernmenu">SCORE</a>
                    </div>
                </div>

                <a className='left' href="/newsdetailpage">NEWS DETAIL</a>
                <a className='right' href="/login">LOGIN<i class="fa fa-login"></i></a>
            </div>
            
        </>
    )
}
export default Navbar


// active button + script