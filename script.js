// Animated roles only (Fixed role stays)
const roles = [
  "Ruby on Rails Backend Specialist",
  "Frontend with TailwindCSS",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
const typingEl = document.getElementById("typing");

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 90); // typing speed
  } else {
    setTimeout(erase, 1800); // pause before erase
  }
}

function erase() {
  if (charIndex > 0) {
    typingEl.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60); // erasing speed
  } else {
    roleIndex = (roleIndex + 1) % roles.length; // loop
    setTimeout(type, 300);
  }
}

type();


// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});
