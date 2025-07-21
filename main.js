import './style.css'

// App initialization
console.log('🚀 Aculearn app initialized!');

// DOM elements
const getStartedBtn = document.getElementById('get-started-btn');
const featureCards = document.querySelectorAll('.feature-card');

// Add fade-in animation to elements when page loads
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('header, .hero, .feature-card');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('fade-in');
    }, index * 200);
  });
});

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
    showNotification(`You clicked on ${featureName}!`);
  });
});

// Simple notification system
function showNotification(message) {
  // Remove existing notification if any
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #646cff;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `;
  
  // Add animation keyframes
  if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 3000);
}

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
    showNotification('Error fetching data. Check console for details.');
  }
}

// Example: Call the API when page loads (optional)
// fetchData();

// Export functions if needed for testing
export { showNotification, fetchData };
