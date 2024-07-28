document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".hello", { 
        duration: 1, 
        opacity: 1, 
        y: 0, 
        ease: "bounce.out" 
    });
});
