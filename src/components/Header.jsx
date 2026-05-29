const Header = () => {
    return (
        <>
            <div class="py-5 nav-container ">
                <nav class="p-3   d-flex gap-4 nav-block ">
                    <a
                        class="active text-white border-radius-div position-relative p-3"
                        href="./index.html"
                    >
                        <i class="fa-solid fa-house"></i>
                        <span class="bg-primary p-2 fw-bold border-radius-div text-white">
                            Home
                        </span>
                    </a>
                    <a
                        class=" text-white border-radius-div position-relative p-3"
                        href="../nav pages/resume.html"
                    >
                        <i class="fa-solid fa-file"></i>
                        <span class="bg-primary p-2 fw-bold border-radius-div text-white">
                            Resume
                        </span>
                    </a>
                    <a
                        class="text-white border-radius-div  position-relative p-3"
                        href="../nav pages/project.html"
                    >
                        <i class="fa-solid fa-briefcase"></i>
                        <span class="bg-primary p-2 fw-bold border-radius-div text-white">
                            Project
                        </span>
                    </a>
                    <a
                        class="text-white border-radius-div position-relative p-3"
                        href="../nav pages/feed.html"
                    >
                        <i class="fa-solid fa-bolt"></i>
                        <span class="bg-primary p-2 fw-bold border-radius-div text-white">
                            Feed
                        </span>
                    </a>
                    <a
                        class="text-white border-radius-div position-relative p-3"
                        href="../nav pages/contact.html"
                    >
                        <i class="fa-regular fa-envelope "></i>
                        <span class="bg-primary p-2 fw-bold border-radius-div text-white">
                            Contact
                        </span>
                    </a>
                </nav>
            </div>
        </>
    );
};

export default Header;
