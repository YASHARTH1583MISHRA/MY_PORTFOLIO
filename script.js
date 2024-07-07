document.addEventListener("DOMContentLoaded", function () {
    const globalMenuButton = document.getElementById("global_menu_button");
    const globalMenuItems = document.getElementById("global_menu_items");
    const globalMenuCloseButton = document.getElementById("global_menu_close_button");

    const sidebarMenuIcon = document.getElementById("sidebar_menu_icon");
    const sidebarNavigation = document.getElementById("sidebar_navigation");

    globalMenuButton.addEventListener("click", function () {
        globalMenuItems.classList.toggle("show");
    });

    globalMenuCloseButton.addEventListener("click", function () {
        globalMenuItems.classList.remove("show");
    });

    sidebarMenuIcon.addEventListener("click", function () {
        sidebarNavigation.classList.toggle("show");
    });
});
// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
