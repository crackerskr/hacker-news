import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faCircleInfo, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <Link className='left' to='/'><FontAwesomeIcon icon={faNewspaper} /> HACKER NEWS</Link>

                {/* Menu dropdown */}
                {/* <div class="dropdown">
                    <button class="dropbtn"><a href="#category"> FILTER BY <i class="fa fa-caret-down"></i></a></button>
                    <div class="dropdown-content">
                        <a href="/news/date">DATE</a>
                        <a href="/news/author">AUTHOR</a>
                        <a href="/news/score">SCORE</a>
                    </div>
                </div> */}

                <a className='left' href="/newsdetailpage"><FontAwesomeIcon icon={faCircleInfo} /> NEWS DETAIL</a>
                <a className='right' href="/login"><FontAwesomeIcon icon={faRightToBracket} /> LOGIN<i class="fa fa-login"></i></a>
            </div>
            
        </>
    )
}
export default Navbar


// active button + script