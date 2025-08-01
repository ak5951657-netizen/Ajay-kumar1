// Portfolio Projects data (Edit with your own!)
const projects = [
  {
    title: "My Linkedin Profile",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&w=400",
    description: "Some details about me on my profile",
    link: "https://www.linkedin.com/in/ajay-kumar-ab750a28a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BI0o%2FaIyDTNWOZqex5gZTzw%3D%3D"
  },
  {
    title: "E-Commerce Website",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=400",
    description: "A complete online shopping platform built with React and Node.js.",
    link: "https://your-ecommerce-demo.com"
  },
  {
    title: "Blog Platform",
    image: "https://images.pexels.com/photos/34088/pexels-photo.jpg?auto=compress&w=400",
    description: "A dynamic blog system featuring authentication and rich text editing.",
    link : "C:\Users\ASUS\OneDrive\Pictures\Screenshots\Screenshot 2025-07-31 200424.png"

  }
];

// Render Projects
const projectList = document.querySelector('.project-list');
projects.forEach((proj, i) => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <img src="${proj.image}" alt="${proj.title}">
    <h3>${proj.title}</h3>
    <p>${proj.description.slice(0, 55)}…</p>
    <button class="btn-outline" onclick="showProject(${i})">View Project</button>
  `;
  projectList.appendChild(card);
});

// Modal Logic
const modal = document.getElementById('projectModal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');
window.showProject = function(index) {
  const { title, image, description, link } = projects[index];
  modalImg.src = image;
  modalTitle.innerText = title;
  modalDesc.innerText = description;
  modalLink.href = link;
  modal.style.display = 'flex';
};
document.querySelector('.close-btn').onclick = () => modal.style.display = 'none';
window.onclick = function(e) {
  if (e.target == modal) modal.style.display = 'none';
};

// Typing Animation
const titles = [
  "Front-End Developer",
  "UI/UX Designer",
  "JavaScript Enthusiast",
  "React & Node.js Lover"
];
let i = 0, j = 0, currentTitle = '', isDeleting = false;
function typingEffect() {
  const el = document.querySelector('.typing');
  if (!el) return;
  if (!isDeleting && j <= titles[i].length) {
    currentTitle = titles[i].slice(0, j++);
    el.textContent = currentTitle;
    setTimeout(typingEffect, 70);
  } else if (isDeleting && j >= 0) {
    currentTitle = titles[i].slice(0, j--);
    el.textContent = currentTitle;
    setTimeout(typingEffect, 35);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typingEffect, 800);
    } else {
      isDeleting = false;
      i = (i + 1) % titles.length;
      setTimeout(typingEffect, 400);
    }
  }
}
typingEffect();

// Contact form (demo effect)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formStatus").textContent = "Thank you for your message!";
  this.reset();
  setTimeout(() => document.getElementById("formStatus").textContent = "", 2200);
});
