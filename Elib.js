// 'use strict';

// const scrlToTopBtn = document.querySelector('.scrollToTop');
// const viewAllBtn = document.querySelector('.viewAll');
// const bsCarousel = document.querySelector('.bestselling_carousel');
// const left_btn = document.querySelector('.left_btn');
// const right_btn = document.querySelector('.right_btn');
// const track = document.querySelector('.carousel_track');
// const slides = Array.from(track.children);
// const shelves = Array.from(bsCarousel.children);
// const slide_width = slides[0].getBoundingClientRect().width;
// const box = Array.from(shelves[0].children);
// const boxWidth = box[0].getBoundingClientRect().width;
// const navBtnLeft = document.querySelector('.left');
// const navBtnRight = document.querySelector('.right');
// const shelfHeight = shelves[0].getBoundingClientRect().height;
// const gap =
//   box[1].getBoundingClientRect().x -
//   box[0].getBoundingClientRect().x -
//   boxWidth;
// const featuredBooks = document.querySelector('.featured_books_grid');
// const featuredBooksGenre = Array.from(featuredBooks.children);
// const genreBtnNav = document.querySelector('.genre_btn_nav');
// const genreBtns = Array.from(genreBtnNav.children);

// console.log(featuredBooks.children[0].children);

// var moveAmt = parseInt(boxWidth) + gap;
// var f = 1;
// const offset = moveAmt;

// function swapClass(currentIndex, targetIndex) {
//   if (featuredBooksGenre[currentIndex].classList.contains('active')) {
//     featuredBooksGenre[currentIndex].classList.remove('active');
//     featuredBooksGenre[currentIndex].classList.add('inactive');
//     featuredBooksGenre[targetIndex].classList.remove('inactive');
//     featuredBooksGenre[targetIndex].classList.add('active');
//   } else if (featuredBooksGenre[targetIndex].classList.contains('active')) {
//     featuredBooksGenre[targetIndex].classList.remove('active');
//     featuredBooksGenre[targetIndex].classList.add('inactive');
//     featuredBooksGenre[currentIndex].classList.remove('inactive');
//     featuredBooksGenre[currentIndex].classList.add('active');
//   }
// }

// function setCurrentBtn(currentBtn, targetBtn) {
//   if (!targetBtn.classList.contains('currentBtn')) {
//     targetBtn.classList.add('currentBtn');
//     currentBtn.classList.remove('currentBtn');
//   } else return;
// }

// genreBtnNav.addEventListener('click', (e) => {
//   const targetBtn = e.target.closest('button');
//   const targetBtnIndex = genreBtns.indexOf(targetBtn);
//   const currentBtn = genreBtnNav.querySelector('.currentBtn');
//   const currentBtnIndex = genreBtns.indexOf(currentBtn);

//   setCurrentBtn(currentBtn, targetBtn);
//   swapClass(currentBtnIndex, targetBtnIndex);
// });

// const setShelvesPosition = shelves.forEach((shelf, index) => {
//   shelf.style.top += shelfHeight * index + 'px';
// });

// const setSlidePosition = slides.forEach((slide, index) => {
//   slide.style.left += slide_width * index + 'px';
// });

// const hideShowBtn = (targetIndex) => {
//   if (targetIndex === 0) {
//     left_btn.classList.add('isHidden');
//     right_btn.classList.remove('isHidden');
//   } else if (targetIndex === slides.length - 1) {
//     right_btn.classList.add('isHidden');
//     left_btn.classList.remove('isHidden');
//   } else {
//     left_btn.classList.remove('isHidden');
//     right_btn.classList.remove('isHidden');
//   }
// };

// const moveToSlide = (track, currentSlide, targetSlide) => {
//   track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//   currentSlide.classList.remove('current_slide');
//   targetSlide.classList.add('current_slide');
// };

// right_btn.addEventListener('click', (e) => {
//   const currentSlide = track.querySelector('.current_slide');
//   const nextSlide = currentSlide.nextElementSibling;
//   const nextIndex = slides.indexOf(nextSlide); //slides.findIndex(slide =>  slide === nextSlide);

//   moveToSlide(track, currentSlide, nextSlide);
//   hideShowBtn(nextIndex);
// });

// left_btn.addEventListener('click', (e) => {
//   const currentSlide = track.querySelector('.current_slide');
//   const prevSlide = currentSlide.previousElementSibling;
//   const prevIndex = slides.indexOf(prevSlide); //slides.findIndex(slide =>  slide === prevSlide);

