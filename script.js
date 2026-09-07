

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       SCROLL / LOAD REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });



    /* =========================
       HERO IMAGE PARALLAX
    ========================= */

    const heroSection =
        document.querySelector(".hero-section");

    const heroImage =
        document.getElementById("heroImage");


    if (heroSection && heroImage) {

        heroSection.addEventListener(
            "mousemove",
            function (event) {

                /* Mobile par effect nahi */
                if (window.innerWidth < 768) return;


                const rect =
                    heroSection.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left) /
                    rect.width - 0.5;


                const y =
                    (event.clientY - rect.top) /
                    rect.height - 0.5;


                heroImage.style.transform =
                    `translate(${x * 18}px, ${y * 12}px)`;

            }
        );


        heroSection.addEventListener(
            "mouseleave",
            function () {

                heroImage.style.transform =
                    "translate(0, 0)";

            }
        );

    }



    /* =========================
       MAGNETIC VIEW WORK BUTTON
    ========================= */

    const magneticButton =
        document.querySelector(".magnetic-btn");


    if (magneticButton) {

        magneticButton.addEventListener(
            "mousemove",
            function (event) {

                if (window.innerWidth < 768) return;


                const rect =
                    magneticButton.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                magneticButton.style.transform =
                    `translate(${x * 0.18}px,
                               ${y * 0.18}px)`;

            }
        );


        magneticButton.addEventListener(
            "mouseleave",
            function () {

                magneticButton.style.transform =
                    "translate(0, 0)";

            }
        );

    }

});


