import './project.css'
import { FaCircle, FaMoon } from 'react-icons/fa'
import projectImg from '../../assets/projects-img/project-1.jpg'

function Projects() {
    return (
        <>
            <div className="container-main pt-5">
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
                                <div className="card-header bg-white rounded-5 border-bottom-0 text-end pe-4 m-2 ">
                                    <span class="card-number ">01 /  PORTFOLIO</span>
                                </div>
                                <div className="card-body p-0 px-3 px-md-4 px-lg-5 pb-5 ">
                                    <div className=" d-flex d-inline-flex px-3 py-2 align-items-center section-1-content rounded-5 bg-lightBlue ">
                                        <FaCircle className="text-primary section-1-icon" />
                                        <p className="text-primary  fw-bold ms-3 text-uppercase   section-1-p  ">
                                            Crafting Digital Assets
                                        </p>
                                    </div>
                                    <div className="text-head mt-4">
                                        <h1 className=" section-1-heading">
                                            ENGINEERING<br />
                                            <span className="text-span text-uppercase">TECHNICAL</span>
                                            <br />
                                            MASTERY.
                                        </h1>
                                    </div>
                                    <p className="sect-1-desc">
                                        A curated selection of high-density interfaces and scalable architectures developed for global industry leaders.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 animate__animated animate__fadeInRight">
                            <div className="card rounded-5 bg-primary h-100 hover-effect core-card">
                                <div className="card-header bg-transparent rounded-5 border-bottom-0 text-end pe-4 ">
                                    <span class="card-number text-white">02 / CORE</span>
                                </div>
                                <div className="card-body d flex flex-column align-items-center mt-lg-5 text-white rounded-5  text-center">
                                    <div className='mt-4'>
                                        <span className=" display-4  heading-impact">120+</span>
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
                    <div>
                        <div className="section-2 mt-4">
                            <div className="row g-3">
                                <div className="col w-100 p-0 ">
                                    <div className="card rounded-5 hover-effect">
                                        <div className="card-header bg-transparent rounded-5 border-bottom-0 text-end pe-4 ">
                                            <span class="card-number ">03 / LOOKUP</span>
                                        </div>
                                        <div className="card-body px-3 px-md-4 px-lg-5">
                                            <div className="d-flex flex-column flex-lg-row gap-4 justify-content-between align-items-lg-center">
                                                <div>
                                                    <h2 className="text-uppercase ">
                                                        Project Hub.
                                                    </h2>
                                                    <p className="w-100 txt-grey fw-bold">
                                                        Discover neural architectures and scalable systems
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <ul className="nav nav-tabs flex-wrap gap-2" id="myTab" role="tablist">
                                                        <li className="nav-item " role="presentation">
                                                            <button
                                                                className="nav-link  active  text-uppercase ls-1 nav-buttons rounded-4"
                                                                id="home-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#home-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="home-tab-pane"
                                                                aria-selected="true"
                                                            >
                                                                ALL Work
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link nav-buttons rounded-4 text-uppercase ls-1"
                                                                id="profile-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#profile-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="profile-tab-pane"
                                                                aria-selected="false"
                                                            >
                                                                UI/UX design
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link text-uppercase ls-1  nav-buttons rounded-4"
                                                                id="contact-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#contact-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="contact-tab-pane"
                                                                aria-selected="false"
                                                            >
                                                                architecture
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link text-uppercase ls-1  nav-buttons rounded-4"
                                                                id="system-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#system-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="system-tab-pane"
                                                                aria-selected="false"
                                                            >
                                                                systems
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-content mt-5" id="myTabContent">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="home-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="home-tab"
                                                    tabindex="0">
                                                    <div className="row g-3 mb-3">
                                                        <div className="col-12 col-md-6 col-xl-4">
                                                            <div className='card rounded-5  hover-effect'>
                                                                <div className="card-body p-0 ">
                                                                    <div className="projects-img">
                                                                        <img className='w-100 rounded-5' src={projectImg} alt="" />
                                                                    </div>
                                                                    <div className='p-4 work-content'>
                                                                        <p className='ls-1 text-uppercase text-primary'>UI/UX design</p>
                                                                        <h6 className='text-uppercase  mt-2'>Neural Dashboard</h6>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6 col-xl-4">
                                                            <div className='card rounded-5  hover-effect'>
                                                                <div className="card-body p-0 ">
                                                                    <div className="projects-img">
                                                                        <img className='w-100 rounded-5' src={projectImg} alt="" />
                                                                    </div>
                                                                    <div className='p-4 work-content'>
                                                                        <p className='ls-1 text-uppercase text-primary'>Archiecture</p>
                                                                        <h6 className='text-uppercase  mt-2'>Neural Dashboard</h6>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6 col-xl-4">
                                                            <div className='card rounded-5  hover-effect'>
                                                                <div className="card-body p-0 ">
                                                                    <div className="projects-img">
                                                                        <img className='w-100 rounded-5' src={projectImg} alt="" />
                                                                    </div>
                                                                    <div className='p-4 work-content'>
                                                                        <p className='ls-1 text-uppercase text-primary'>Systems</p>
                                                                        <h6 className='text-uppercase  mt-2'>Neural Dashboard</h6>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6 col-xl-4">
                                                            <div className='card rounded-5  hover-effect'>
                                                                <div className="card-body p-0 ">
                                                                    <div className="projects-img">
                                                                        <img className='w-100 rounded-5' src={projectImg} alt="" />
                                                                    </div>
                                                                    <div className='p-4 work-content'>
                                                                        <p className='ls-1 text-uppercase text-primary'>UI/UX design</p>
                                                                        <h6 className='text-uppercase  mt-2'>Neural Dashboard</h6>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>  <div className="col-12 col-md-6 col-xl-4">
                                                            <div className='card rounded-5  hover-effect'>
                                                                <div className="card-body p-0 ">
                                                                    <div className="projects-img">
                                                                        <img className='w-100 rounded-5' src={projectImg} alt="" />
                                                                    </div>
                                                                    <div className='p-4 work-content'>
                                                                        <p className='ls-1 text-uppercase text-primary'>Systems</p>
                                                                        <h6 className='text-uppercase  mt-2'>Neural Dashboard</h6>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="profile-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="profile-tab"
                                                    tabindex="0"
                                                >
                                                    <div className="row g-3 mb-3">
                                                        <div className="col-12 col-md-6 col-xl-4">
                                                            <div className='card rounded-5  hover-effect'>
                                                                <div className="card-body p-0 ">
                                                                    <div className="projects-img">
                                                                        <img className='w-100 rounded-5' src={projectImg} alt="" />
                                                                    </div>
                                                                    <div className='p-4 work-content'>
                                                                        <p className='ls-1 text-uppercase text-primary'>UI/UX design</p>
                                                                        <h6 className='text-uppercase  mt-2'>Neural Dashboard</h6>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6 col-xl-4">
                                                            <div className='card rounded-5  hover-effect'>
                                                                <div className="card-body p-0 ">
                                                                    <div className="projects-img">
                                                                        <img className='w-100 rounded-5' src={projectImg} alt="" />
                                                                    </div>
                                                                    <div className='p-4 work-content'>
                                                                        <p className='ls-1 text-uppercase text-primary'>UI/UX design</p>
                                                                        <h6 className='text-uppercase  mt-2'>Neural Dashboard</h6>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="contact-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="contact-tab"
                                                    tabindex="0"
                                                >
                                                    <div className="row g-3 mb-3">
                                                        <div className="col-12 col-md-6 col-xl-4">
                                                            <div className='card rounded-5  hover-effect'>
                                                                <div className="card-body p-0 ">
                                                                    <div className="projects-img">
                                                                        <img className='w-100 rounded-5' src={projectImg} alt="" />
                                                                    </div>
                                                                    <div className='p-4 work-content'>
                                                                        <p className='ls-1 text-uppercase text-primary'>Architecture</p>
                                                                        <h6 className='text-uppercase  mt-2'>Neural Dashboard</h6>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="system-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="system-tab"
                                                    tabindex="0">
                                                    <div className="row g-3 mb-4">
                                                        <div className="col-12 col-md-6 col-xl-4">
                                                            <div className='card rounded-5  hover-effect'>
                                                                <div className="card-body p-0 ">
                                                                    <div className="projects-img">
                                                                        <img className='w-100 rounded-5' src={projectImg} alt="" />
                                                                    </div>
                                                                    <div className='p-4 work-content'>
                                                                        <p className='ls-1 text-uppercase text-primary'>Systems</p>
                                                                        <h6 className='text-uppercase  mt-2'>Neural Dashboard</h6>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6 col-xl-4">
                                                            <div className='card rounded-5  hover-effect'>
                                                                <div className="card-body p-0 ">
                                                                    <div className="projects-img">
                                                                        <img className='w-100 rounded-5' src={projectImg} alt="" />
                                                                    </div>
                                                                    <div className='p-4 work-content'>
                                                                        <p className='ls-1 text-uppercase text-primary'>Systems</p>
                                                                        <h6 className='text-uppercase  mt-2'>Neural Dashboard</h6>
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
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Projects;

