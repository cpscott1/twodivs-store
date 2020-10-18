const mobileMenuTL = gsap.timeline({
  paused: true
});
mobileMenuTL
.fromTo(
  '#mobile-menu',
  {
    x: "-100%"
  },
  {
    x: 0,
    duration: .8
  }
)
.fromTo(
  '#mobile-menu .menu .link',
  {
    y: 50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: .6,
    stagger: .2
  }
)

const openMobileMenu = document.querySelector(".open-mobile-menu")
openMobileMenu.addEventListener("click", () => {
  mobileMenuTL.play();
})

const closeMobileMenu = document.querySelector(".close-mobile-menu")
closeMobileMenu.addEventListener("click", () => {
  mobileMenuTL.reverse();
})

const mobileModeOn = () => {
  if (window.innerWidth <= 991) {
    document.querySelector("header .menu").classList.add('mobile');
  } else {
    document.querySelector("header .menu").classList.remove('mobile');
  }
}

mobileModeOn()
window.addEventListener("resize", function (event) {
  mobileModeOn()
})
