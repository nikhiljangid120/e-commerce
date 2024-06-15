var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

function toggleMenu() {
    const navUl = document.getElementById('nav-ul');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    navUl.classList.toggle('show');
    menuIcon.classList.toggle('hide');
    closeIcon.classList.toggle('show');
}
let copyrightElem = document.getElementById('copyright-text');
let currentYear = new Date().getFullYear()
let fullText = `Copyright ${currentYear} - NJ Store`;
copyrightElem.innerText = fullText;