
    // Mobile menu toggle
    document.querySelector('button[class*="fa-bars"]').addEventListener('click', function() {
      const nav = document.querySelector('nav');
      nav.classList.toggle('hidden');
      nav.classList.toggle('block');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Form submission (demo)
    document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message. We will contact you shortly.');
      this.reset();
    });