// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// const NavAnimation = ({ isOpen }) => {
//   useGSAP(() => {
//     const tl = gsap.timeline();

//     tl.from(".navbar-logo", {
//       opacity: 0,
//       y: 30,
//       duration: 0.7,
//     });

//     tl.from(".navbar-items li", {
//       opacity: 0,
//       duration: 1,
//       stagger: 0.1,
//     });
//   });

//   useGSAP(() => {
//     if (isOpen) {
//       const tl = gsap.timeline();

//       tl.from(".sidebar-logo", {
//         opacity: 0,
//         y: 30,
//         duration: 0.7,
//       });

//       tl.from(".animate-link", {
//         opacity: 0,
//         x: -40,
//         duration: 0.5,
//         stagger: 0.1,
//       });
//     }
//   }, [isOpen]);
// };

// export default NavAnimation;
