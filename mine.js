 // Sticky Header
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            header.classList.toggle('scrolled', window.scrollY > 0);
        });

        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navbar = document.querySelector('.navbar');

        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });

    // Close mobile menu when clicking on a nav link
     document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
            });
        });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

    // Animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
        
    const fadeInOnScroll = function() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
    // Initialize elements as invisible
    fadeElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
     window.addEventListener('scroll', fadeInOnScroll);
    window.addEventListener('load', fadeInOnScroll);

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
        
    const animateSkillBars = function() {
            skillBars.forEach(bar => {
                const barTop = bar.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (barTop < windowHeight - 100) {
                    bar.style.width = bar.parentElement.previousElementSibling.querySelector('.skill-percent').textContent;
                }
            });
        };
        
    // Initialize skill bars at 0
    skillBars.forEach(bar => {
            bar.style.width = '0';
            bar.style.transition = 'width 1.5s ease';
    });
        
    window.addEventListener('scroll', animateSkillBars);
    window.addEventListener('load', animateSkillBars);