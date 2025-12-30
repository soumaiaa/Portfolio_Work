const projects = [
`<div class="project-card">
    <img src="imageprojet/lsf.png" alt="Projet Langue des Signes Française" loading="lazy" />
    <div class="project-content">
      <h3>Apprentissage de la Langue des Signes Française</h3>
      <p>Projet de fin d’études développé avec Symfony. Ce site propose des cours interactifs et des jeux pédagogiques pour apprendre la langue des signes française.</p>
      <div class="project-links">
        <a href="https://github.com/soumaiaa/langue-des-signes-fran-aise.git" target="_blank" rel="noopener">Voir le code sur GitHub</a>
      </div>
    </div>
  </div>` ,
  `
    <div class="project-card">
      <img src="imageprojet/demain.jpeg" alt="Site WordPress Demain Selfcare" loading="lazy" />
      <div class="project-content">
        <h3>Site WordPress - Demain Selfcare</h3>
        <p>Site professionnel réalisé pour une cliente pendant mon stage, avec WordPress et Divi.</p>
        <div class="project-links">
          <a href="https://demainselfcare.fr/" target="_blank" rel="noopener">Voir le site</a>
        </div>
      </div>
    </div>`,
     `
    <div class="project-card">
  <img src="imageprojet/jeuphilos.png" alt="Jeu Philosophique - Test de personnalité" loading="lazy" />
  <div class="project-content">
    <h3>Jeu Philosophique 🧠</h3>
    <p>Jeu interactif multilingue (FR / AR / EN) basé sur des questions philosophiques. Réalisé avec HTML, CSS et JavaScript, il permet aux utilisateurs de découvrir leur personnalité à travers des choix réfléchis et de partager leurs résultats.</p>
    <div class="project-links">
      <a href="https://jeu-philosophique.netlify.app/" target="_blank" rel="noopener">Voir le projet</a>
    </div>
  </div>
</div>`,
    `
<div class="project-card">
    <img src="imageprojet/tpalpine.png" alt="Projet TP ALPINE" loading="lazy" />
    <div class="project-content">
      <h3>TP ALPINE</h3>
      <p>Application React développée dans le cadre de ma formation pour simuler la gestion d’un garage automobile. Elle met en œuvre React, Bootstrap, et une structuration de composants moderne. </p>
      <div class="project-links">
        <a href="https://alpinesoumaia.netlify.app/" target="_blank" rel="noopener">Voir le projet</a>
      </div>
    </div>
  </div>` ,
    `
    <div class="project-card">
      <img src="imageprojet/music.gif" alt="Projet Festival" loading="lazy" />
      <div class="project-content">
        <h3>Site Festival Culturel</h3>
        <p>Projet réalisé pendant ma formation pour promouvoir un festival, développé sous WordPress avec le constructeur Elementor.</p>
        <div class="project-links">
          <a href="https://negar-soumaia-festival.projets.garage404.com/" target="_blank" rel="noopener">Voir le projet</a>
        </div>
      </div>
    </div>`,
`
    <div class="project-card">
      <img src="imageprojet/chiligram.gif" alt="Projet Chiligram" loading="lazy" />
      <div class="project-content">
        <h3>Chiligram</h3>
        <p>Site HTML/CSS/PHP avec un peu de Javascript asynchrone.</p>
        <div class="project-links">
          <a href="https://soumaia-chiligrame.projets.garage404.com/" target="_blank" rel="noopener">Voir le projet</a>
        </div>
      </div>
    </div>`, 
`
  <div class="project-card">
    <img src="imageprojet/calculatrice.webp" alt="Projet Calculator App" loading="lazy" />
    <div class="project-content">
      <h3>Calculator App</h3>
      <p>Application calculatrice développée en Flutter, intégrant des fonctionnalités classiques avec une interface moderne.</p>
      <div class="project-links">
        <a href="https://github.com/soumaiaa/calculator_App.git" target="_blank" rel="noopener">Voir le code sur GitHub</a>
      </div>
    </div>
  </div>` , 
  `
  <div class="project-card">
    <img src="imageprojet/jeu.jpg" alt="Projet Jeu d'image" loading="lazy" />
    <div class="project-content">
      <h3>Jeu d'image</h3>
      <p> Ce jeu mobile consiste à retrouver trois images identiques pour gagner. Il a été développé avec Flutter et permet d’illustrer mes compétences en création d’interfaces intuitives, en logique de jeu et en design responsive.</p>
      <div class="project-links">
        <a href="https://github.com/soumaiaa/jeu-d-image.git" target="_blank" rel="noopener">Voir le code sur GitHub</a>
      </div>
    </div>
  </div>`,
  
 `
  <div class="project-card">
    <img src="imageprojet/rundom.avif" alt="Projet Random Rumble React" loading="lazy" />
    <div class="project-content">
      <h3>Random Rumble</h3>
      <p>Ce projet est un petit jeu interactif développé avec React.  Il permet à l'utilisateur de lancer une action aléatoire à chaque clic</p>
      <div class="project-links">
        <a href="https://github.com/soumaiaa/random-rumble-react.git" target="_blank" rel="noopener">Voir le code sur GitHub</a>
      </div>
    </div>
  </div>` , 

`
    <div class="project-card">
      <img src="imageprojet/Tour_Operateur.gif" alt="Projet agence de voyage" loading="lazy" />
      <div class="project-content">
        <h3>Site d'agence de voyage</h3>
        <p>Site PHP/MySQL pour une agence de voyage, avec formulaire dynamique et pages multiples.</p>
        <div class="project-links">
          <a href="https://soumaia-voyage.projets.garage404.com/index.php" target="_blank" rel="noopener">Voir le projet</a>
        </div>
      </div>
    </div>`,
`
    <div class="project-card">
      <img src="imageprojet/montagne.gif" alt="Projet The Mountain" loading="lazy" />
      <div class="project-content">
        <h3>Landing Page - The Mountain</h3>
        <p>Exercice HTML/CSS avec animation simple, typographie et design épuré.</p>
        <div class="project-links">
          <a href="https://soumaia-the-mountain.projets.garage404.com/" target="_blank" rel="noopener">Voir le projet</a>
        </div>
      </div>
    </div>`,
`
    <div class="project-card">
      <img src="imageprojet/combat.gif" alt="Projet Combat" loading="lazy" />
      <div class="project-content">
        <h3>Combat</h3>
        <p>Petit jeu de combat avec PHP (POO).</p>
        <div class="project-links">
          <a href="https://soumaia-combat.projets.garage404.com/" target="_blank" rel="noopener">Voir le projet</a>
        </div>
      </div>
    </div>`,
`
    <div class="project-card">
      <img src="imageprojet/onemillion.gif" alt="Projet One Million Lines" loading="lazy" />
      <div class="project-content">
        <h3>One Million Lines</h3>
        <p>Reproduction d'une maquette avec Bootstrap 5.</p>
        <div class="project-links">
          <a href="https://onemillionlinesoumaia.netlify.app/" target="_blank" rel="noopener">Voir le projet</a>
        </div>
      </div>
    </div>`,
`
    <div class="project-card">
      <img src="imageprojet/jaune jaune.gif" alt="Projet Yellow" loading="lazy" />
      <div class="project-content">
        <h3>Yellow</h3>
        <p>Reproduction d'une maquette avec SASS.</p>
        <div class="project-links">
          <a href="https://soumaia-yellow.projets.garage404.com/" target="_blank" rel="noopener">Voir le projet</a>
        </div>
      </div>
    </div>`,
`
    <div class="project-card">
      <img src="imageprojet/yoo.png" alt="Projet Yo! Application" loading="lazy" />
      <div class="project-content">
        <h3>Yo! Application</h3>
        <p>Reproduction d'une maquette en CSS et HTML.</p>
        <div class="project-links">
          <a href="https://soumaia-yo.projets.garage404.com/" target="_blank" rel="noopener">Voir le projet</a>
        </div>
      </div>
    </div>`,
`
    <div class="project-card">
      <img src="imageprojet/zoo.gif" alt="Projet Zoo" loading="lazy" />
      <div class="project-content">
        <h3>Zoo</h3>
        <p>Projet avec classes PHP et héritage.</p>
        <div class="project-links">
          <a href="https://soumaia-zoo.projets.garage404.com/pages/" target="_blank" rel="noopener">Voir le projet</a>
        </div>
      </div>
    </div>`,

`
    <div class="project-card">
      <img src="imageprojet/drumppad.gif" alt="Projet Drum Pad" loading="lazy" />
      <div class="project-content">
        <h3>Drum Pad</h3>
        <p>Clavier numérique avec JavaScript.</p>
        <div class="project-links">
          <a href="https://soumaia-drump.projets.garage404.com/" target="_blank" rel="noopener">Voir le projet</a>
        </div>
      </div>
    </div>` ,
    `

    <div class="project-card">
      <img src="imageprojet/luxury.png" alt="Projet Luxury Services" loading="lazy" />
      <div class="project-content">
        <h3>Luxury Services</h3>
        <p>Site de recrutement avec base clients sous Symfony.</p>
        <div class="project-links">
          <a href="https://soumaia-luxury-services.projets.garage404.com/" target="_blank" rel="noopener">Voir le projet</a>
        </div>
      </div>
    </div>`,
`
    <div class="project-card">
      <img src="imageprojet/battles.gif" alt="Projet Battle Office" loading="lazy" />
      <div class="project-content">
        <h3>Battle Office</h3>
        <p>Landing Page E-Commerce simplifié, connecté à API, Symfony.</p>
        <div class="project-links">
          <a href="https://soumaia-battle-office.projets.garage404.com/" target="_blank" rel="noopener">Voir le projet</a>
        </div>
      </div>
    </div>
 `
  ];

  const projectsGrid = document.getElementById('projectsGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  let visibleCount = 6;

  function renderProjects(count) {
    projectsGrid.innerHTML = projects.slice(0, count).join('');
    if (count >= projects.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

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