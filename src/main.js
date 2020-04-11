// let selectedTab = 0;
// let scrollPosition;
// let tabs = document.querySelectorAll('.navigation__tab');
//
// let container = document.querySelector('.container');
//
//
//
// function onScroll () {
//
//   let d = document.documentElement;
//   let offset = d.scrollTop + window.innerHeight;
//   let height = d.offsetHeight;
//
//   if (selectedTab >= 0) {
//     tabs[selectedTab].classList.remove('Selected');
//   }
//
//
//   for (let i = 0; i < tabs.length; i++) {
//
//     const category = container.children[i];
//
//     if ((category.offsetTop - 100) <= scrollPosition) {
//       selectedTab = i;
//     }
//   }
//
//
//   if (offset >= height) {
//     selectedTab = tabs.length - 1;
//   }
//
//   tabs[selectedTab].classList.add('Selected');
// }
//
// document.addEventListener('scroll', function (event) {
//   scrollPosition = window.scrollY;
//
//   onScroll();
// });
