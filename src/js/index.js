const NavBarToggler = (function () {
    const overlay = document.getElementById("overlay");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");
    const navbarLinksContainer = document.getElementById("navbar-links-container");

    function showClasses() {
        document.body.style.overflow = "hidden";
        overlay.classList.add("show");
        hamburgerIcon.classList.add("hide");
        closeIcon.classList.add("show");
        navbarLinksContainer.classList.add("show");
    }

    function hideClasses() {
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "auto";
        overlay.classList.remove("show");
        hamburgerIcon.classList.remove("hide");
        closeIcon.classList.remove("show");
        navbarLinksContainer.classList.remove("show");
    }

    function show() {
        hamburgerIcon.addEventListener("click", showClasses);
    }

    function hide() {
        closeIcon.addEventListener("click", hideClasses);
    }

    function overlayHandler() {
        overlay.addEventListener("click", hideClasses);
    }

    return {
        open: show,
        close: hide,
        overlayClose: overlayHandler
    };
})();

NavBarToggler.open();
NavBarToggler.close();
NavBarToggler.overlayClose();