import './contact.css'
import {
    FaCircle,

    FaBasketballBall,
    FaGithub,
    FaShieldAlt,
    FaCheckCircle,
} from 'react-icons/fa'
import { FaXTwitter, FaLessThan } from 'react-icons/fa6'
import { AiFillThunderbolt } from "react-icons/ai";
import { RiTelegram2Fill } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";

function Contact() {
    return (
        <>
            <div className="container-main mb-5 pt-5">
                <div className="mb-3">
                    <div className="d-flex b justify-content-between animate__animated animate__fadeInDown align-items-center">
                        <h4 className="name-tag">Abhay Chaudhary</h4>

                    </div>
                </div>

                <div>
                    <div className="row g-3 g-lg-4">
                        <div className="col-12 col-lg-8 animate__animated animate__fadeInLeft">
                            <div className="card bg-white rounded-5 h-100 section-1 hover-effect ">
                                <div className="card-header bg-white m-2 border-bottom-0 text-end pe-4  ">
                                    <span class="card-number ">01 /  CONNECTION</span>
                                </div>
                                <div className="card-body p-0 px-3 px-md-4 px-lg-5 pb-5  ">
                                    <div className=" d-flex d-inline-flex px-3 py-2 align-items-center section-1-content rounded-5 bg-lightBlue ">
                                        <FaCircle className="text-primary section-1-icon" />
                                        <p className="text-primary  fw-bold ms-3 text-uppercase   section-1-p  ">
                                            Open for Strategic Partnerships
                                        </p>
                                    </div>
                                    <div className="text-head mt-4">
                                        <h1 className=" section-1-heading">
                                            LET'S<br />
                                            <span className="text-span text-uppercase">BUILD</span>
                                            <br />
                                            TOGETHER.
                                        </h1>
                                    </div>
                                    <p className="sect-1-desc">
                                        Ready to architect high-performance digital ecosystems. Submit a project brief and receive a response within 24 hours.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 animate__animated animate__fadeInRight">
                            <div className="card rounded-5 h-100 hover-effect">
                                <div className="card-header bg-transparent rounded-5 border-bottom-0 text-end pe-4 ">
                                    <span class="card-number">02 / CHANNELS</span>
                                </div>
                                <div className="card-body border-0 rounded-5 px-3 px-md-4 px-lg-5">
                                    <h4 className="text-uppercase">Quick Reach.</h4>
                                    <span className='small-text  d-block  text-grey'>Preferred channels for direct access.</span>
                                    <div className='d-flex rounded-4  mt-4 align-items-center p-3  channels-main-div'>
                                        <div className=' p-2 rounded-3 channels-icon'>
                                            <RiTelegram2Fill className='fs-4 ' />
                                        </div>
                                        <div className='d-flex flex-column ms-3 channels-div'>
                                            <span className='text-uppercase text-grey'>Email protocol</span>
                                            <p className='mt-1'>hello@alexsterling.ai</p>

                                        </div>
                                    </div>
                                    <div className='d-flex rounded-4 mt-3  mt-4 align-items-center p-3  channels-main-div'>
                                        <div className=' p-2 rounded-3 channels-icon'>
                                            <RiTelegram2Fill className='fs-4 ' />
                                        </div>
                                        <div className='d-flex flex-column ms-3 channels-div'>
                                            <span className='text-uppercase text-grey'>Email protocol</span>
                                            <p className='mt-1'>hello@alexsterling.ai</p>

                                        </div>

                                    </div><div className='d-flex rounded-4 mt-3 mt-4 align-items-center p-3  channels-main-div'>
                                        <div className=' p-2 rounded-3 channels-icon'>
                                            <RiTelegram2Fill className='fs-4 ' />
                                        </div>
                                        <div className='d-flex flex-column ms-3 channels-div'>
                                            <span className='text-uppercase text-grey'>Email protocol</span>
                                            <p className='mt-1'>hello@alexsterling.ai</p>

                                        </div>

                                    </div>
                                    <div className=" mt-5 d-flex gap-3 justify-content-start text-center social-btn mb-4">
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
                        <div className="col-12 col-md-6 col-xl">
                            <div className="card rounded-5 hover-effect contact-div">
                                <div className="card-header bg-transparent rounded-5 border-bottom-0 text-end pe-4 ">
                                    <span class="card-number">03 / STATUS</span>
                                </div>
                                <div className="card-body p-4 contact-card">
                                    <div className='  p-3 rounded-4 d-inline contact-status-icon-1'>
                                        <FaCheckCircle />
                                    </div>
                                    <div className='mt-4 contact-card-stauts contact-status-icon-1'>Open</div>
                                    <p className='mt-3 text-uppercase'>Available Now</p>
                                    <span className='mt-3 text-grey'>Accepting new projects starting May 2026.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl">
                            <div className="card rounded-5 hover-effect contact-div">
                                <div className="card-header bg-transparent rounded-5 border-bottom-0 text-end pe-4 ">
                                    <span class="card-number">04 / SPEED</span>
                                </div>
                                <div className="card-body p-4 contact-card">
                                    <div className='  p-3 rounded-4 d-inline contact-status-icon-3'>
                                        <MdOutlineWatchLater className='fs-5' />
                                    </div>
                                    <div className='mt-4 contact-card-stauts '><FaLessThan className='me-2 fs-3' />24h</div>
                                    <p className='mt-3 text-uppercase'>Available Now</p>
                                    <span className='mt-3 text-grey'>Accepting new projects starting May 2026.</span>
                                </div>
                            </div>
                        </div>  <div className="col-12 col-md-6 col-xl">
                            <div className="card rounded-5 hover-effect contact-div">
                                <div className="card-header bg-transparent rounded-5 border-bottom-0 text-end pe-4 ">
                                    <span class="card-number">05 / TRUST</span>
                                </div>
                                <div className="card-body p-4 contact-card">
                                    <div className='  p-3 rounded-4 d-inline contact-status-icon-2'>
                                        <FaCheckCircle />
                                    </div>
                                    <div className='mt-4 contact-card-stauts contact-status-icon-2'>Open</div>
                                    <p className='mt-3 text-uppercase'>Available Now</p>
                                    <span className='mt-3 text-grey'>Accepting new projects starting May 2026.</span>
                                </div>
                            </div>
                        </div>  <div className="col-12 col-md-6 col-xl">
                            <div className="card rounded-5 hover-effect contact-div">
                                <div className="card-header bg-transparent rounded-5 border-bottom-0 text-end pe-4 ">
                                    <span class="card-number">06 / ZONE</span>
                                </div>
                                <div className="card-body p-4 contact-card">
                                    <div className='  p-3 rounded-4 d-inline contact-status-icon-1'>
                                        <FaCheckCircle />
                                    </div>
                                    <div className='mt-4 contact-card-stauts '>PST</div>
                                    <p className='mt-3 text-uppercase'>Available Now</p>
                                    <span className='mt-3 text-grey'>Accepting new projects starting May 2026.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-3 mt-4">
                    <div className="card rounded-5   hover-effect">
                        <div className="card-header bg-transparent rounded-5 border-bottom-0 text-end pe-4 ">
                            <span class="card-number">07 / INTAKE</span>
                        </div>
                        <div className="card-body px-3  px-md-4 px-lg-5 rounded-5  ">
                            <div className="row h-100 gx-1">
                                <div className="col-12 col-lg-4 mb-3 mb-lg-5  h-100 rounded-5 p-2 p-md-5 text-white intake-content">
                                    <p className='mb-4 text-uppercase'>Project Intake</p>
                                    <h4 className='mb-4'> Start a
                                        New Project.</h4>
                                    <span className=' mb-4'>Submit a detailed brief and our team will evaluate it within 24 hours. No commitments required to get started.</span>
                                    <div className=' mt-5'>
                                        <div className='d-flex  align-items-center mt-2'>
                                            <FaCheckCircle className='intake-icons' />
                                            <h6 className='ms-2 mt-2'> Free initial consultation</h6>

                                        </div>
                                        <div className='d-flex  align-items-center mt-2'>
                                            <FaCheckCircle className='intake-icons' />
                                            <h6 className='ms-2 mt-2'> NDA available on request</h6>

                                        </div>  <div className='d-flex  align-items-center mt-2'>
                                            <FaCheckCircle className='intake-icons' />
                                            <h6 className='ms-2 mt-2'> Transparent pricing model</h6>

                                        </div>
                                        <div className='mt-5 name-sign'>
                                            <p>VELIXO × 2026</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col ms-4 ">
                                    <form id='contact-form' className=''>
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div class=" d-flex flex-column contact-div">
                                                    <label className='text-uppercase text-grey ' for="name">Full Name</label>
                                                    <input type="text" id="name" className='form-control p-3 ps-3 text-grey rounded-4 mt-3 contact-input bg-grey' placeholder="Alex Johnson" required />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div class=" d-flex flex-column contact-div">
                                                    <label className='text-uppercase text-grey' for="email">email address</label>
                                                    <input type="text" id="name" className='form-control p-3 ps-3 text-grey rounded-4 mt-3 bg-grey contact-input ' placeholder="AlexJohnson@22" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 mt-4">
                                                <div class=" d-flex flex-column contact-div">
                                                    <label className='text-uppercase text-grey' for="details">Project Subject</label>
                                                    <input type="text" id="project-details" className='form-control p-3 ps-3 text-grey rounded-4 mt-3 bg-grey contact-input' placeholder="e.g. Brand Identity & Web Platform" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-12  mt-4 mb-4">
                                                <div class=" d-flex flex-column contact-div">
                                                    <label className='text-uppercase text-grey' for="details">Project Brief</label>
                                                    <textarea type="text" cols={20} rows={5} className='form-control p-3 ps-3 text-grey rounded-4 mt-3  bg-grey contact-input' placeholder="e.g. Brand Identity & Web Platform" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row  mt-4">
                                            <div className="d-flex flex-column flex-md-row gap-3 justify-content-between align-items-md-center">
                                                <div className='d-flex'>
                                                    <FaShieldAlt />
                                                    <h6 className='ms-3'>
                                                        Your data is encrypted and never shared.
                                                    </h6>
                                                </div>
                                                <a className='bg-primary text-white text-uppercase rounded-5 fw-bold px-5 py-3'
                                                    href=""> Send Message <span className='ms-3'><AiFillThunderbolt /></span></a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Contact
