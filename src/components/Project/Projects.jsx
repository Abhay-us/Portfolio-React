import { FaCircle, FaMoon } from 'react-icons/fa'

function Projects() {
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
                            <div className=" d-flex d-inline-flex px-3 py-2 align-items-center bg-lightBlue section-1-content ">
                                <FaCircle className="text-primary" />
                                <p className="text-primary fw-bold ms-3 text-uppercase letter  section-1-p">
                                    
                                    Available for elite projects
                                </p>
                            </div>
                            <div className="text-head">
                                <h1 className="display-1 fw-bolder">
                                    ENGINEERING <br />
                                    <span className="text-span text-uppercase">TECHNICAL</span>
                                    <br />
                                    MASTERY.
                                </h1>
                            </div>
                            <p className="mt-3  fs-4 w-75">
                                A curated selection of high-density interfaces and scalable
                                architectures developed for global industry leaders.
                            </p>
                        </div>
                        <div className="col-4 d-flex ">
                            <div className="card  w-100  bg-primary text-white hover-effect">
                                <div className="card-body  d-flex flex-column justify-content-center align-items-center ">
                                    <h1 className="fw-bolder display-3 mt-5">120+</h1>
                                    <h6 className="mb-3    mt-2 text-uppercase txt-grey ls-1">
                                        Projects Completed
                                    </h6>
                                    <h1 className="fw-bolder display-3 mt-5">99%</h1>
                                    <h6 className="mb-3    mt-2 text-uppercase txt-grey ls-1">
                                        Infrastructure Uptime
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="section-2 mt-4">
                            <div className="row">
                                <div className="col w-100 p-0 ">
                                    <div className="card hover-effect">
                                        <div className="card-body p-5">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <h2 className="text-uppercase fw-bolder ">
                                                        Project Hub.
                                                    </h2>
                                                    <p className="w-75 txt-grey fw-bold">
                                                        Discover neural architectures and scalable systems
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                        <li className="mx-3 nav-item " role="presentation">
                                                            <button
                                                                className="nav-link active"
                                                                id="home-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#home-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="home-tab-pane"
                                                                aria-selected="true"
                                                            >
                                                                Home
                                                            </button>
                                                        </li>
                                                        <li className=" mx-3 nav-item" role="presentation">
                                                            <button
                                                                className="nav-link"
                                                                id="profile-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#profile-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="profile-tab-pane"
                                                                aria-selected="false"
                                                            >
                                                                Profile
                                                            </button>
                                                        </li>
                                                        <li className=" mx-3 nav-item" role="presentation">
                                                            <button
                                                                className="nav-link"
                                                                id="contact-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#contact-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="contact-tab-pane"
                                                                aria-selected="false"
                                                            >
                                                                Contact
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
                                                    tabindex="0"
                                                >
                                                    home...
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="profile-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="profile-tab"
                                                    tabindex="0"
                                                >
                                                    pro...
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="contact-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="contact-tab"
                                                    tabindex="0"
                                                >
                                                    cot...
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
        </>
    );
}

export default Projects;
