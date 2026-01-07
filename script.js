const projects = [
  // Web
  {
    title: "Task Master – Application de gestion de tâches",
    img: "imageprojet/task-master.png",
    desc: "Application web de gestion de tâches (CRUD) développée avec React pour le frontend et Node.js / Express pour le backend. Le backend est déployé sur Render et le frontend sur Vercel.",
    link: "https://task-master-phi-pied.vercel.app/",
    category: "Web"
  },
  {
    title: "Chiligram",
    img: "imageprojet/chiligram.gif",
    desc: "Site HTML/CSS/PHP avec un peu de Javascript asynchrone.",
    link: "https://soumaia-chiligrame.projets.garage404.com/",
    category: "Web"
  },
  {
    title: "Random Rumble",
    img: "imageprojet/rundom.avif",
    desc: "Petit jeu interactif développé avec React.",
    link: "https://github.com/soumaiaa/random-rumble-react.git",
    category: "Web"
  },
  {
    title: "Site d'agence de voyage",
    img: "imageprojet/Tour_Operateur.gif",
    desc: "Site PHP/MySQL pour une agence de voyage, avec formulaire dynamique et pages multiples.",
    link: "https://soumaia-voyage.projets.garage404.com/index.php",
    category: "Web"
  },
  {
    title: "The Mountain",
    img: "imageprojet/montagne.gif",
    desc: "Exercice HTML/CSS avec animation simple, typographie et design épuré.",
    link: "https://soumaia-the-mountain.projets.garage404.com/",
    category: "Web"
  },
  {
    title: "Combat",
    img: "imageprojet/combat.gif",
    desc: "Petit jeu de combat avec PHP (POO).",
    link: "https://soumaia-combat.projets.garage404.com/",
    category: "Web"
  },
  {
    title: "One Million Lines",
    img: "imageprojet/onemillion.gif",
    desc: "Reproduction d'une maquette avec Bootstrap 5.",
    link: "https://onemillionlinesoumaia.netlify.app/",
    category: "Web"
  },
  {
    title: "Yellow",
    img: "imageprojet/jaune jaune.gif",
    desc: "Reproduction d'une maquette avec SASS.",
    link: "https://soumaia-yellow.projets.garage404.com/",
    category: "Web"
  },
  {
    title: "Yo! Application",
    img: "imageprojet/yoo.png",
    desc: "Reproduction d'une maquette en CSS et HTML.",
    link: "https://yooyo-soumaia.netlify.app/",
    category: "Web"
  },
  {
    title: "Zoo",
    img: "imageprojet/zoo.gif",
    desc: "Projet avec classes PHP et héritage.",
    link: "https://soumaia-zoo.projets.garage404.com/pages/",
    category: "Web"
  },
  {
    title: "Drum Pad",
    img: "imageprojet/drumppad.gif",
    desc: "Clavier numérique avec JavaScript.",
    link: "https://soumaia-drump.projets.garage404.com/",
    category: "Web"
  },
  {
    title: "Luxury Services",
    img: "imageprojet/luxury.png",
    desc: "Site de recrutement avec base clients sous Symfony.",
    link: "https://soumaia-luxury-services.projets.garage404.com/",
    category: "Web"
  },
  {
    title: "Battle Office",
    img: "imageprojet/battles.gif",
    desc: "Landing Page E-Commerce simplifié, connecté à API, Symfony.",
    link: "https://soumaia-battle-office.projets.garage404.com/",
    category: "Web"
  },

  // Mobile
  {
    title: "Calculator App",
    img: "imageprojet/calculatrice.webp",
    desc: "Application calculatrice développée en Flutter, intégrant des fonctionnalités classiques avec une interface moderne.",
    link: "https://github.com/soumaiaa/calculator_App.git",
    category: "Mobile"
  },
  {
    title: "Jeu d'image",
    img: "imageprojet/jeu.jpg",
    desc: "Jeu mobile pour retrouver trois images identiques pour gagner. Développé avec Flutter.",
    link: "https://github.com/soumaiaa/jeu-d-image.git",
    category: "Mobile"
  },

  // WordPress
  {
    title: "Site WordPress - Demain Selfcare",
    img: "imageprojet/demain.jpeg",
    desc: "Site professionnel réalisé pour une cliente avec WordPress et Divi.",
    link: "https://demainselfcare.fr/",
    category: "WordPress"
  },
  {
    title: "Site Festival Culturel",
    img: "imageprojet/music.gif",
    desc: "Projet réalisé pour promouvoir un festival, développé sous WordPress avec Elementor.",
    link: "https://negar-soumaia-festival.projets.garage404.com/",
    category: "WordPress"
  },

  // Autres
  {
    title: "TP ALPINE",
    img: "imageprojet/tpalpine.png",
    desc: "Application React pour simuler la gestion d’un garage automobile, créée dans le cadre de ma formation.",
    link: "https://alpinesoumaia.netlify.app/",
    category: "Autres"
  },
  {
    title: "Jeu Philosophique🧠",
    img: "imageprojet/jeuphilos.png",
    desc: "Jeu interactif multilingue (FR / AR / EN) basé sur des questions philosophiques. Réalisé avec HTML, CSS et JavaScript.",
    link: "https://jeu-philosophique.netlify.app/",
    category: "Autres"
  }
];

