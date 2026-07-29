document.addEventListener("DOMContentLoaded", function(){

    const feraTopBtn = document.getElementById("feraScrollTop");
    const feraWhatsapp = document.querySelector(".fera-whatsapp-btn");

    if(!feraTopBtn) return;

    function feraToggleButtons(){

        const scrollPosition =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;

        if(scrollPosition > 100){

            feraTopBtn.classList.add("fera-show");

            if(feraWhatsapp){
                feraWhatsapp.classList.add("fera-show");
            }

        }else{

            feraTopBtn.classList.remove("fera-show");

            if(feraWhatsapp){
                feraWhatsapp.classList.remove("fera-show");
            }
        }
    }

    window.addEventListener("scroll", feraToggleButtons);

    feraToggleButtons();

    feraTopBtn.addEventListener("click", function(e){

        e.preventDefault();

        const startPosition =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;

        const duration = 500;
        const startTime = performance.now();

        function animateScroll(currentTime){

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeOutCubic =
                1 - Math.pow(1 - progress, 3);

            const newPosition =
                startPosition * (1 - easeOutCubic);

            window.scrollTo(0, newPosition);

            document.documentElement.scrollTop = newPosition;
            document.body.scrollTop = newPosition;

            if(progress < 1){
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);

    });

});


// gsap animation for the health-faucet images



gsap.utils.toArray(".helthfaucet-box").forEach((box, i) => {

    gsap.from(box, {
        opacity: 0,
        x: i % 2 === 0 ? -80 : 80,
        duration: 1.4,
        ease: "power3.out",

        scrollTrigger: {
            trigger: box,
            start: "top 90%",
            once: true
        }
    });

});






gsap.utils.toArray(".custom-project-box").forEach((box, i) => {

     gsap.from(box, {
        opacity: 0,
        x: i % 2 === 0 ? -80 : 80,
        duration: 1.4,
        ease: "power3.out",

        scrollTrigger: {
            trigger: box,
            start: "top 90%",
            once: true
        }
    });

});

