// ================================
// AOS Animation
// ================================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});

// ================================
// Mobile Navigation
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("showMenu");
});

// ================================
// Sticky Navbar Shadow
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";

    }

});

// ================================
// Counter Animation
// ================================

const counters = document.querySelectorAll(".counter");

const speed = 200;

const startCounter = () => {

    counters.forEach(counter => {

        const updateCount = () => {

            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (count < target) {

                counter.innerText = count + increment;

                setTimeout(updateCount, 15);

            } else {

                counter.innerText = target;

            }

        };

        updateCount();

    });

};

const statsSection = document.querySelector(".stats");

let counterStarted = false;

window.addEventListener("scroll", () => {

    const sectionTop = statsSection.offsetTop - 400;

    if (!counterStarted && window.scrollY > sectionTop) {

        startCounter();

        counterStarted = true;

    }

});


// ===============================
// SOS BUTTON
// ===============================

const sosButton = document.getElementById("sosButton");

const countdown = document.getElementById("countdown");

const status = document.getElementById("status");

sosButton.addEventListener("click", startSOS);

function startSOS(){

    let time = 5;

    countdown.innerHTML = time;

    status.innerHTML = "Emergency Alert Starting...";

    sosButton.disabled = true;

    const timer = setInterval(()=>{

        time--;

        countdown.innerHTML = time;

        if(time <= 0){

            clearInterval(timer);

            countdown.innerHTML="";

            sendSOS();

        }

    },1000);

}

function sendSOS(){

    status.innerHTML = "🚨 SOS Alert Sent Successfully!";

    sosButton.style.background = "#00C853";

    sosButton.innerHTML = "✓";

    alert("Emergency Alert Sent!");

}

// ================================
// Dark Mode
// ================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});

// Load Theme

window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeBtn.querySelector("i").classList.remove("fa-moon");

        themeBtn.querySelector("i").classList.add("fa-sun");

    }

});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ================================
// Hero Button Hover Effect
// ================================

const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});

// ================================
// Feature Card Hover Animation
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// ================================
// Contact Form
// ================================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});

// ================================
// Back To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#6C63FF";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
topBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ================================
// Navbar Active Link
// ================================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ================================
// Floating Hero Image
// ================================

const heroImage = document.querySelector(".hero-right img");

let float = 0;

setInterval(() => {

    float += 0.05;

    heroImage.style.transform = `translateY(${Math.sin(float) * 10}px)`;

},20);

// ================================
// Console Welcome
// ================================

console.log("======================================");
console.log(" SafeHer");
console.log(" Women's Safety & Emergency System");
console.log(" Developed using HTML CSS JavaScript");
console.log("======================================");