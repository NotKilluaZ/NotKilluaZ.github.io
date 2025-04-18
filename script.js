document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  document.querySelector('.burger').addEventListener('click', () =>
    document.querySelector('.nav-links').classList.toggle('nav-active')
  );

  // Scroll reveal
  document.querySelectorAll('.reveal').forEach(el => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
  });

  // Animate skill bars
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const span = bar.querySelector('span');
    setTimeout(() => (span.style.width = bar.getAttribute('data-progress') + '%'), 500);
  });

  // Modal logic
  document.querySelectorAll('[data-modal]').forEach(card => {
    const modal = document.getElementById(card.dataset.modal);
    card.querySelector('.btn').addEventListener('click', () => (modal.style.display = 'flex'));
  });
  document.querySelectorAll('.close-btn').forEach(btn =>
    btn.addEventListener('click', () => (btn.closest('.modal').style.display = 'none'))
  );

  // "Explore" scroll
  document.querySelector('.hero-content .btn').addEventListener('click', () => {
    document
      .getElementById('about')
      .scrollIntoView({ behavior: 'smooth' });
  });

  // Back to top
  const topBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () =>
    (topBtn.style.display = window.scrollY > 400 ? 'block' : 'none')
  );
  topBtn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  // Contact form via EmailJS
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
        
    console.log("Sending form...");
        
    emailjs.sendForm('service_ay9fyqp', 'template_8d0pclo', e.target)
    .then((result) => {
        console.log("EmailJS success:", result);
        alert('✅ Message sent successfully!');
    })
    .catch((error) => {
        console.error("❌ EmailJS error:", error);
        alert('❌ Failed to send. See console for details.');
    });
});

  // Particle background
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.r = Math.random() * 2 + 1;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.86)';
      ctx.fill();
    }
  }
  const particles = Array.from({ length: 200 }, () => new Particle());
  (function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  })();
});
