import './style.css'

// App initialization
console.log(' Aculearn app initialized!');

// DOM elements
const getStartedBtn = document.getElementById('get-started-btn');
const featureCards = document.querySelectorAll('.feature-card');



// Get Started button functionality
getStartedBtn.addEventListener('click', () => {
  alert('Welcome to Aculearn! 🎉\n\nThis is where your learning journey begins. You can customize this message and add your own functionality.');
  
  // Example: Add some visual feedback
  getStartedBtn.textContent = 'Getting Started...';
  getStartedBtn.disabled = true;
  
  setTimeout(() => {
    getStartedBtn.textContent = 'Get Started';
    getStartedBtn.disabled = false;
  }, 2000);
});

// Feature cards hover effect with JavaScript
featureCards.forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    card.style.background = `linear-gradient(135deg, #646cff${10 + index * 5}, transparent)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
  
  // Add click functionality to feature cards
  card.addEventListener('click', () => {
    const featureName = card.querySelector('h3').textContent;
    console.log(`Feature "${featureName}" clicked!`);
    
    // You can add more functionality here
  });
});

// Example API call function (you can customize this)
async function fetchData() {
  try {
    // Example API call - replace with your actual API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log('Sample data fetched:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}



// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});

// Hero Section Animations
function initHeroAnimations() {
  
  // 1. Subtitle word changing animation
  function initSubtitleAnimation() {
    const subtitle = document.querySelector('.hero-subtitle');
    const words = ['Knowledge', 'Creativity', 'Score', 'Skills', 'Potential', 'Future'];
    let currentIndex = 0;
    
    function changeWord() {
      const currentWord = words[currentIndex];
      const newText = `Master Your <span style="color: var(--primary-green); font-weight: 700;">${currentWord}</span> with AI`;
      
      // Add fade out effect
      subtitle.style.opacity = '0.5';
      subtitle.style.transform = 'translateY(-10px)';
      
      setTimeout(() => {
        subtitle.innerHTML = newText;
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
        
        currentIndex = (currentIndex + 1) % words.length;
      }, 300);
    }
    
    // Initial setup
    subtitle.style.transition = 'all 0.3s ease';
    changeWord();
    
    // Change word every 2 seconds
    setInterval(changeWord, 2000);
  }
  
  // 3. Dynamic box shadow following cursor
  function initDynamicBoxShadow() {
    const heroContent = document.querySelector('.hero-content');
    
    heroContent.addEventListener('mousemove', (e) => {
      const rect = heroContent.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Calculate center of the hero content
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate offset from center (normalized to -1 to 1)
      const offsetX = (mouseX - centerX) / centerX;
      const offsetY = (mouseY - centerY) / centerY;
      
      // Calculate shadow offset (SAME direction as cursor)
      const shadowX = offsetX * 100;
      const shadowY = offsetY * 100;
      
      // Calculate shadow intensity based on distance from center
      const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
      const intensity = Math.min(distance, 1);
      
      // Create dynamic shadow
      const shadowBlur = 20 + (intensity * 30);
      const shadowSpread = 10 + (intensity * 20);
      const shadowOpacity = 0.002 + (intensity * 0.03);
      
      // Apply the dynamic box shadow with light green colors
      heroContent.style.boxShadow = `
        ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px rgba(187, 226, 107, ${shadowOpacity + 0.01}),
        0 4px 20px rgba(187, 226, 107, ${0.08 + intensity * 0.2}),
        0 8px 40px rgba(187, 226, 107, ${0.08 + intensity * 0.1})
      `;
      
      // Add subtle transform for enhanced effect
      const tiltX = offsetY * 0.1;
      const tiltY = offsetX * -0.1;
      
      heroContent.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      heroContent.style.transition = 'none';
    });
    
    heroContent.addEventListener('mouseleave', () => {
      // Reset to original shadow and transform
      heroContent.style.transition = 'all 0.5s ease';
      heroContent.style.boxShadow = 'var(--shadow-lg)';
      heroContent.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
    
    heroContent.addEventListener('mouseenter', () => {
      // Add initial enhanced light green shadow
      heroContent.style.boxShadow = `
        0 10px 30px rgba(248, 255, 234, 0.08),
        0 4px 20px rgba(234, 255, 192, 0.12),
        0 8px 40px rgba(237, 255, 202, 0.07)
      `;
    });
  }
  
  // Initialize all animations
  initSubtitleAnimation();
  initDynamicBoxShadow();
}

// Add CSS for enhanced animations
function addHeroAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .hero-content {
      transform-style: preserve-3d;
      will-change: transform, box-shadow;
    }
    
    .hero-subtitle {
      will-change: opacity, transform;
    }
    
    .decoration-circle {
      will-change: transform;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .decoration-circle:hover {
      z-index: 10;
    }
    
    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
    
    /* Enhanced glow effect for subtitle words */
    .hero-subtitle span {
      text-shadow: 0 0 20px rgba(187, 226, 107, 0.5);
      transition: all 0.3s ease;
    }
  `;
  document.head.appendChild(style);
}

