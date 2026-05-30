
import {
  
    FaCircle,
    FaFileDownload,
    FaMoon,
  
} from 'react-icons/fa'

function Contact() {
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
                        <div className="col-8 ">
                            <div className="p-5  border border-radius-div section-1 hover-effect">
                                <div className=" d-flex d-inline-flex px-3 py-2 align-items-center bg-lightBlue section-1-content ">
                                    <FaCircle className="text-primary" />
                                    <p className="text-primary fw-bold ms-3 text-uppercase letter  section-1-p">

                                        Available for elite projects
                                    </p>
                                </div>
                                <div className="text-head">
                                    <h1 className="display-1 fw-bolder">
                                        CURATED
                                        <br />
                                        <span className="text-span text-uppercase">TECHNICAL</span>
                                        <br />
                                        JOURNEY.
                                    </h1>
                                </div>
                                <p className="mt-3  fs-4 w-75">
                                    Documenting a decade of engineering high-performance
                                    ecosystems for global leaders.
                                </p>
                            </div>
                        </div>
                        <div className="col-4  ">
                            <div className="card py-5 h-100  hover-effect">
                                <div className="card-body text-center">
                                    <h1 className="display-1 fw-bolder text-primary">12+</h1>
                                    <h6 className="fw-bolder mt-2">Years of Vision</h6>
                                    <h5 className="mb-3 mt-5"> Bridging Code & Art </h5>
                                    <div className=" position-absolute bottom-0 start-50 translate-middle w-100 mb-2  social-btn ">
                                        <a
                                            className="btn  px-5 py-3  border-radius-div  fw-bolder"
                                            href=""
                                        >
                                            <span className=" me-3">DOWNLOAD CV</span>
                                            <FaFileDownload className="d-inline" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-2 mt-4">
                    <div className="row">
                        <div className="col-6 p-0 hover-effect">
                            <div className="card">
                                <div className="card-body p-5">
                                    <h1 className="text-uppercase fw-bolder ">Elite Experience.</h1>
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

                    </div>
                </div>
            </div >
        </>
    )
}

export default Contact
