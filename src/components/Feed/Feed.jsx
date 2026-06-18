import './feed.css'
import { CiStopwatch } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";
import {

    FaCircle,
    FaMoon,
} from 'react-icons/fa'
import blogFirst from '../../assets/feed/blog-1.jpg'
import profilePicture from '../../assets/First-page/profile-picture.jpg'
import { useState } from "react";

function Feed() {
    const [showMore, setShowMore] = useState(false);
    return (
        <>
            <div className="container-main pt-5">
                <div className="mb-3">
                    <div className="d-flex b justify-content-between animate__animated animate__fadeInDown align-items-center">
                        <h4 className=" bg-white name-tag">Abhay Chaudhary</h4>
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
                            <div className="card bg-white  rounded-5 h-100 section-1 hover-effect-card-insights  ">
                                <div className="card-header bg-white m-2 border-bottom-0 text-end pe-4  ">
                                    <span class="card-number  ">01 /  INSIGHTS</span>
                                </div>
                                <div className="card-body px-3 px-md-4 px-lg-5 p-0 pb-5 ">
                                    <div className=" d-flex d-inline-flex px-3 py-2 align-items-center section-1-content rounded-5 bg-lightBlue ">
                                        <FaCircle className="text-primary section-1-icon" />
                                        <p className="text-primary  fw-bold ms-3 text-uppercase   section-1-p  ">
                                            Neural Architecture Logs
                                        </p>
                                    </div>
                                    <div className="text-head mt-4">
                                        <h1 className=" section-1-heading">
                                            DECODING<br />
                                            <span className="text-span text-uppercase">DIGITAL</span>
                                            <br />
                                            LOGIC.
                                        </h1>
                                    </div>
                                    <p className="sect-1-desc">
                                        Documenting a decade of engineering high-performance ecosystems for global leaders.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 animate__animated animate__fadeInRight ">
                            <div className="card rounded-5 bg-danger h-100 hover-effect core-feed-card">
                                <div className="card-header bg-transparent rounded-5 border-bottom-0 text-end pe-4 ">
                                    <span class="card-number text-white">02 / CORE</span>
                                </div>
                                <div className="card-body mt-lg-5  text-white rounded-5  text-center">
                                    <div className='mt-4'>
                                        <span className=" display-4  heading-impact">230</span>
                                        <span className='small-text ls-1 d-block fw-bolder text-uppercase'>Projects Completed</span>
                                    </div>
                                    <div className='mt-3'>
                                        <span className=" display-4  heading-impact">99%</span>
                                        <span className='small-text ls-1 d-block fw-bolder text-uppercase'>Infrastructure Uptime</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-2 mt-4">
                    <div className="row g-3 g-lg-4">
                        <div className="col-12 col-lg-8">
                            <div className="card  rounded-5 position-relative h-100 hover-effect-feed-card-3 blog-feed-card">
                                <div className="card-body  p-0 blog-img">
                                    <img className='w-100 rounded-5  blog-img-main' src={blogFirst} alt="img" />
                                    <div className='circle-hover '>
                                        <div className='rounded-circle'></div>
                                    </div>
                                </div>
                                <div className="card-footer  w-100 p-3 p-md-4 p-lg-5 text-white position-absolute bottom-0  accordion footer-content ">
                                    <div className='d-flex align-items-center gap-2 blog-icon'>
                                        <p className='px-4  py-1 bg-secondary   text-uppercase footer-p '>Engineering</p>
                                        <span>
                                            <CiStopwatch className='me-1  fs-5 ' />
                                            8 Min Read
                                        </span>
                                    </div>
                                    <div className='mt-4'>
                                        <h3>Future of Neural Design Systems</h3>
                                    </div>
                                    <div className='d-flex mt-4  align-items-center justify-content-between footer-profile blog-icon'>
                                        <div>
                                            <img className='rounded-circle' src={profilePicture} alt="img" />
                                            <span className='ms-3'>  Alex Sterling</span>
                                        </div>
                                        <span className='text-white'> OCT 24, 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12  col-lg-4">
                            <div className="card rounded-5 hover-effect blog-div ">
                                <div className="card-body p-0 ">
                                    <div className='d-flex  '>
                                        <div className="col-5 p-0 blog-img">
                                            <img className='w-100 h-100 blog-img' src={blogFirst} alt="" />
                                        </div>
                                        <div className="col-7 blog-text ms-lg-4  mt-3" >
                                            <p className='text-uppercase ls-1 d-inline small-text px-4 py-2 hardware-shadow'>Hardware</p>
                                            <h6 className='mt-3'>Quantum UI Hooks</h6>
                                            <div className=' d-flex align-item-center mb-3  blog-icon '>
                                                <span>
                                                    <CiStopwatch className='me-1  fs-5 ' />
                                                    5 Min
                                                </span>
                                                <span className='ms-3  ls-1'>OCt 15, 2026</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="card rounded-5 mt-5 hover-effect  blog-div">
                                <div className="card-body p-0">
                                    <div className='d-flex'>
                                        <div className="col-5 p-0 blog-img" >
                                            <img className='w-100 h-100  blog-img' src={blogFirst} alt="" />
                                        </div>
                                        <div className="col-7 blog-text ms-lg-4  mt-3" >
                                            <p className='text-uppercase ls-1 d-inline small-text px-4 py-2 hardware-shadow'>Hardware</p>
                                            <h6 className='mt-3'>Quantum UI Hooks</h6>
                                            <div className=' d-flex align-item-center  mb-3  blog-icon '>
                                                <span>
                                                    <CiStopwatch className='me-1  fs-5 ' />
                                                    5 Min
                                                </span>
                                                <span className='ms-3 ls-1'>OCt 15, 2026</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-3 mt-4">
                    <div className="row g-3 g-lg-4">
                        <div className="col-12 col-md-6 col-lg">
                            <div className="card rounded-5 position-relative hover-effect-sec3 sec3-blog-div">
                                <div className="card-body p-0">
                                    <div className='  sec3-blog-img'>
                                        <img className='w-100 sec3-blog-img' src={blogFirst} alt="" />
                                    </div>
                                    <div className='p-4'>
                                        <h6>Cyber Resilience Protocols</h6>
                                        <div className=' d-flex align-item-center justify-content-between mt-3  mb-3  sec3-blog-icon '>
                                            <span>
                                                <CiStopwatch className='me-1  fs-5 ' />
                                                5 Min
                                            </span>
                                            <span className='ms-3 ls-1'>OCt 15, 2026</span>
                                        </div>
                                    </div>
                                    <div className="card-footer  p-3 blog-text sec3-footer">
                                        <p className='text-uppercase ls-1 d-inline small-text px-4 py-2'>Hardware</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg">
                            <div className="card rounded-5 position-relative hover-effect-sec3 sec3-blog-div">
                                <div className="card-body p-0">
                                    <div className='  sec3-blog-img'>
                                        <img className='w-100 sec3-blog-img' src={blogFirst} alt="" />
                                    </div>
                                    <div className='p-4'>
                                        <h6>Cyber Resilience Protocols</h6>
                                        <div className=' d-flex align-item-center justify-content-between mt-3  mb-3  sec3-blog-icon '>
                                            <span>
                                                <CiStopwatch className='me-1  fs-5 ' />
                                                5 Min
                                            </span>
                                            <span className='ms-3 ls-1'>OCt 15, 2026</span>
                                        </div>
                                    </div>
                                    <div className="card-footer  p-3 blog-text sec3-footer">
                                        <p className='text-uppercase ls-1 d-inline small-text px-4 py-2'>Hardware</p>
                                    </div>
                                </div>
                            </div>
                        </div> <div className="col-12 col-md-6 col-lg">
                            <div className="card rounded-5 position-relative hover-effect-sec3 sec3-blog-div">
                                <div className="card-body p-0">
                                    <div className='  sec3-blog-img'>
                                        <img className='w-100 sec3-blog-img' src={blogFirst} alt="" />
                                    </div>
                                    <div className='p-4'>
                                        <h6>Cyber Resilience Protocols</h6>
                                        <div className=' d-flex align-item-center justify-content-between mt-3  mb-3  sec3-blog-icon '>
                                            <span>
                                                <CiStopwatch className='me-1  fs-5 ' />
                                                5 Min
                                            </span>
                                            <span className='ms-3 ls-1'>OCt 15, 2026</span>
                                        </div>
                                    </div>
                                    <div className="card-footer  p-3 blog-text sec3-footer">
                                        <p className='text-uppercase ls-1 d-inline small-text px-4 py-2'>Hardware</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {showMore && (
                    <div className="section-3 mt-4">
                        <div className="row g-3">
                            <div className="col-12 col-lg">
                                <div className="card rounded-5 position-relative h-100 hover-effect-sec3 ">
                                    <div className="card-body  p-0 blog-img">
                                        <img className='w-100 rounded-5  blog-img' src={blogFirst} alt="img" />
                                    </div>
                                    <div className="card-footer w-100 p-3 p-md-4 p-lg-5 text-white position-absolute bottom-0  accordion footer-content ">
                                        <div className='d-flex align-items-center gap-2 blog-icon'>
                                            <p className='px-4  py-1 bg-secondary   text-uppercase footer-p '>Engineering</p>
                                            <span>
                                                <CiStopwatch className='me-1  fs-5 ' />
                                                8 Min Read
                                            </span>
                                        </div>
                                        <div className='mt-4'>
                                            <h3>Future of Neural Design Systems</h3>
                                        </div>
                                        <div className='d-flex mt-4  align-items-center justify-content-between footer-profile blog-icon'>
                                            <div>
                                                <img className='rounded-circle' src={profilePicture} alt="img" />
                                                <span className='ms-3'>  Alex Sterling</span>
                                            </div>
                                            <span className='text-white'> OCT 24, 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card rounded-5 position-relative h-100 hover-effect-sec3">
                                    <div className="card-body  p-0 blog-img">
                                        <img className='w-100  h-100 rounded-5  blog-img' src={blogFirst} alt="img" />
                                    </div>
                                    <div className="card-footer w-100 p-3 p-md-4 p-lg-5 text-white position-absolute bottom-0  accordion footer-content ">
                                        <div className='d-flex align-items-center gap-2 blog-icon'>
                                            <p className='px-4  py-1 bg-secondary   text-uppercase footer-p '>Engineering</p>
                                            <span>
                                                <CiStopwatch className='me-1  fs-5 ' />
                                                8 Min Read
                                            </span>
                                        </div>
                                        <div className='mt-4'>
                                            <h3>Future of Neural Design Systems</h3>
                                        </div>
                                        <div className='d-flex mt-4  align-items-center justify-content-between footer-profile blog-icon'>
                                            <div>
                                                <img className='rounded-circle' src={profilePicture} alt="img" />
                                                <span className='ms-3'>  Alex Sterling</span>
                                            </div>
                                            <span className='text-white'> OCT 24, 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className='footer-button mt-5'>
                    <div className='d-flex justify-content-center   align-items-center'>
                        <button
                            className='text-uppercase px-4 px-md-5 py-3 rounded-5 footer-a border-0'
                            onClick={() => setShowMore(!showMore)}
                        >
                            <AiFillPlusCircle className='fs-4 me-3 ' />
                            {showMore ? 'Show Less' : 'Load More Articles'}
                        </button>
                    </div>

                </div>

            </div >

        </>
    );
}

export default Feed
