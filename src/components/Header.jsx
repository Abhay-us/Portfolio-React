import { NavLink } from 'react-router-dom'
import { FaBolt, FaBriefcase, FaFileAlt, FaHome, FaRegEnvelope } from 'react-icons/fa'

const Header = () => {
    return (
        <>
            <div className="py-5 nav-container">
                <nav className="p-3 d-flex gap-4 nav-block">
                    <NavLink className="text-white border-radius-div position-relative p-3" to="/">
                        <FaHome />
                        <span className="bg-primary p-2 fw-bold border-radius-div text-white">Home</span>
                    </NavLink>

                    <NavLink className="text-white border-radius-div position-relative p-3" to="/resume">
                        <FaFileAlt />
                        <span className="bg-primary p-2 fw-bold border-radius-div text-white">Resume</span>
                    </NavLink>

                    <NavLink className="text-white border-radius-div position-relative p-3" to="/projects">
                        <FaBriefcase />
                        <span className="bg-primary p-2 fw-bold border-radius-div text-white">Project</span>
                    </NavLink>

                    <NavLink className="text-white border-radius-div position-relative p-3" to="/feed">
                        <FaBolt />
                        <span className="bg-primary p-2 fw-bold border-radius-div text-white">Feed</span>
                    </NavLink>

                    <NavLink className="text-white border-radius-div position-relative p-3" to="/contact">
                        <FaRegEnvelope />
                        <span className="bg-primary p-2 fw-bold border-radius-div text-white">Contact</span>
                    </NavLink>
                </nav>
            </div>
        </>
    );
};

export default Header;