/*==================================*/
document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       SERVICE CARDS
    ===================================== */

    const cards =
        document.querySelectorAll(".service-card");


    cards.forEach(function (card) {


        /* ================================
           MOUSE MOVE
        ================================ */

        card.addEventListener("mousemove", function (e) {

            const rect =
                card.getBoundingClientRect();


            const x =
                e.clientX - rect.left;


            const y =
                e.clientY - rect.top;


            card.style.setProperty(
                "--mouse-x",
                x + "px"
            );


            card.style.setProperty(
                "--mouse-y",
                y + "px"
            );


            /* Slight 3D Effect */

            const rotateX =
                ((y / rect.height) - 0.5) * -4;


            const rotateY =
                ((x / rect.width) - 0.5) * 4;


            card.style.transform =
                `translateY(-8px)
                 perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
        });


        /* ================================
           MOUSE LEAVE
        ================================ */

        card.addEventListener("mouseleave", function () {

            card.style.setProperty(
                "--mouse-x",
                "50%"
            );


            card.style.setProperty(
                "--mouse-y",
                "50%"
            );


            card.style.transform =
                "translateY(0) rotateX(0) rotateY(0)";
        });

    });



    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    cards.forEach(function (card, index) {

        card.style.transitionDelay =
            `${index * 0.12}s`;

        observer.observe(card);

    });



    /* =====================================
       BUTTON MAGNETIC EFFECT
    ===================================== */

    const button =
        document.querySelector(".button");


    if (button) {

        button.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    e.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    e.clientY -
                    rect.top -
                    rect.height / 2;


                button.style.transform =
                    `translate(
                        ${x * 0.15}px,
                        ${y * 0.15}px
                    )`;

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                button.style.transform =
                    "translate(0, 0)";

            }
        );

    }

});




/*====================================================Creative UI UX start= ===============================================*/ 

    document.addEventListener("DOMContentLoaded", function () {


    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });



    /* ==========================================
       MOUSE PARALLAX IMAGE
    ========================================== */

    const section =
        document.querySelector(".about-section");

    const image =
        document.getElementById("aboutPerson");


    if (section && image) {

        section.addEventListener(
            "mousemove",
            function (e) {

                /* Mobile पर effect बंद */

                if (window.innerWidth < 768) {
                    return;
                }


                const rect =
                    section.getBoundingClientRect();


                const x =
                    (e.clientX - rect.left)
                    / rect.width
                    - 0.5;


                const y =
                    (e.clientY - rect.top)
                    / rect.height
                    - 0.5;


                const moveX =
                    x * 18;


                const moveY =
                    y * 10;


                image.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;

            }
        );


        section.addEventListener(
            "mouseleave",
            function () {

                image.style.transform =
                    "translate(0, 0)";

            }
        );

    }



    /* ==========================================
       COUNTER
    ========================================== */

    const counter =
        document.querySelector(".stat-number");


    let counterStarted = false;


    function startCounter() {

        if (counterStarted || !counter) {
            return;
        }


        counterStarted = true;


        const target =
            Number(
                counter.getAttribute("data-target")
            );


        let current = 0;


        const duration = 1800;

        const increment =
            target / (duration / 16);


        const timer =
            setInterval(function () {

                current += increment;


                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }


                if (current >= 1000) {

                    counter.innerText =
                        Math.floor(current / 1000) + "K";

                } else {

                    counter.innerText =
                        Math.floor(current);

                }

            }, 16);

    }


    /* Counter visible होने पर start */

    const counterObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        startCounter();

                        counterObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.5
            }
        );


    if (counter) {

        counterObserver.observe(counter);

    }


});



/* ===================================
   CUSTOM CURSOR
=================================== */

const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

let mouseX = 0;
let mouseY = 0;

let circleX = 0;
let circleY = 0;


document.addEventListener("mousemove", (e) => {

  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorDot.style.left = mouseX + "px";
  cursorDot.style.top = mouseY + "px";

});


function animateCursor() {

  circleX += (mouseX - circleX) * 0.15;
  circleY += (mouseY - circleY) * 0.15;

  cursorCircle.style.left = circleX + "px";
  cursorCircle.style.top = circleY + "px";

  requestAnimationFrame(animateCursor);

}

animateCursor();



/* ===================================
   CURSOR HOVER EFFECT
=================================== */

const hoverItems = document.querySelectorAll(".cursor-hover");

hoverItems.forEach((item) => {

  item.addEventListener("mouseenter", () => {

    document.body.classList.add("cursor-active");

  });


  item.addEventListener("mouseleave", () => {

    document.body.classList.remove("cursor-active");

  });

});



/* ===================================
   MOUSE SPOTLIGHT
=================================== */

const projectImages = document.querySelectorAll(".project-image");

projectImages.forEach((image) => {

  image.addEventListener("mousemove", (e) => {

    const rect = image.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    image.style.setProperty("--mouse-x", `${xPercent}%`);
    image.style.setProperty("--mouse-y", `${yPercent}%`);

  });

});



/* ===================================
   3D TILT EFFECT
=================================== */

projectImages.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    if (window.innerWidth <= 768) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;

    card.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale(0.99)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

  });

});



/* ===================================
   SCROLL REVEAL
=================================== */

const projects = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.15
  }

);


projects.forEach((project, index) => {

  project.style.transitionDelay = `${index * 0.12}s`;

  observer.observe(project);

});



document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     COUNTER ANIMATION
  ========================================= */

  const counters =
    document.querySelectorAll(".counter");


  counters.forEach(function (counter) {

    const target =
      parseInt(counter.getAttribute("data-target"));

    let current = 0;

    const duration = 1500;

    const increment =
      target / (duration / 16);


    function updateCounter() {

      current += increment;


      if (current < target) {

        counter.textContent =
          Math.floor(current);

        requestAnimationFrame(updateCounter);

      } else {

        counter.textContent = target;

      }

    }


    updateCounter();

  });


  /* =========================================
     STAT CARD 3D HOVER
  ========================================= */

  const statCards =
    document.querySelectorAll(".stat-card");


  statCards.forEach(function (card) {

    card.addEventListener("mousemove", function (e) {

      if (window.innerWidth <= 767) return;


      const rect =
        card.getBoundingClientRect();


      const x =
        e.clientX - rect.left;


      const y =
        e.clientY - rect.top;


      const centerX =
        rect.width / 2;


      const centerY =
        rect.height / 2;


      const rotateX =
        ((y - centerY) / centerY) * -3;


      const rotateY =
        ((x - centerX) / centerX) * 3;


      card.style.transform =
        `perspective(700px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-5px)`;

    });


    card.addEventListener("mouseleave", function () {

      card.style.transform = "";

    });

  });


  /* =========================================
     SKILL CARD 3D HOVER
  ========================================= */

  const skillCards =
    document.querySelectorAll(".skill-card");


  skillCards.forEach(function (card) {

    card.addEventListener("mousemove", function (e) {

      if (window.innerWidth <= 767) return;


      const rect =
        card.getBoundingClientRect();


      const x =
        e.clientX - rect.left;


      const y =
        e.clientY - rect.top;


      const centerX =
        rect.width / 2;


      const centerY =
        rect.height / 2;


      const rotateX =
        ((y - centerY) / centerY) * -5;


      const rotateY =
        ((x - centerX) / centerX) * 5;


      card.style.transform =
        `perspective(700px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-7px)
         scale(1.03)`;

    });


    card.addEventListener("mouseleave", function () {

      card.style.transform = "";

    });

  });

}); 






        const toolsBtn = document.getElementById("toolsBtn");
        const skillsBtn = document.getElementById("skillsBtn");
        const toolsSection = document.getElementById("toolsSection");
        const skillsSection = document.getElementById("skillsSection");

        toolsBtn.onclick = e => {
            e.preventDefault();
            toolsSection.style.display = "grid";
            skillsSection.style.display = "none";
            toolsBtn.classList.add("active");
            skillsBtn.classList.remove("active");
        };

        skillsBtn.onclick = e => {
            e.preventDefault();
            toolsSection.style.display = "none";
            skillsSection.style.display = "grid";
            skillsBtn.classList.add("active");
            toolsBtn.classList.remove("active");
        };

        const boxes = document.querySelectorAll(".photoshop");
        boxes.forEach(box => {
            box.addEventListener("mouseenter", () => {
                boxes.forEach(b => b.classList.remove("active"));
                box.classList.add("active");
            });
        });


        const educationBoxes = document.querySelectorAll(".education-box");
        educationBoxes.forEach(box => {
            box.addEventListener("mouseenter", () => {
                educationBoxes.forEach(b => b.classList.remove("active"));
                box.classList.add("active");
            });
        });

        const oneservice = document.querySelectorAll(".one-service");
        oneservice.forEach(box => {
            box.addEventListener("mouseenter", () => {
                oneservice.forEach(b => b.classList.remove("active"));
                box.classList.add("active");
            });
        });



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   CARD MOUSE GLOW EFFECT
========================================= */

const educationCards = document.querySelectorAll(".education-card");


educationCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);

        card.style.setProperty("--mouse-y", `${y}px`);

    });

});


/* =========================================
   FOOTER YEAR
========================================= */

const footerYear = document.getElementById("footerYear");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}


/* =========================================
   BACK TO TOP
========================================= */

const backTop = document.getElementById("backTop");

if (backTop) {

    backTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   CTA MOUSE MOVEMENT
========================================= */

const footer = document.querySelector(".creative-footer");

if (footer) {

    footer.addEventListener("mousemove", (e) => {

        const rect = footer.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        footer.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        footer.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

}


/* =========================================
   FOOTER REVEAL
========================================= */

const footerElements = document.querySelectorAll(
    ".footer-cta, .footer-main, .footer-bottom"
);

const footerObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("footer-visible");

                footerObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


footerElements.forEach((element) => {

    element.classList.add("footer-hidden");

    footerObserver.observe(element);

});

/*data*/
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const formData = document.getElementById("formData");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Success message show
    successMessage.classList.add("show");

    // Data print
    formData.innerHTML = `
        <div class="submitted-data">

            <h3>Your Submitted Details</h3>

            <p>
                <strong>Name:</strong> ${name}
            </p>

            <p>
                <strong>Email:</strong> ${email}
            </p>

            <p>
                <strong>Message:</strong> ${message}
            </p>

        </div>
    `;

    // Console me bhi print hoga
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

}); 

 

document.getElementById("downloadCV").addEventListener("click", function (e) {
    e.preventDefault();

    const link = document.createElement("a");

    link.href = "./images/RESUME.pdf";
    link.download = "Nitin_Kumar_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
   