const projectsGrid = document.getElementById('projectsGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

let visibleCount = 6;
let currentCategory = "all";

function renderProjects() {
  let filtered = currentCategory === "all" ? projects : projects.filter(p => p.category === currentCategory);
  projectsGrid.innerHTML = filtered.slice(0, visibleCount).map(p => `
    <div class="project-card">
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
      <div class="project-content">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-links">
          <a href="${p.link}" target="_blank" rel="noopener">Voir le projet</a>
        </div>
      </div>
    </div>
  `).join('');

  if (visibleCount >= filtered.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }
}

loadMoreBtn.addEventListener('click', () => {
  visibleCount += 6;
  renderProjects();
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    visibleCount = 6;
    renderProjects();
  });
});

// Initial render
renderProjects();


  loadMoreBtn.addEventListener('click', () => {
    visibleCount += 6;
    renderProjects(visibleCount);
  });

  renderProjects(visibleCount);

    // Gestion bouton scroll vers le haut
    const scrollBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollBtn.classList.add("show-scroll");
      } else {
        scrollBtn.classList.remove("show-scroll");
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Validation avec fetch (envoi AJAX) formulaire contact 
    const form = document.getElementById("contactForm");
const formMessage = document.createElement("p");
formMessage.style.textAlign = "center";
formMessage.style.fontWeight = "600";
formMessage.style.marginTop = "1rem";
form.appendChild(formMessage);

form.addEventListener("submit", function (e) {
  e.preventDefault(); // empêcher l'envoi classique

  if (!form.checkValidity()) {
    formMessage.style.color = "#e53e3e";
    formMessage.textContent = "Veuillez remplir tous les champs correctement.";
    return;
  }

  // Préparer les données du formulaire
  const data = new FormData(form);

  // Envoi fetch vers Formspree
  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      formMessage.style.color = "#2f855a";
      formMessage.textContent = "Merci pour votre message !";
      form.reset();
    } else {
      response.json().then(data => {
        if (data.errors) {
          formMessage.style.color = "#e53e3e";
          formMessage.textContent = data.errors.map(error => error.message).join(", ");
        } else {
          formMessage.style.color = "#e53e3e";
          formMessage.textContent = "Une erreur est survenue, veuillez réessayer.";
        }
      });
    }
  }).catch(() => {
    formMessage.style.color = "#e53e3e";
    formMessage.textContent = "Une erreur réseau est survenue, veuillez réessayer.";
  });
});

/////////// header 
const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const header = document.getElementById('main-header');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    navbar.classList.toggle('nav-closed');
  });

  function resetNavbar() {
    if (window.innerWidth >= 768) {
      navbar.classList.remove('nav-closed');
      navbar.classList.remove('nav-open');
    } else {
      if (!navbar.classList.contains('nav-open')) {
        navbar.classList.add('nav-closed');
      }
    }
  }

  window.addEventListener('load', resetNavbar);
  window.addEventListener('resize', resetNavbar);

  // Effet de shrink au scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });

  /////////////// fin header

  /////////////// annimation competences
  const skills = document.querySelectorAll('.skill-circle');

function animateSkills() {
  skills.forEach(skill => {
    const circle = skill.querySelector('.circle');
    const level = skill.getAttribute('data-level');
    circle.style.background = `conic-gradient(#3182ce ${level * 3.6}deg, #e2e8f0 ${level * 3.6}deg)`;
  });
}

// Déclencher quand la section entre dans la vue
window.addEventListener('scroll', () => {
  const section = document.querySelector('#competences');
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    animateSkills();
  }
});

  /////////////// fin annimation competences
