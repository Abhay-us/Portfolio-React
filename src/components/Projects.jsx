function Projects() {
    return (
        <>
            <div class="container-main pt-5">
                <header class="mb-3">
                    <div class="d-flex b justify-content-between">
                        <h4 class="name-tag">Abhay Chaudhary</h4>
                        <a class="btn border border-radius-div hover-btn" href="">
                            <i class="fa-solid fa-moon p-2"></i>
                        </a>
                    </div>
                </header>

                <div>
                    <div class="row">
                        <div class="col-8 p-5 border border-radius-div section-1 hover-effect">
                            <div class=" d-flex d-inline-flex px-3 py-2 align-items-center bg-lightBlue section-1-content ">
                                <i class="fa-solid fa-circle text-primary"></i>
                                <p class="text-primary fw-bold ms-3 text-uppercase letter  section-1-p">
                                    {" "}
                                    Available for elite projects{" "}
                                </p>
                            </div>
                            <div class="text-head">
                                <h1 class="display-1 fw-bolder">
                                    ENGINEERING <br />
                                    <span class="text-span text-uppercase">TECHNICAL</span>
                                    <br />
                                    MASTERY.
                                </h1>
                            </div>
                            <p class="mt-3  fs-4 w-75">
                                A curated selection of high-density interfaces and scalable
                                architectures developed for global industry leaders.{" "}
                            </p>
                        </div>
                        <div class="col-4 d-flex ">
                            <div class="card  w-100  bg-primary text-white hover-effect">
                                <div class="card-body  d-flex flex-column justify-content-center align-items-center ">
                                    <h1 class="fw-bolder display-3 mt-5">120+</h1>
                                    <h6 class="mb-3    mt-2 text-uppercase txt-grey ls-1">
                                        Projects Completed
                                    </h6>
                                    <h1 class="fw-bolder display-3 mt-5">99%</h1>
                                    <h6 class="mb-3    mt-2 text-uppercase txt-grey ls-1">
                                        Infrastructure Uptime
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="section-2 mt-4">
                            <div class="row">
                                <div class="col w-100 p-0 ">
                                    <div class="card hover-effect">
                                        <div class="card-body p-5">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <h2 class="text-uppercase fw-bolder ">
                                                        Project Hub.
                                                    </h2>
                                                    <p class="w-75 txt-grey fw-bold">
                                                        Discover neural architectures and scalable systems
                                                    </p>
                                                </div>
                                                <div class="">
                                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                        <li class="mx-3 nav-item " role="presentation">
                                                            <button
                                                                class="nav-link active"
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
                                                        <li class=" mx-3 nav-item" role="presentation">
                                                            <button
                                                                class="nav-link"
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
                                                        <li class=" mx-3 nav-item" role="presentation">
                                                            <button
                                                                class="nav-link"
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
                                            <div class="tab-content mt-5" id="myTabContent">
                                                <div
                                                    class="tab-pane fade show active"
                                                    id="home-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="home-tab"
                                                    tabindex="0"
                                                >
                                                    home...
                                                </div>
                                                <div
                                                    class="tab-pane fade"
                                                    id="profile-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="profile-tab"
                                                    tabindex="0"
                                                >
                                                    pro...
                                                </div>
                                                <div
                                                    class="tab-pane fade"
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
