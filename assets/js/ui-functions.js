document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-js");
    const nav = document.getElementById("HDR-NAV");
    const overlay = document.getElementById("nav-overlay");

    function openNav() {
        nav.classList.remove("-translate-x-full");
        nav.classList.add("translate-x-0");
        overlay.classList.remove("opacity-0", "pointer-events-none");
        document.body.classList.add("overflow-hidden");
    }

    function closeNav() {
        nav.classList.add("-translate-x-full");
        nav.classList.remove("translate-x-0");
        overlay.classList.add("opacity-0", "pointer-events-none");
        document.body.classList.remove("overflow-hidden");
    }

    // expose globally for ✕ button
    window.closeHeaderNav = closeNav;

    if (hamburger) hamburger.addEventListener("click", openNav);
    if (overlay) overlay.addEventListener("click", closeNav);
});





// TAB FUNCTION START HERE

document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tabs-link[data-menu-id]");
    const tabPanels = document.querySelectorAll(".tab-content");

    function activateTab(targetId) {
        // buttons active state
        tabButtons.forEach(btn => {
            btn.classList.toggle(
                "is-current",
                btn.getAttribute("data-menu-id") === targetId
            );
        });

        // panels show / hide
        tabPanels.forEach(panel => {
            panel.classList.toggle(
                "is-visible",
                "#" + panel.id === targetId
            );
        });
    }

    // click handling
    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            activateTab(this.getAttribute("data-menu-id"));
        });
    });

    /* ======================
       TAB CLOSE (BACK MENU)
    ====================== */
    window.closeTabContent = function () {
        // hide all panels
        tabPanels.forEach(panel => {
            panel.classList.remove("is-visible");
        });

        // remove active state from buttons
        tabButtons.forEach(btn => {
            btn.classList.remove("is-current");
        });
    };

    // optional default
    if (window.matchMedia("(min-width: 1280px)").matches) {
        activateTab("#productsTab");
    }
});


// DROPDOWN FUNCTION START HERE
document.addEventListener("DOMContentLoaded", function () {
    const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener("click", function (e) {
            // only below 1280px
            if (window.innerWidth >= 1280) return;

            e.preventDefault();

            const parentItem = this.closest(".has-children");
            const submenu = parentItem.querySelector(".mega-submenu");

            // close all others
            document.querySelectorAll(".mega-submenu.is-visible").forEach(menu => {
                if (menu !== submenu) {
                    menu.classList.remove("is-visible");
                }
            });

            document.querySelectorAll(".dropdown-trigger.is-open").forEach(btn => {
                if (btn !== this) {
                    btn.classList.remove("is-open");
                }
            });

            // toggle current
            submenu.classList.toggle("is-visible");
            this.classList.toggle("is-open");
        });
    });
});

// SLIDER START
$(document).ready(function () {
    $('.js--hero-slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: `
        <button class="hero-slider-arrow absolute left-8 top-1/2 -translate-y-1/2">
          <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M9.6 0.599976L0.599998 9.59998L9.6 18.6" stroke="currentColor" stroke-width="1.2" />
          </svg>
        </button>`,
        nextArrow: `
        <button class="hero-slider-arrow absolute right-8 top-1/2 -translate-y-1/2">
          <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M0.599976 18.6L9.59998 9.59998L0.599977 0.599975" stroke="currentColor" stroke-width="1.2"/>
          </svg>
        </button>`,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });
});