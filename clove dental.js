document.addEventListener("DOMContentLoaded", function() {
    // Accordion functionality
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.parentElement.nextElementSibling;
            content.classList.toggle("active");
        });
    });

    // FAQ functionality
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            this.classList.toggle("active");
            const answer = this.nextElementSibling;
            answer.classList.toggle("active");
        });
    });

    // Form submission
    const appointmentForms = document.querySelectorAll(".appointment-form, .consultation-form");

    appointmentForms.forEach(form => {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const nameInput = this.querySelector("input[placeholder='Name']");
            const phoneInput = this.querySelector("input[placeholder='Mobile Number'], input[placeholder='Phone']");
            const captchaInput = this.querySelector("input[placeholder='Captcha']");
            const termsCheckbox = this.querySelector("input[type='checkbox']");

            let isValid = true;

            if (!nameInput.value.trim()) {
                alert("Please enter your name");
                isValid = false;
            } else if (!phoneInput.value.trim()) {
                alert("Please enter your phone number");
                isValid = false;
            } else if (!captchaInput.value.trim()) {
                alert("Please enter the captcha code");
                isValid = false;
            } else if (captchaInput.value.trim() !== "1514") {
                alert("Incorrect captcha code");
                isValid = false;
            } else if (!termsCheckbox.checked) {
                alert("Please agree to the terms and conditions");
                isValid = false;
            }

            if (isValid) {
                alert("Thank you! Your appointment request has been submitted. We will contact you shortly.");
                this.reset();
            }
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("a[href^='#']");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            e.preventDefault();

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add animation to stats section
    const statsContainer = document.querySelector(".stats-container");

    if (statsContainer) {
        const statItems = document.querySelectorAll(".stat-item");
        const clonedItems = Array.from(statItems).map(item => item.cloneNode(true));

        clonedItems.forEach(item => {
            statsContainer.appendChild(item);
        });
    }

    // Add hover effect to buttons
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });

        button.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });
});