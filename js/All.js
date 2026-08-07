
document.addEventListener("DOMContentLoaded", function () {

  // scroll top warshap button

    const feraTopBtn = document.getElementById("feraScrollTop");
    const feraWhatsapp = document.querySelector(".fera-whatsapp-btn");

    if (feraTopBtn) {

        function feraToggleButtons() {

            const scrollPosition =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;

            if (scrollPosition > 100) {

                feraTopBtn.classList.add("fera-show");

                if (feraWhatsapp) {
                    feraWhatsapp.classList.add("fera-show");
                }

            } else {

                feraTopBtn.classList.remove("fera-show");

                if (feraWhatsapp) {
                    feraWhatsapp.classList.remove("fera-show");
                }
            }
        }

        window.addEventListener("scroll", feraToggleButtons);

        feraToggleButtons();


        /* Scroll Top Click */

        feraTopBtn.addEventListener("click", function (e) {

            e.preventDefault();

            const startPosition =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;

            const duration = 500;
            const startTime = performance.now();


            function animateScroll(currentTime) {

                const elapsed = currentTime - startTime;

                const progress = Math.min(
                    elapsed / duration,
                    1
                );

                const easeOutCubic =
                    1 - Math.pow(1 - progress, 3);

                const newPosition =
                    startPosition * (1 - easeOutCubic);


                window.scrollTo(0, newPosition);

                document.documentElement.scrollTop =
                    newPosition;

                document.body.scrollTop =
                    newPosition;


                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                }
            }

            requestAnimationFrame(animateScroll);

        });
    }
});




// gsap section start product page

if (typeof gsap !== "undefined") {

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    /* Health Faucet Animation */

    const healthFaucetBoxes =
        document.querySelectorAll(".helthfaucet-box");

    if (healthFaucetBoxes.length > 0) {

        healthFaucetBoxes.forEach(function (box, i) {

            gsap.from(box, {
                opacity: 0,
                x: i % 2 === 0 ? -50 : 50,
                duration: 0.8,
                ease: "power2.out",

                scrollTrigger: {
                    trigger: box,
                    start: "top 90%",
                    once: true
                }
            });

        });
    }


    /* Custom Project Box Animation */

    const projectBoxes =
        document.querySelectorAll(".custom-project-box");

    if (projectBoxes.length > 0) {

        const mm = gsap.matchMedia();

        /* Desktop */

        mm.add("(min-width: 769px)", function () {

            projectBoxes.forEach(function (box, i) {

                gsap.from(box, {
                    opacity: 0,
                    x: i % 2 === 0 ? -50 : 50,
                    duration: 0.8,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: box,
                        start: "top 90%",
                        once: true
                    }
                });

            });

        });


        /* Mobile */

        mm.add("(max-width: 768px)", function () {

            gsap.set(projectBoxes, {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1
            });

        });

    }

}