function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if(menu.classList.contains("close")){
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    menu.classList.remove("close");
    icon.classList.remove("close");
  }else{
    menu.classList.toggle("close");
    icon.classList.toggle("close");
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
}
