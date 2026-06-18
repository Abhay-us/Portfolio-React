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
                    <div className="d-flex b justify-content-between animate__animated animate__fadeInDown  align-items-center">
                        <h4 className="name-tag">Abhay Chaudhary</h4>
                        <div className='rounded-3  hover-btn z-1'>
                            <a className="btn  py-3 px-4  " href="">
                                <FaMoon />
                            </a>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="row g-3 g-lg-4">
                        <div className="col-12 col-lg-8 animate__animated animate__fadeInLeft">
                            <div className="card bg-white rounded-5 h-100 section-1 hover-effect ">
                                <div className="card-header bg-white m-2 border-bottom-0 text-end pe-4  ">
                                    <span class="card-number ">01 / CONCEPT</span>
                                </div>
                                <div className="card-body p-0 px-3 px-md-4 px-lg-5 pb-5 ">
                                    <div className=" d-flex d-inline-flex px-3 py-2 align-items-center section-1-content rounded-5 bg-lightBlue ">
                                        <FaCircle className="text-primary section-1-icon" />
                                        <p className="text-primary  fw-bold ms-3 text-uppercase   section-1-p  ">
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
                        <div className="col-12 col-lg-4 animate__animated animate__fadeInRight">
                            <div className="card rounded-5 h-100 hover-effect">
                                <div className="card-header bg-transparent rounded-5 border-bottom-0 text-end pe-4 ">
                                    <span class="card-number">02 / IDENTITY</span>
                                </div>
                                <div className="card-body text-center identity-heading">
                                    <div className="profile-pitcure">
                                        <img src={profilePicture}
                                            alt="img"
                                        />
                                    </div>
                                    <h3 className="mt-2 text-uppercase ">Abhay Chaudhary</h3>
                                    <p className="mb-3 mt-2 text-grey text-uppercase small-text" >Elite Design Systems Architect</p>
                                    <div className="  d-flex gap-3 justify-content-center align-items-center mt-5 social-btn">
                                        <a className="  border fs-5 bg-grey" href="">
                                            <FaXTwitter />
                                        </a>
                                        <a className="  border fs-5 bg-grey " href="">
                                            <FaBasketballBall />
                                        </a>
                                        <a className="  border fs-5 bg-grey" href="">
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-2 mt-4">
                    <div className="row g-3 g-lg-4">
                        <div className="col-12 col-lg-6">
                            <div className="card rounded-5 h-100 hover-effect">
                                <div className="card-header bg-transparent border-bottom-0 text-end pe-4 ">
                                    <span class="card-number">03 / LOGIC</span>
                                </div>
                                <div className=" card-body px-3 px-md-4 px-lg-5   logic-div">
                                    <h2 className="text-uppercase logic-div-heading ">
                                        Elite <br />
                                        Philosophy.
                                    </h2>
                                    <p className=" text-grey mt-4 small-text">
                                        Bridging the gap between cutting-edge engineering and
                                        premium aesthetics for global industry leaders.
                                    </p>
                                    <div className="pillars  mt-5 ">
                                        <div className="row g-3">
                                            <div className="col-12 col-md-6">
                                                <div className='border-start ps-3 p-1 border-2 border-primary pillars-div'>
                                                    <h6 className='text-uppercase small-text'>Scalable Systems</h6>
                                                    <p className='small-text text-grey'>Modular architectures built for massive growth. </p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className='border-start ps-3 p-1 border-2 border-primary pillars-div'>
                                                    <h6 className='text-uppercase small-text'>Visual Logic</h6>
                                                    <p className='small-text text-grey'>Where functional precision meets artistic soul. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-3 mt-1">
                                            <div className="col-12 col-md-6">
                                                <div className='ps-3 p-1 border-start border-2 border-primary pillars-div'>
                                                    <h6 className='  text-uppercase small-text'>Rapid Scale</h6>
                                                    <p className='small-text text-grey'>Concept to enterprise deployment in weeks. </p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className='border-start ps-3 p-1 border-2 border-primary pillars-div'>
                                                    <h6 className='text-uppercase small-text'>AI First</h6>
                                                    <p className='small-text text-grey'>Future-proofing ecosystems with neural logic.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row g-3">
                                <div className="col-12 col-md-6">
                                    <div className="card py-5 rounded-5 hover-effect ">
                                        <div className="card-header bg-transparent   border-bottom-0 text-end pe-4 stats-head ">
                                            <span class="card-number text-uppercase ">04 / STATS</span>
                                        </div>
                                        <div className="card-body  text-center">
                                            <span className="text-primary display-4  stats-text">12+</span>
                                            <span className='small-text ls-1 d-block fw-bolder text-grey'>YEARS EXP.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="card py-5 rounded-5 hover-effect ">
                                        <div className="card-header bg-transparent border-bottom-0 text-end pe-4 stats-head ">
                                            <span class="card-number text-uppercase">04 / STATS</span>
                                        </div>
                                        <div className="card-body   text-center">
                                            <span className="text-primary display-4  stats-text">43</span>
                                            <span className='small-text ls-1 d-block fw-bolder text-grey'>ELITE AWARDS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3 g-3">
                                <div className="col w-100 ">
                                    <div className="card rounded-5 px-4 bg-primary hover-effect">
                                        <div className="card-header bg-transparent   border-bottom-0 text-end pe-4  ">
                                            <span class="card-number text-uppercase text-white">06 / Journey</span>
                                        </div>
                                        <div className="card-body pb-5 text-white card-resume">
                                            <h3 className="mb-3">ELITE RESUME.</h3>
                                            <p className="mb-5 ">
                                                Explore my technical mastery and professional
                                                evolution.
                                            </p>
                                            <div className='col  d-inline-flex align-items-center text-nowrap'>
                                                <a
                                                    className="rounded-pill   bg-white px-4 py-2 fw-bold  ls-1"
                                                    href=""
                                                >
                                                    EXPLORE RESUME
                                                    <FaAngleRight className="ms-lg-4  " />
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 mission-sec">
                    <div className="row g-3 g-lg-4">
                        <div className="col-12 col-lg-6">
                            <div className="card rounded-5 p-4 hover-effect ">
                                <span class="card-number text-uppercase text-end ">07 / Philosphy</span>
                                <div className="card-header pt-3 bg-white border-bottom-0 card-7 ">
                                    <h4 className="">ELITE MISSION.</h4>
                                    <p className="fw-bold text-black-50">
                                        Defining the future of digital architecture

                                    </p>
                                </div>
                                <div className="card-body px-4 ">
                                    <div className="d-flex align-items-center w-100 mt-2 d-flex gap-3 mission-content">
                                        <div className='bg-primary rounded-4 text-white px-3 py-3 '>
                                            <FaChessKnight className='fs-5' />
                                        </div>

                                        <div className="">
                                            <span className="mission-head value-title">STRATEGIC DEPTH</span>
                                            <p>
                                                Every pixel is backed by rigorous architectural
                                                logic.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center w-100 mt-4 d-flex gap-3 mission-content">
                                        <div className='bg-primary rounded-4 text-white px-3 py-3 '>
                                            <FaVial className='fs-5' />

                                        </div>
                                        <div className="">
                                            <span className="mission-head ">RADICAL QUALITY</span>
                                            <p>
                                                Every pixel is backed by rigorous architectural
                                                logic.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center w-100 mt-4 d-flex gap-3 mission-content">
                                        <div className='bg-primary rounded-4 text-white px-3 py-3 '>
                                            <FaChessKnight className='fs-5' />
                                        </div>
                                        <div className="">
                                            <h6 className="mission-head ">SCALABLE FUTURE</h6>
                                            <p>Systems designed to evolve as your brand expands. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent border-0 my-3 text-end">
                                    <span className=' sign-text'>VELIXO x 2026</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="card h-100 rounded-5   hover-effect">
                                <div className="card-header bg-transparent border-bottom-0 text-end pe-4  pt-4">
                                    <span class="card-number text-uppercase ">08 / mastery</span>
                                </div>
                                <div className="card-body p-0 px-3 px-md-4 px-lg-5 ">
                                    <h4> CORE MASTERY.</h4>
                                    <div className=" -4 mt-5 ">
                                        <div className="row gap-3">
                                            <div className="col-12 col-md d-flex  rounded-4 align-items-center p-4  border pe-lg-5  skills-box ">
                                                <div className="fs-5 px-3 me-4 py-2   rounded-3 core-icon" >
                                                    <FaGem />
                                                </div>
                                                <p className="fw-bold">
                                                    SYSTEMS <br />
                                                    ARCHITECTURE
                                                </p>
                                            </div>
                                            <div className="col-12 col-md d-flex border align-items-cente p-4  pe-lg-5 rounded-4   skills-box ">
                                                <div className="fs-5 px-3 me-4 py-2   rounded-3 core-icon" >
                                                    <FaShieldAlt />
                                                </div>
                                                <p className="fw-bold text-uppercase">
                                                    SECURE <br /> Engineering
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row d-flex mt-3 gap-3">
                                            <div className="col-12 col-md d-flex  align-items-center p-4  border pe-lg-5 rounded-4  skills-box ">
                                                <div className="fs-5 px-3 me-4 py-2  rounded-3 core-icon" >
                                                    <FaGem />
                                                </div>
                                                <p className="fw-bold ">
                                                    SYSTEMS <br />
                                                    ARCHITECTURE
                                                </p>
                                            </div>
                                            <div className="col-12 col-md d-flex border align-items-cente p-4  pe-lg-5 rounded-4   skills-box">
                                                <div className="fs-5 px-3 me-4 py-2  rounded-3 core-icon" >
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
                        <div className="col-12 p-0">
                            <div className="card rounded-5 hover-effect">
                                <div className="card-header bg-transparent border-bottom-0 text-end pe-4  ">
                                    <span class="card-number text-uppercase ">09 / network</span>
                                </div>
                                <div className="card-body  py-5">
                                    <h6 className="footer-head fw-normal  lh-1 text-uppercase pb-5">
                                        Strategic Global Partners
                                    </h6>

                                    <div className="d-flex mt-5 flex-wrap gap-4 justify-content-around footer-img pb-5">
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
