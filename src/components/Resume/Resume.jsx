import './resume.css'
import {
    FaCircle,
    FaMoon,
    FaFileDownload
} from 'react-icons/fa'
function Resume() {
    return (
        <>
            <div className="container-main mb-5 pt-5">
                <div className="mb-3">
                    <div className="d-flex b justify-content-between animate__animated animate__fadeInDown align-items-center">
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
                                    <span class="card-number ">01 /  EXPERTISE</span>
                                </div>
                                <div className="card-body p-0 px-3 px-md-4 px-lg-5 pb-5 ">
                                    <div className=" d-flex d-inline-flex px-3 py-2 align-items-center section-1-content rounded-5 bg-lightBlue ">
                                        <FaCircle className="text-primary section-1-icon" />
                                        <p className="text-primary  fw-bold ms-3 text-uppercase   section-1-p  ">
                                            Design Systems Architect
                                        </p>
                                    </div>
                                    <div className="text-head mt-4">
                                        <h1 className=" section-1-heading">
                                            CURATED<br />
                                            <span className="text-span text-uppercase">TECHNICAL</span>
                                            <br />
                                            JOURNEY.
                                        </h1>
                                    </div>
                                    <p className="sect-1-desc">
                                        Documenting a decade of engineering high-performance ecosystems for global leaders.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 animate__animated animate__fadeInRight">
                            <div className="card rounded-5 h-100 hover-effect">
                                <div className="card-header bg-transparent rounded-5 border-bottom-0 text-end pe-4 ">
                                    <span class="card-number">02 / IMPACT</span>
                                </div>
                                <div className="card-body rounded-5  text-center">
                                    <span className="text-primary display-4  heading-impact">12+</span>
                                    <span className='small-text ls-1 d-block fw-bolder text-grey'>YEARS OF VISION</span>
                                    <span className='small-text ls-1 d-block mt-5 text-uppercase fs-6 fw-bolder text-grey'> Bridging Code & Art
                                    </span>
                                    <div className="mt-5 d-flex justify-content-center text-wrap  dwld-btn   ">
                                        <a className="btn d-flex align-items-center justify-content-center py-3 fw-bolder  w-100 mx-3"
                                            href="">
                                            <span className=" me-3 dwld-cv-btn">DOWNLOAD CV</span>
                                            <FaFileDownload />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-2 mt-4">
                    <div className="row g-3 g-lg-4">
                        <div className="col-12 col-lg-8">
                            <div className="card rounded-5 w-100 h-100 hover-effect">
                                <div className="card-header bg-transparent border-bottom-0 text-end pe-4 ">
                                    <span class="card-number">03 / TIMELINE</span>
                                </div>
                                <div className=" card-body px-3 px-md-4 px-lg-5   logic-div">
                                    <h2 className="text-uppercase  ">
                                        Elite Experience.
                                    </h2>
                                    <div className='row mt-3 g-3 align-items-center timeline-content'>
                                        <div className='col-12 col-md-3'>
                                            <p className='text-uppercase fw-bolder text-primary ls-1 small-text'>2021 - Present</p>
                                            <h6 className='text-uppercase  mt-2'>Elite Design Labs</h6>
                                        </div>
                                        <div className='mt-3 col-12 col-md-9 '>
                                            <h5>Chief Design Systems Architect</h5>
                                            <span className='small-text'>Orchestrating multi-platform design ecosystems for Fortune 500 AI firms, focusing on neural interface scalability and component logic. </span>
                                        </div>
                                    </div>
                                    <div className='row g-3 mt-5 align-items-center timeline-content'>
                                        <div className='col-12 col-md-3 '>
                                            <p className='text-uppercase fw-bolder text-primary ls-1 small-text'>2018 — 2021</p>
                                            <h6 className='text-uppercase  mt-2'>Quantum Logic Int.</h6>

                                        </div>
                                        <div className='col-12 col-md-9'>
                                            <h5>Senior Interface Engineer</h5>
                                            <span className='small-text'>Architected high-density bento-style dashboards for global logistics systems, reducing interaction friction by 40%. </span>
                                        </div>
                                    </div>
                                    <div className='row g-3 my-5 align-items-center timeline-content'>
                                        <div className='col-12 col-md-3'>
                                            <p className='text-uppercase fw-bolder text-primary ls-1 small-text'>2015 - 2018</p>
                                            <h6 className='text-uppercase lh-base  mt-2'>Aura Creative Agency</h6>
                                        </div>
                                        <div className='mt-3 pe-2 col-12 col-md-9'>
                                            <h5>Creative Technologist</h5>
                                            <span className='small-text'>Pioneered interactive brand experiences and web-based motion systems for luxury retail and sustainable tech brands. </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="">
                                <div className="card hover-effect rounded-5">
                                    <div className="card-header bg-transparent border-bottom-0 text-end pe-4 ">
                                        <span class="card-number">04 / STACK</span>
                                    </div>
                                    <div className="card-body ">
                                        <h4 className=" px-3">NETURAL STACK.</h4>
                                        <div className="d-flex gap-3 p-4 flex-wrap mt-3">
                                            <p className="p-2 rounded-4 border tech-stack">
                                                React / Next.js
                                            </p>
                                            <p className="p-2 rounded-4 border tech-stack">

                                                Html
                                            </p>
                                            <p className="p-2 rounded-4 border tech-stack">

                                                CSS
                                            </p>
                                            <p className="p-2 rounded-4 border tech-stack">
                                                Java
                                            </p>
                                            <p className="p-2 rounded-4 border tech-stack">

                                                BootStrap
                                            </p>
                                            <p className="p-2 rounded-4 border tech-stack">
                                                JavaScript
                                            </p>

                                            <p className="p-2 rounded-4 border tech-stack">
                                                JQUery
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-4 p-0 ">
                                <div className="card rounded-5  hover-effect ">
                                    <div className="card-header bg-transparent border-bottom-0 text-end pe-4 ">
                                        <span class="card-number">05 / ACADMEIC</span>
                                    </div>
                                    <div className="card-body mb-4 px-4 ">
                                        <h4 className="">EDUCATION.</h4>
                                        <div className="d-flex flex-column flex-md-row justify-content-between align-content-center gap-3 gap-md-5 mt-4 ps-4 education-div">
                                            <div className="">
                                                <h6 className="text-primary text-uppercase ls-1 ">
                                                    Stanford University
                                                </h6>
                                                <h5>Ph.D. in Digital Architecture</h5>

                                                <p className="small-text">
                                                    Thesis: Human-Centric Scalability in Neural Interfaces (2015)
                                                </p>
                                            </div>

                                        </div>
                                        <div className="d-flex flex-column flex-md-row justify-content-between align-content-center gap-3 gap-md-5 mt-4 ps-4 education-div">
                                            <div className=" ">
                                                <h6 className="text-primary text-uppercase ls-1 ">
                                                    Stanford University
                                                </h6>
                                                <h5>Ph.D. in Digital Architecture</h5>

                                                <p className="small-text">
                                                    Thesis: Human-Centric Scalability in Neural Interfaces (2015)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="section-3 w-100  mt-3">
                    <div className="col-12">
                        <div className="card p-0 rounded-5 h-100 hover-effect">
                            <div className="card-header bg-transparent border-bottom-0 text-end pe-4 ">
                                <span class="card-number">06 / MASTERY</span>
                            </div>
                            <div className="card-body mb-5 px-3 px-md-4 px-lg-5">
                                <h4 className='text-uppercase'>Working Skills.</h4>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className=' d-flex flex-column   gap-5 mt-5 w-100'>
                                            <div >
                                                <div className='d-flex flex-wrap justify-content-between align-items-center w-100'>
                                                    <h6 className='text-uppercase ls-1   skill-name'>Interface Engineering</h6>
                                                    <h6 className='small-text text-primary '>98 %</h6>

                                                </div>
                                                <div className="progress  w-mt-3 progress-bar-thickness">
                                                    <div
                                                        className="progress-bar progress-bar-color "
                                                        role="progressbar"
                                                        style={{ width: "98%" }}
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    >
                                                    </div>
                                                </div>
                                            </div>

                                            <div >
                                                <div className='d-flex flex-wrap justify-content-between align-items-center w-100'>
                                                    <h6 className='text-uppercase ls-1   skill-name'>Interface Engineering</h6>
                                                    <h6 className='small-text text-primary '>98 %</h6>

                                                </div>
                                                <div className="progress  w-mt-3 progress-bar-thickness">
                                                    <div
                                                        className="progress-bar progress-bar-color "
                                                        role="progressbar"
                                                        style={{ width: "98%" }}
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    >
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className=' d-flex flex-column   gap-5 mt-5 w-100'>
                                            <div >
                                                <div className='d-flex flex-wrap justify-content-between align-items-center w-100'>
                                                    <h6 className='text-uppercase ls-1   skill-name'>Interface Engineering</h6>
                                                    <h6 className='small-text text-primary '>98 %</h6>

                                                </div>
                                                <div className="progress  w-mt-3 progress-bar-thickness">
                                                    <div
                                                        className="progress-bar progress-bar-color "
                                                        role="progressbar"
                                                        style={{ width: "98%" }}
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    >
                                                    </div>
                                                </div>
                                            </div>

                                            <div >
                                                <div className='d-flex flex-wrap justify-content-between align-items-center w-100'>
                                                    <h6 className='text-uppercase ls-1   skill-name'>Interface Engineering</h6>
                                                    <h6 className='small-text text-primary '>98 %</h6>

                                                </div>
                                                <div className="progress  w-mt-3 progress-bar-thickness">
                                                    <div
                                                        className="progress-bar progress-bar-color "
                                                        role="progressbar"
                                                        style={{ width: "98%" }}
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    >
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    );
}

export default Resume;
