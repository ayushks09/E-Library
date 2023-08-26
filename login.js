// 'use strict';

// const regP = document.querySelector('.reg');
// const lginP = document.querySelector('.lgin');
// const login = document.querySelector('.login');
// const register = document.querySelector('.register');
// const regAfter = getComputedStyle(register, '::after');
// const main = document.querySelector('.main');
// const parent = document.querySelector('.parent');
// const more = document.querySelector('.more');
// const opList = document.querySelector('.options');
// const opArr = Array.from(opList.children);
// const description = document.querySelector('.description');
// const descArr = Array.from(description.children);

// parent.onclick = function () {
//   main.classList.toggle('clicked');
//   parent.classList.toggle('clicked');
//   more.classList.toggle('clicked');
//   login.classList.toggle('hideFix');
//   register.classList.toggle('hideFix');
//   opArr.forEach((option) => {
//     option.classList.toggle('clicked');
//   });
// };

// var a = parseInt(regAfter.getPropertyValue('z-index'));

// login.style.zIndex = '2';
// register.style.zIndex = '1';

// function assign_Zindex(element1, element2, anim) {
//   setTimeout(() => {
//     element1.classList.remove(anim);
//     if (element1.style.zIndex === '1') {
//       element1.style.zIndex = '2';
//       element2.style.zIndex = '1';
//     } else {
//       element1.style.zIndex = '1';
//       element2.style.zIndex = '2';
//     }
//   }, 1000);
// }

// regP.addEventListener('click', () => {
//   login.classList.toggle('lgnAnim');
//   assign_Zindex(login, register, 'lgnAnim');
// });

// lginP.addEventListener('click', () => {
//   register.classList.toggle('regAnim');
//   assign_Zindex(register, login, 'regAnim');
// });

// function swapClass(targetIndex, cls, arr) {
//   if (targetIndex !== -1) {
//     arr.forEach((element) => {
//       if (element.classList.contains(cls)) element.classList.remove(cls);
//     });
//   }
//   arr[targetIndex].classList.add(cls);
// }

// opList.addEventListener('click', (e) => {
//   const targetIndex = opArr.indexOf(e.target.closest('li.op'));

//   if (targetIndex === -1) return;
//   swapClass(targetIndex, 'active', opArr);
//   swapClass(targetIndex, 'show', descArr);
// });