//   moveToSlide(track, currentSlide, prevSlide);
//   hideShowBtn(prevIndex);
// });

// const displayShelves = (shelf, index) => {
//   if (shelf.classList.contains('hidden')) shelf.classList.remove('hidden');
//   else if (index !== 0) shelf.classList.add('hidden');
// };

// viewAllBtn.addEventListener('click', (e) => {
//   if (viewAllBtn.innerHTML === 'View All') viewAllBtn.innerHTML = 'View Less';
//   else viewAllBtn.innerHTML = 'View All';
//   bsCarousel.classList.toggle('incHeight');
//   shelves.forEach(displayShelves);
// });

// navBtnLeft.addEventListener('click', (e) => {
//   if (
//     bsCarousel.getBoundingClientRect().x -
//       shelves[0].getBoundingClientRect().x <=
//     862.25
//   ) {
//     if (f) {
//       shelves[0].style.transform = 'translateX(-' + moveAmt + 'px' + ')';
//       moveAmt -= 2 * offset;
//       f--;
//       console.log(
//         bsCarousel.getBoundingClientRect().x -
//           shelves[0].getBoundingClientRect().x
//       );
//     } else {
//       moveAmt -= offset;
//       shelves[0].style.transform = 'translateX(' + moveAmt + 'px' + ')';
//       console.log(
//         bsCarousel.getBoundingClientRect().x -
//           shelves[0].getBoundingClientRect().x
//       );
//     }
//   }
// });

// navBtnRight.addEventListener('click', (e) => {
//   if (
//     bsCarousel.getBoundingClientRect().x -
//       shelves[0].getBoundingClientRect().x >
//     0
//   ) {
//     if (f) {
//       shelves[0].style.transform = 'translateX(' + moveAmt + 'px' + ')';
//       f--;
//       console.log(
//         bsCarousel.getBoundingClientRect().x -
//           shelves[0].getBoundingClientRect().x
//       );
//     } else {
//       moveAmt += offset;
//       shelves[0].style.transform = 'translateX(' + moveAmt + 'px' + ')';
//       console.log(
//         bsCarousel.getBoundingClientRect().x -
//           shelves[0].getBoundingClientRect().x
//       );
//     }
//   }
// });

// //for shelf1
// for (let j = 0; j < bsCarousel.children[0].children.length; j++) {
//   bsCarousel.children[0].children[
//     j
//   ].style = `background-image: url(Images/t1/${j}.png); background-position: center; background-size: cover;`;
// }

// //for shelf2
// for (let j = 0; j < bsCarousel.children[1].children.length; j++) {
//   bsCarousel.children[1].children[
//     j
//   ].style = `background-image: url(Images/t2/${j}.png); background-position: center; background-size: cover;`;
// }

// //for shelf3
// for (let j = 0; j < bsCarousel.children[2].children.length; j++) {
//   bsCarousel.children[2].children[
//     j
//   ].style = `background-image: url(Images/t3/${j}.png); background-position: center; background-size: cover;`;
// }

// scrlToTopBtn.addEventListener('click', (e) => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth',
//   });
// });

// window.addEventListener('scroll', function () {
//   if (window.scrollY == 0) {
//     scrlToTopBtn.style = 'visibility: hidden';
//   } else scrlToTopBtn.style = 'visibility: visible';
// });

// for (let j = 0; j < featuredBooks.children[0].children.length; j++) {
//   featuredBooks.children[0].children[
//     j
//   ].style = `background-image: url(Images/t4/${j}.png); background-position: center; background-size: cover;`;
// }

// for (let j = 0; j < featuredBooks.children[1].children.length; j++) {
//   featuredBooks.children[1].children[
//     j
//   ].style = `background-image: url(Images/t3/${j}.png); background-position: center; background-size: cover;`;
// }

// for (let j = 0; j < featuredBooks.children[2].children.length; j++) {
//   featuredBooks.children[2].children[
//     j
//   ].style = `background-image: url(Images/t2/${j}.png); background-position: center; background-size: cover;`;
// }

// for (let j = 0; j < featuredBooks.children[3].children.length; j++) {
//   featuredBooks.children[3].children[
//     j
//   ].style = `background-image: url(Images/t1/${j}.png); background-position: center; background-size: cover;`;
// }

// for (let j = 0; j < featuredBooks.children[4].children.length; j++) {
//   featuredBooks.children[4].children[
//     j
//   ].style = `background-image: url(Images/t5/${j}.png); background-position: center; background-size: cover;`;
// }
