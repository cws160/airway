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


//Start of Common Tab
var _tab = $('.js-tabs');
_tab.each(function () {
    var _thisTab = $(this),
        _tabTrigger = _thisTab.find('a'),
        _tabTarget = [];
    _tabTrigger.each(function () {
        var _this = $(this),
            _target = $(_this.attr('href'));

        _tabTarget.push(_target);

        _this.on('click', function (e) {
            var _index = _this.parent().index(),
                _move = 0;
            e.preventDefault();

            for (var i = 0; i < _index; i++) { _move += $(_tabTrigger[i]).outerWidth(); }

            _tabTrigger.removeClass('is-current');

            $.each(_tabTarget, function (index, _thisTarget) {
                _thisTarget.removeClass('is-visible');
            });

            _this.addClass('is-current');
            _target.addClass('is-visible');
            _thisTab.animate({
                scrollLeft: Math.max(0, _move)
            }, 800);

        });
    });
});

//End of Common Tab