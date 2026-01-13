const roles = [
  "Ruby on Rails Developer",
  "Full Stack Engineer",
  "Backend Specialist",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
const typingEl = document.getElementById("typing");

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 1800);
  }
}

function erase() {
  if (charIndex > 0) {
    typingEl.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 300);
  }
}

type();
