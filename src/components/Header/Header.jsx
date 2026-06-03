import './header.css'
import { Link } from 'react-router-dom'
import { FaBolt, FaBriefcase, FaFileAlt, FaHome, FaRegEnvelope } from 'react-icons/fa'

const Header = () => {
    return (
        <>
            <div className="py-5 nav-container">
                <nav className="p-3 d-flex gap-2 nav-block">
                    <Link className="text-white position-relative p-3 nav-icon-div" to="/">
                        <FaHome className='nav-icons' />
                        <span className="bg-primary p-2 fw-bold border-radius-div text-white">Home</span>
                    </Link>

                    <Link className="text-white position-relative p-3 nav-icon-div" to="/resume">
                        <FaFileAlt className='nav-icons' />
                        <span className="bg-primary p-2 fw-bold border-radius-div text-white">Resume</span>
                    </Link>

                    <Link className="text-white  position-relative p-3 nav-icon-div" to="/projects">
                        <FaBriefcase className='nav-icons' />
                        <span className="bg-primary p-2 fw-bold border-radius-div text-white">Project</span>
                    </Link>

                    <Link className="text-white  position-relative p-3 nav-icon-div" to="/feed">
                        <FaBolt className='nav-icons' />
                        <span className="bg-primary p-2 fw-bold border-radius-div text-white">Feed</span>
                    </Link>

                    <Link className="text-white position-relative p-3 nav-icon-div" to="/contact">
                        <FaRegEnvelope className='nav-icons' />
                        <span className="bg-primary p-2 fw-bold border-radius-div text-white">Contact</span>
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Header;
