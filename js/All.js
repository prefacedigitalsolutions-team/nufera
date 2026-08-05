
document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       SCROLL TOP + WHATSAPP BUTTON
    ========================================= */

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


    /* =========================================
       GSAP ANIMATION
    ========================================= */

    // Check GSAP
    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    /* Register ScrollTrigger only if available */

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* =========================================
       HEALTH FAUCET ANIMATION
    ========================================= */

    const healthFaucetBoxes =
        document.querySelectorAll(".helthfaucet-box");


    if (
        healthFaucetBoxes.length > 0 &&
        typeof ScrollTrigger !== "undefined"
    ) {

        healthFaucetBoxes.forEach(function (box, i) {

            gsap.from(box, {

                opacity: 0,

                x: i % 2 === 0
                    ? -80
                    : 80,

                duration: 1.4,

                ease: "power3.out",

                scrollTrigger: {

                    trigger: box,

                    start: "top 90%",

                    once: true
                }
            });

        });
    }


    /* =========================================
       CUSTOM PROJECT BOX ANIMATION
    ========================================= */

    const projectBoxes =
        document.querySelectorAll(".custom-project-box");


    if (
        projectBoxes.length > 0 &&
        typeof ScrollTrigger !== "undefined"
    ) {

        projectBoxes.forEach(function (box, i) {

            gsap.from(box, {

                opacity: 0,

                x: i % 2 === 0
                    ? -80
                    : 80,

                duration: 1.4,

                ease: "power3.out",

                scrollTrigger: {

                    trigger: box,

                    start: "top 90%",

                    once: true
                }
            });

        });
    }

});
