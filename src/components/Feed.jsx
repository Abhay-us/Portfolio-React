
import {
    FaAngleRight,
    FaChessKnight,
    FaCircle,
    FaGem,
    FaMoon,
    FaShieldAlt,
    FaVial,
} from 'react-icons/fa'
import logoIpsum from '../assets/First-page/logo-ipsum-1.png'

function Feed() {
    return (
        <>
            <div className="container-main pt-5">
                <header className="mb-3">
                    <div className="d-flex b justify-content-between">
                        <h4 className="name-tag">Abhay Chaudhary</h4>
                        <a className="btn border border-radius-div hover-btn" href="">
                            <FaMoon className="p-2" />
                        </a>
                    </div>
                </header>

                <div>
                    <div className="row">
                        <div className="col-8 p-5 border border-radius-div section-1 hover-effect">
                            <div
                                className=" d-flex d-inline-flex px-3 py-2 align-items-center bg-lightBlue section-1-content border-radius-div ">
                                <FaCircle className="text-primary" />
                                <p className="text-primary fw-bold ms-3 text-uppercase letter   section-1-p "> Neural Architecture
                                    Logs
                                    projects </p>
                            </div>
                            <div className="text-head">
                                <h1 className="display-1 fw-bolder">DECODING<br />
                                    <span className="text-span text-uppercase">DIGITAL</span><br />
                                    LOGIC.
                                </h1>
                            </div>
                            <p className="mt-3  fs-5 w-75 text-secondary    ">Documenting technical breakthroughs, design
                                philosophy, and the future of
                                scalable engineering. </p>
                        </div>
                        <div className="col-4 d-flex ">
                            <div className="card  w-100  bg-danger text-white hover-effect">
                                <div className="card-body  d-flex flex-column justify-content-center align-items-center ">
                                    <h1 className="fw-bolder display-3 mt-5">240</h1>
                                    <h6 className="mb-3    mt-2 text-uppercase txt-grey ls-1">Neural Logs</h6>
                                    <h1 className="fw-bolder display-3 mt-3">50k+</h1>
                                    <h6 className="mb-3    mt-2 text-uppercase txt-grey ls-1">Infrastructure Uptime</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-2 mt-4">
                    <div className="row">
                        <div className="col-6 p-0 ">
                            <div className="card hover-effect">
                                <div className="card-body p-5">
                                    <h1 className="text-uppercase fw-bolder ">Elite <br />Philosophy</h1>
                                    <p className="w-75">Bridging the gap between cutting-edge engineering and premium aesthetics for
                                        global
                                        industry
                                        leaders. </p>
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
                                            <p className="mb-5 ">Explore my technical mastery and professional evolution. </p>
                                            <a className="  bg-white border-radius-div px-4 py-2 fw-bold" href="">EXPLORE RESUME
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
                                    <p className="fw-bold text-black-50"> Defining the future of digital architecture
                                        STRATEGIC DEPTH</p>
                                </div>
                                <div className="card-body mt-4">
                                    <div className="w-100 mt-2 d-flex gap-3 mission-content">
                                        <FaChessKnight className="bg-primary text-white px-3 py-3 border-radius-div" />
                                        <div className="">
                                            <h6 className="mission-head">STRATEGIC DEPTH</h6>
                                            <p>Every pixel is backed by rigorous architectural logic. </p>
                                        </div>
                                    </div>
                                    <div className="w-100 mt-4 d-flex gap-3 mission-content">
                                        <FaVial className="bg-primary text-white px-3 py-3 border-radius-div" />
                                        <div className="">
                                            <h6 className="mission-head">
                                                RADICAL QUALITY</h6>
                                            <p>Every pixel is backed by rigorous architectural logic. </p>
                                        </div>
                                    </div>

                                    <div className="w-100 mt-4 d-flex gap-3 mission-content">
                                        <FaChessKnight className="bg-primary text-white px-3 py-3 border-radius-div" />
                                        <div className="">
                                            <h6 className="mission-head">
                                                SCALABLE FUTURE</h6>
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
                                        <div className="row gx-5">
                                            <div className="col d-flex align-items-center p-4 border-radius-div  pe-5  skills-box ">
                                                <FaGem className="fs-5 px-3 border-radius-div me-4 py-3 text-primary bg-white" />
                                                <p className="fw-bold"> SYSTEMS <br />ARCHITECTURE</p>
                                            </div>
                                            <div className="col d-flex align-items-cente p-4 border-radius-div  pe-5  skills-box">
                                                <FaShieldAlt className="fs-5 px-3 border-radius-div me-4 py-3 text-primary bg-white" />
                                                <p className="fw-bold text-uppercase"> SECURE <br /> Engineering</p>
                                            </div>
                                        </div>
                                        <div className="row mt-4 gx-5">
                                            <div className="col d-flex align-items-center p-4 border-radius-div  pe-5   skills-box">
                                                <FaGem className="fs-5 px-3 border-radius-div me-4 py-3 text-primary bg-white" />
                                                <p className="fw-bold"> SYS<br />ARCHITECTURE</p>
                                            </div>
                                            <div className="col d-flex align-items-center p-4 border-radius-div  pe-5   skills-box">
                                                <FaGem className="fs-5 px-3 border-radius-div me-4 py-3 text-primary bg-white" />
                                                <p className="fw-bold"> SYSTEMS <br />ARCHITECTURE</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-12 ">
                        <div className="card p-5 ">
                            <div className=" card-body hover-effect">
                                <h6 className="footer-head text-uppercase">Strategic Global Partners </h6>

                                <div className="d-flex mt-5  justify-content-around footer-img">
                                    <img className="" src={logoIpsum} alt="img" />
                                    <img src={logoIpsum} alt="img" />
                                    <img src={logoIpsum} alt="img" />
                                    <img src={logoIpsum} alt="img" />

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    );
}

export default Feed