// Simple Hero Entry Animation - only slides down without scaling
function initHeroEntryAnimation() {
  const heroContent = document.querySelector('.hero-content');
  const decorations = document.querySelectorAll('.decoration-circle');
  
  // Set initial state for hero content - only opacity and position
  heroContent.style.opacity = '0';
  heroContent.style.transform = 'translateY(-1000px)';
  heroContent.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  
  // Set initial state for decorations - only opacity and position
  decorations.forEach((decoration, index) => {
    decoration.style.opacity = '0';
    decoration.style.transform = 'translateY(-500px)';
    decoration.style.transition = `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.5 + index * 0.15}s`;
  });
  
  // Trigger animation after a short delay
  setTimeout(() => {
    // Animate hero content - slide from top to its normal position
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
    
    // Animate decorations
    setTimeout(() => {
      decorations.forEach((decoration) => {
        decoration.style.opacity = '1';
        decoration.style.transform = 'translateY(0)';
      });
    }, 400);
    
  }, 200);
}



// Features Section Scroll Animation - Reappears every time
function initFeaturesScrollAnimation() {
  const featuresSection = document.querySelector('.features');
  const featuresTitle = document.querySelector('.features-title');
  const featureCards = document.querySelectorAll('.feature-card');
  
  // Function to reset elements to initial state
  function resetAnimation() {
    featuresTitle.style.opacity = '0';
    featuresTitle.style.transform = 'translateY(-200px)';
    featuresTitle.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    featureCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(-200px)';
      card.style.transition = `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.3 + index * 0.2}s`;
    });
  }
  
  // Function to trigger animation
  function triggerAnimation() {
    // Animate features title first
    setTimeout(() => {
      featuresTitle.style.opacity = '1';
      featuresTitle.style.transform = 'translateY(0)';
    }, 100);
    
    // Animate feature cards with staggered delay
    featureCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        
        // Remove inline transition after animation completes to allow CSS hover
        setTimeout(() => {
          card.style.transition = '';
        }, 800 + (0.3 + index * 0.2) * 1000);
        
      }, 300 + (index * 200));
    });
  }
  
  // Set initial state
  resetAnimation();
  
  // Create intersection observer for scroll detection
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -20px 0px'
  };
  
  const featuresObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Section is visible - trigger animation
        triggerAnimation();
      } else {
        // Section is not visible - reset to initial state
        resetAnimation();
      }
    });
  }, observerOptions);
  
  // Start observing the features section
  if (featuresSection) {
    featuresObserver.observe(featuresSection);
  }
}

// Add hover event listeners that work with the scroll animation
function initFeatureCardHoverEffects() {
  const featureCards = document.querySelectorAll('.feature-card');
  
  featureCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      // Temporarily disable any ongoing transitions for smooth hover
      const currentTransform = card.style.transform;
      card.style.transition = 'all 0.3s ease';
      card.style.transform = currentTransform; // Maintain current position
    });
    
    card.addEventListener('mouseleave', () => {
      // Re-enable normal transitions
      card.style.transition = '';
    });
  });
}

// About Us Section Scroll Animation - Slides from right
function initAboutUsScrollAnimation() {
  const aboutSection = document.querySelector('.about');
  const aboutContent = document.querySelector('.about-content');
  const aboutVisual = document.querySelector('.about-visual');
  
  // Function to reset elements to initial state
  function resetAboutAnimation() {
    aboutContent.style.opacity = '0';
    aboutContent.style.transform = 'translateX(100px)';
    aboutContent.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    aboutVisual.style.opacity = '0';
    aboutVisual.style.transform = 'translateX(150px)';
    aboutVisual.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s';
  }
  
  // Function to trigger animation
  function triggerAboutAnimation() {
    setTimeout(() => {
      aboutContent.style.opacity = '1';
      aboutContent.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
      aboutVisual.style.opacity = '1';
      aboutVisual.style.transform = 'translateX(0)';
    }, 300);
  }
  
  // Set initial state
  resetAboutAnimation();
  
  // Create intersection observer for scroll detection
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Section is visible - trigger animation
        triggerAboutAnimation();
      } else {
        // Section is not visible - reset to initial state
        resetAboutAnimation();
      }
    });
  }, observerOptions);
  
  // Start observing the about section
  if (aboutSection) {
    aboutObserver.observe(aboutSection);
  }
}

