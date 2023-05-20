class MobileNavbar {
  constructor(mobileMenu, navbarList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navbarList = document.querySelector(navbarList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    });
  }

  openMenu() {
    this.navbarList.style.animation = "menuSlideDown 0.5s ease forwards";
    this.mobileMenu.classList.add(this.activeClass);
    this.navbarList.classList.add(this.activeClass);
    this.animateLinks();
  }

  closeMenu() {
    this.navbarList.style.animation = "menuSlideUp 0.5s ease forwards";
    this.animateLinks();
    this.mobileMenu.classList.remove(this.activeClass);
    setTimeout(() => {
      this.navbarList.classList.remove(this.activeClass);
    }, 500);
  }

  handleClick() {
    if (this.navbarList.classList.contains(this.activeClass)) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.closeMenu();
      });
    });
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".navbar-items",
  ".navbar-items li"
);

mobileNavbar.init();
