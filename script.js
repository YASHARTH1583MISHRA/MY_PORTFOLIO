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