// Testimony Section Scroll Animation - Slides from left
function initTestimonyScrollAnimation() {
  const testimonySection = document.querySelector('.testimony');
  const testimonyContent = document.querySelector('.testimony-content');
  const testimonyVisual = document.querySelector('.testimony-visual');
  
  // Function to reset elements to initial state
  function resetTestimonyAnimation() {
    testimonyVisual.style.opacity = '0';
    testimonyVisual.style.transform = 'translateX(-150px)';
    testimonyVisual.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    testimonyContent.style.opacity = '0';
    testimonyContent.style.transform = 'translateX(-100px)';
    testimonyContent.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s';
  }
  
  // Function to trigger animation
  function triggerTestimonyAnimation() {
    setTimeout(() => {
      testimonyVisual.style.opacity = '1';
      testimonyVisual.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
      testimonyContent.style.opacity = '1';
      testimonyContent.style.transform = 'translateX(0)';
    }, 300);
  }
  
  // Set initial state
  resetTestimonyAnimation();
  
  // Create intersection observer for scroll detection
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const testimonyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Section is visible - trigger animation
        triggerTestimonyAnimation();
      } else {
        // Section is not visible - reset to initial state
        resetTestimonyAnimation();
      }
    });
  }, observerOptions);
  
  // Start observing the testimony section
  if (testimonySection) {
    testimonyObserver.observe(testimonySection);
  }
}

// FAQ Section Scroll Animation - Slides from bottom
function initFAQScrollAnimation() {
  const faqSection = document.querySelector('.faq');
  const faqTitle = document.querySelector('.faq-title');
  const faqItems = document.querySelectorAll('.faq-item');
  
  // Function to reset elements to initial state
  function resetFAQAnimation() {
    faqTitle.style.opacity = '0';
    faqTitle.style.transform = 'translateY(50px)';
    faqTitle.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    faqItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.2 + index * 0.1}s`;
    });
  }
  
  // Function to trigger animation
  function triggerFAQAnimation() {
    setTimeout(() => {
      faqTitle.style.opacity = '1';
      faqTitle.style.transform = 'translateY(0)';
    }, 100);
    
    faqItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 300 + (index * 100));
    });
  }
  
  // Set initial state
  resetFAQAnimation();
  
  // Create intersection observer for scroll detection
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -30px 0px'
  };
  
  const faqObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Section is visible - trigger animation
        triggerFAQAnimation();
      } else {
        // Section is not visible - reset to initial state
        resetFAQAnimation();
      }
    });
  }, observerOptions);
  
  // Start observing the FAQ section
  if (faqSection) {
    faqObserver.observe(faqSection);
  }
}

// Add CSS for section animations
function addSectionAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .about-content, .about-visual {
      will-change: opacity, transform;
    }
    
    .testimony-content, .testimony-visual {
      will-change: opacity, transform;
    }
    
    .faq-title, .faq-item {
      will-change: opacity, transform;
    }
    
    /* Ensure smooth animations */
    .about-content, .about-visual,
    .testimony-content, .testimony-visual,
    .faq-title, .faq-item {
      transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  `;
  document.head.appendChild(style);
}

// Update the initialization to include new animations
document.addEventListener('DOMContentLoaded', () => {
  addHeroAnimationStyles();
  addSectionAnimationStyles(); // Add section animation styles
  
  // Start simple hero content animation immediately
  initHeroEntryAnimation();
  
  // Initialize other hero animations after entrance is complete
  setTimeout(() => {
    initHeroAnimations();
  }, 1500);
  
  // Initialize features scroll animation
  initFeaturesScrollAnimation();
  
  // Initialize feature card hover effects
  initFeatureCardHoverEffects();
  
  // Initialize section scroll animations
  initAboutUsScrollAnimation();
  initTestimonyScrollAnimation();
  initFAQScrollAnimation();


});

// Export functions if needed for testing
export { fetchData };
