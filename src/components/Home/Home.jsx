import './home.css'

import {
    FaAngleRight,
    FaBasketballBall,
    FaChessKnight,
    FaCircle,
    FaGem,
    FaGithub,
    FaMoon,
    FaShieldAlt,
    FaVial,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import profilePicture from '../../assets/First-page/profile-picture.jpg'
import logoIpsum from '../../assets/First-page/logo-ipsum-1.png'

function Home() {
    return (
        <>
            <div className="container-main mb-5 pt-5">
                <div className="mb-3">
                    <div className="d-flex b justify-content-between align-items-center">
                        <h4 className="name-tag">Abhay Chaudhary</h4>
                        <a className="btn border border-radius-div py-3 px-4 hover-btn" href="">
                            <FaMoon />
                        </a>
                    </div>
                </div>
                <div>
                    <div className="row ">
                        <div className="col-8 ">
                            <div className="card h-100 border-radius-div section-1 hover-effect bg-lightBlue">
                                <div className="card-header  border-bottom-0 text-end pe-4 border-radius-div  bg-transparent">
                                    <span class="card-number ">01 / CONCEPT</span>
                                </div>
                                <div className="card-body px-5 pb-5 ">
                                    <div className=" d-flex d-inline-flex px-3 py-2 align-items-center section-1-content border-radius-div ">
                                        <FaCircle className="text-primary section-1-icon" />
                                        <p className="text-primary fw-bold ms-3 text-uppercase   section-1-p ">
                                            Available for elite projects
                                        </p>
                                    </div>
                                    <div className="text-head mt-4">
                                        <h1 className=" section-1-heading">
                                            ENGINEERING <br />
                                            <span className="text-span text-uppercase">The Future</span>
                                            <br />
                                            OF BRANDS.
                                        </h1>
                                    </div>
                                    <p className="sect-1-desc">
                                        I build high-performance digital ecosystems that merge technical
                                        complexity with artistic vision.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 ">
                            <div className="card h-100 hover-effect">
                                <div className="card-header  border-bottom-0 text-end pe-4 border-radius-div">
                                    <span class="card-number">02 / IDENTITY</span>
                                </div>
                                <div className="card-body text-center identity-heading">
                                    <div className="profile-pitcure">
                                        <img src={profilePicture}
                                            alt="img"
                                        />
                                    </div>
                                    <h3 className="mt-2 text-uppercase ">Abhay Chaudhary</h3>
                                    <p className="mb-3 mt-2 text-grey text-uppercase" >Elite Design Systems Architect</p>
                                    <div className=" mt-5 d-flex gap-4 justify-content-center  mb-5 social-btn">
                                        <a className="btn  border fs-5 bg-grey" href="">
                                            <FaXTwitter />
                                        </a>
                                        <a className="btn  border fs-5 bg-grey " href="">
                                            <FaBasketballBall />
                                        </a>
                                        <a className="btn  border fs-5 bg-grey" href="">
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-2 mt-4">
                    <div className="row">
                        <div className="col-6 p-0 ">
                            <div className="card hover-effect">
                                <div className="card-header  border-bottom-0 text-end pe-4 border-radius-div">
                                    <span class="card-number">03 / CONCEPT</span>
                                </div>
                                <div className=" card-body p-5">
                                    <h1 className="text-uppercase fw-bolder ">
                                        Elite <br />
                                        Philosophy
                                    </h1>
                                    <p className="w-75">
                                        Bridging the gap between cutting-edge engineering and
                                        premium aesthetics for global industry leaders.
                                    </p>
                                    <div className="pillars mt-5 ">
                                        <div className="row gx-5">
                                            <div className="col pe-5  border-start border-3 border-primary pillars-div ">
                                                <h5>Scalable Systems</h5>
                                                <p>Modular architectures built for massive growth. </p>
                                            </div>
                                            <div className="col ms-5 border-start border-3 border-primary pillars-div">
                                                <h5>Visual Logic</h5>
                                                <p>Where functional precision meets artistic soul. </p>
                                            </div>
                                        </div>
                                        <div className="row mt-4 gx-5">
                                            <div className="col pe-5  border-start border-3 border-primary pillars-div">
                                                <h5>Rapid Scale</h5>
                                                <p>Concept to enterprise deployment in weeks. </p>
                                            </div>
                                            <div className="col ms-5 border-start border-3 border-primary pillars-div">
                                                <h5>AI First</h5>
                                                <p>Future-proofing ecosystems with neural logic. . </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6  pe-0 ">
                            <div className="row w-100">
                                <div className="col ">
                                    <div className="card hover-effect py-5">
                                        <div className="card-body text-center">
                                            <h1 className="text-primary display-4  stats-text">12+</h1>
                                            <h6>YEARS EXP.</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-0 ">
                                    <div className="card hover-effect py-5">
                                        <div className="card-body text-center">
                                            <h1 className="text-primary display-4  stats-text">43</h1>
                                            <h6>ELITE AWARDS</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col w-100 ">
                                    <div className="card  p-4 bg-primary hover-effect">
                                        <div className="card-body text-white">
                                            <h3 className="mb-3">ELITE RESUME.</h3>
                                            <p className="mb-5 ">
                                                Explore my technical mastery and professional
                                                evolution.
                                            </p>
                                            <a
                                                className="  bg-white border-radius-div px-4 py-2 fw-bold"
                                                href=""
                                            >
                                                EXPLORE RESUME
                                                <FaAngleRight className="ms-4 d-inline" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 mission-sec">
                    <div className="row">
                        <div className="col-6 p-0 ">
                            <div className="card p-4 hover-effect ">
                                <div className="card-header bg-white border-bottom-0 ">
                                    <h4 className="">ELITE MISSION.</h4>
                                    <p className="fw-bold text-black-50">
                                        Defining the future of digital architecture STRATEGIC DEPTH
                                    </p>
                                </div>
                                <div className="card-body mt-4">
                                    <div className="w-100 mt-2 d-flex gap-3 mission-content">
                                        <div className='bg-primary text-white px-3 py-3 border-radius-div'>
                                            <FaChessKnight className='fs-5' />
                                        </div>

                                        <div className="">
                                            <h6 className="mission-head">STRATEGIC DEPTH</h6>
                                            <p>
                                                Every pixel is backed by rigorous architectural
                                                logic.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-100 mt-4 d-flex gap-3 mission-content">
                                        <div className='bg-primary text-white px-3 py-3 border-radius-div'>
                                            <FaVial className='fs-5' />

                                        </div>
                                        <div className="">
                                            <h6 className="mission-head">RADICAL QUALITY</h6>
                                            <p>
                                                Every pixel is backed by rigorous architectural
                                                logic.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-100 mt-4 d-flex gap-3 mission-content">
                                        <div className='bg-primary text-white px-3 py-3 border-radius-div'>
                                            <FaChessKnight className='fs-5' />
                                        </div>
                                        <div className="">
                                            <h6 className="mission-head">SCALABLE FUTURE</h6>
                                            <p>Systems designed to evolve as your brand expands. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6  ">
                            <div className="card  p-4 hover-effect">
                                <div className="card-body">
                                    <h4> CORE MASTERY.</h4>
                                    <div className=" mt-5 ">
                                        <div className="row d-flex gap-3">
                                            <div className="col d-flex  align-items-center p-4 border-radius-div  border pe-5  skills-box ">
                                                <div className="fs-5 px-3 border-radius-div me-4 py-3 text-white core-icon" >
                                                    <FaGem />
                                                </div>
                                                <p className="fw-bold">
                                                    SYSTEMS <br />
                                                    ARCHITECTURE
                                                </p>
                                            </div>
                                            <div className="col d-flex border align-items-cente p-4 border-radius-div  pe-5  skills-box">
                                                <div className="fs-5 px-3 border-radius-div me-4 py-3 text-primary bg-white" >
                                                    <FaShieldAlt />
                                                </div>
                                                <p className="fw-bold text-uppercase">
                                                    SECURE <br /> Engineering
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row d-flex mt-3 gap-3">
                                            <div className="col d-flex  align-items-center p-4 border-radius-div  border pe-5  skills-box ">
                                                <div className="fs-5 px-3 border-radius-div me-4 py-3 text-white core-icon" >
                                                    <FaGem />
                                                </div>
                                                <p className="fw-bold ">
                                                    SYSTEMS <br />
                                                    ARCHITECTURE
                                                </p>
                                            </div>
                                            <div className="col d-flex border align-items-cente p-4 border-radius-div  pe-5  skills-box">
                                                <div className="fs-5 px-3 border-radius-div me-4 py-3 text-primary bg-white" >
                                                    <FaShieldAlt />
                                                </div>
                                                <p className="fw-bold text-uppercase">
                                                    SECURE <br /> Engineering
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 mb-5">
                    <div className="row text-center">
                        <div className="col-12 ">
                            <div className="card p-5 hover-effect">
                                <div className="card-body">
                                    <h6 className="footer-head text-uppercase">
                                        Strategic Global Partners
                                    </h6>

                                    <div className="d-flex mt-5  justify-content-around footer-img">
                                        <img
                                            className=""
                                            src={logoIpsum}
                                            alt="img"
                                        />
                                        <img src={logoIpsum} alt="img" />
                                        <img src={logoIpsum} alt="img" />
                                        <img src={logoIpsum} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Home;
