// DOM Elements
const openBtn = document.getElementById('openBtn');
const birthdayCake = document.getElementById('birthdayCake');
const modalsContainer = document.getElementById('modalsContainer');
const leftModal = document.getElementById('leftModal');
const centerModal = document.getElementById('centerModal');
const rightModal = document.getElementById('rightModal');

// State tracking
let isOpen = false;

// Initialize the site
document.addEventListener('DOMContentLoaded', function() {
    // Ensure everything starts hidden
    birthdayCake.classList.add('hidden');
    modalsContainer.classList.add('hidden');
    
    // Remove any show classes that might be there
    birthdayCake.classList.remove('show');
    modalsContainer.classList.remove('show');
    leftModal.classList.remove('show');
    centerModal.classList.remove('show');
    rightModal.classList.remove('show');
});

// Generate roaming hearts (similar to stars)
function createHearts() {
    const heartCount = 15;
    const heartSymbols = ['💕', '💖', '💗', '💘', '💝', '💞', '💟', '♥️', '💓', '💜', '🩷'];
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        // Random size variation (similar to stars)
        const size = Math.random();
        if (size > 0.7) heart.classList.add('large');
        else if (size < 0.3) heart.classList.add('small');

        // Random vertical position and animation delay
        heart.style.top = Math.random() * 100 + '%';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 0.5 + 's';
        heart.style.animationDuration = (8 + Math.random() * 6) + 's';

        document.body.appendChild(heart);
    }
}

// Open button click handler
openBtn.addEventListener('click', function() {
    if (!isOpen) {
        openBirthdaySurprise();
    }
});

// Function to open the birthday surprise
function openBirthdaySurprise() {
    console.log('Opening birthday surprise...');
    isOpen = true;
    
    // Hide the open button
    openBtn.style.transform = 'scale(0)';
    openBtn.style.opacity = '0';
    
    setTimeout(() => {
        openBtn.classList.add('hidden');
    }, 300);
    
    // Show and animate the birthday cake
    setTimeout(() => {
        birthdayCake.classList.remove('hidden');
        birthdayCake.classList.add('show');
        console.log('Birthday cake shown');
    }, 500);
    
    // After cake animation, show the modals
    setTimeout(() => {
        showModals();
    }, 1800);
}

// Function to show modals with staggered animation
function showModals() {
    console.log('Showing modals...');
    
    // Show modals container
    modalsContainer.classList.remove('hidden');
    modalsContainer.classList.add('show');
    
    // Animate modals with delay
    setTimeout(() => {
        leftModal.classList.add('show');
        console.log('Left modal shown');
    }, 200);
    
    setTimeout(() => {
        centerModal.classList.add('show');
        console.log('Center modal with message shown');
    }, 400);
    
    setTimeout(() => {
        rightModal.classList.add('show');
        console.log('Right modal shown');
    }, 600);
}

// Function to close the birthday surprise
function closeBirthdaySurprise() {
    isOpen = false;
    
    // Hide modals with reverse animation
    rightModal.classList.remove('show');
    
    setTimeout(() => {
        centerModal.classList.remove('show');
    }, 200);
    
    setTimeout(() => {
        leftModal.classList.remove('show');
    }, 400);
    
    // Hide modals container
    setTimeout(() => {
        modalsContainer.classList.remove('show');
        
        setTimeout(() => {
            modalsContainer.classList.add('hidden');
        }, 500);
    }, 600);
    
    // Hide birthday cake
    setTimeout(() => {
        birthdayCake.classList.remove('show');
        
        setTimeout(() => {
            birthdayCake.classList.add('hidden');
        }, 500);
    }, 800);
    
    // Show open button again
    setTimeout(() => {
        openBtn.classList.remove('hidden');
        openBtn.style.opacity = '1';
        openBtn.style.transform = 'scale(1)';
    }, 1500);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && isOpen) {
        closeBirthdaySurprise();
    }
    
    if (event.key === 'Enter' && !isOpen) {
        openBirthdaySurprise();
    }
});

// Add some sparkle effects when opening
function createSparkles() {
    const sparklesContainer = document.createElement('div');
    sparklesContainer.style.position = 'fixed';
    sparklesContainer.style.top = '0';
    sparklesContainer.style.left = '0';
    sparklesContainer.style.width = '100vw';
    sparklesContainer.style.height = '100vh';
    sparklesContainer.style.pointerEvents = 'none';
    sparklesContainer.style.zIndex = '50';
    
    document.body.appendChild(sparklesContainer);
    
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
        sparkle.style.animation = `sparkleFloat ${Math.random() * 3 + 2}s ease-in-out infinite`;
        sparkle.style.opacity = '0';
        
        sparklesContainer.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.style.opacity = '1';
        }, Math.random() * 2000);
        
        setTimeout(() => {
            sparkle.style.opacity = '0';
        }, Math.random() * 2000 + 3000);
    }
    
    // Remove sparkles after animation
    setTimeout(() => {
        document.body.removeChild(sparklesContainer);
    }, 6000);
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }
`;
document.head.appendChild(sparkleStyle);

// Enhanced open function with sparkles
const originalOpenFunction = openBirthdaySurprise;
openBirthdaySurprise = function() {
    createSparkles();
    originalOpenFunction();
};

// Initialize hearts when page loads
window.addEventListener('load', function() {
    createHearts();
});

// Add more hearts periodically (similar to stars)
setInterval(() => {
    const currentHearts = document.querySelectorAll('.floating-heart').length;
    if (currentHearts < 20) {
        const heart = document.createElement('div');
        const heartSymbols = ['💕', '💖', '💗', '💘', '💝', '💞', '💟', '♥️', '💓', '💜', '🩷'];
        
        heart.className = 'floating-heart';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.top = Math.random() * 100 + '%';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = '0s';
        
        // Random size variation
        const size = Math.random();
        if (size > 0.7) heart.classList.add('large');
        else if (size < 0.3) heart.classList.add('small');
        
        document.body.appendChild(heart);
    }
}, 3000);
