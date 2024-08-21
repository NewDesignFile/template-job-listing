const nav = document.getElementById("site-header");
const pageCTA = document.getElementById("page-cta");

var pageCTAPosition = 0;
if (pageCTA) {
  pageCTAPosition = pageCTA.getBoundingClientRect().bottom;
}

var previousScrollPosition = 0;

const handleNavScroll = () => {
  let currentScrolledPosition = window.scrollY || window.pageYOffset;

  if (isScrollingDown()) {
    nav.classList.add("scroll-down");
    nav.classList.remove("scroll-up");
  } else {
    nav.classList.add("scroll-up");
    nav.classList.remove("scroll-down");
  }

  if (currentScrolledPosition > pageCTAPosition + 50) {
    if (!nav.classList.contains('fixed')) {
      nav.classList.add("fixed");
    }
  } else {
    if (nav.classList.contains("fixed")) {
      nav.classList.remove("fixed");
    }
  }
};

function isScrollingDown() {
  let currentScrolledPosition = window.scrollY || window.pageYOffset;
  let scrollingDown;

  if (currentScrolledPosition > previousScrollPosition) {
    scrollingDown = true;
  } else {
    scrollingDown = false;
  }
  previousScrollPosition = currentScrolledPosition;
  return scrollingDown;
}

var throttleWait;

function throttle(callback, time) {
  if (throttleWait) return;

  throttleWait = true;
  setTimeout(() => {
    callback();

    throttleWait = false;
  }, time);
}

window.addEventListener("scroll", () => {
  throttle(handleNavScroll, 80);
});
