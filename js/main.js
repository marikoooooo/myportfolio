// ========================================
// DOM Content Loaded
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initFadeInAnimations();
    initMobileNavigation();
    initActiveNavLinks();
    initPageTransitions();
    initSmoothScrolling();
});

// ========================================
// Fade In Animations
// ========================================
function initFadeInAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// ========================================
// Mobile Navigation
// ========================================
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// ========================================
// Active Navigation Links
// ========================================
function initActiveNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ========================================
// Page Transitions
// ========================================
function initPageTransitions() {
    // Add page transition class to body
    document.body.classList.add('page-transition');
    
    // Remove transition class after page loads
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Handle page transitions for internal links
    const internalLinks = document.querySelectorAll('a[href^="./"], a[href^="../"], a[href^="index.html"], a[href^="projects.html"], a[href^="resume.html"], a[href^="daedalus-studios.html"], a[href^="contact.html"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply transition to different pages
            if (href && href !== window.location.pathname.split('/').pop()) {
                e.preventDefault();
                
                document.body.classList.remove('loaded');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
}

// ========================================
// Smooth Scrolling
// ========================================
function initSmoothScrolling() {
    // Handle smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Blog Functions (for Daedalus Studios)
// ========================================
function loadBlogPosts() {
    fetch('data/blog-posts.json')
        .then(response => response.json())
        .then(data => {
            renderBlogPosts(data.posts);
        })
        .catch(error => {
            console.error('Error loading blog posts:', error);
            // Show fallback content
            const blogContainer = document.getElementById('blog-posts-container');
            if (blogContainer) {
                blogContainer.innerHTML = '<p>Unable to load blog posts at this time.</p>';
            }
        });
}

function renderBlogPosts(posts) {
    const blogContainer = document.getElementById('blog-posts-container');
    
    if (!blogContainer) return;
    
    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    const blogHTML = posts.map(post => `
        <article class="blog-card fade-in">
            <div class="blog-image">
                ${post.images && post.images.length > 0 
                    ? `<img src="images/${post.images[0]}" alt="${post.title}" loading="lazy">`
                    : '<div class="image-placeholder">Blog Post</div>'
                }
            </div>
            <div class="blog-content">
                <h3>${post.title}</h3>
                <p class="blog-date">${formatDate(post.date)}</p>
                <p class="blog-excerpt">${post.excerpt}</p>
                ${post.tags ? `<div class="blog-tags">${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>` : ''}
                <button class="btn btn-secondary" onclick="openBlogPost(${post.id})">Read More</button>
            </div>
        </article>
    `).join('');
    
    blogContainer.innerHTML = blogHTML;
    
    // Re-initialize fade animations for new content
    initFadeInAnimations();
}

function openBlogPost(postId) {
    // This would typically open a modal or navigate to a detailed post page
    // For now, we'll show an alert (you can enhance this later)
    alert(`Opening blog post #${postId}. This feature can be enhanced with a modal or separate page.`);
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// ========================================
// Contact Form (if needed)
// ========================================
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add your contact form handling logic here
            // For now, show a success message
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        });
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '8px',
        color: 'white',
        backgroundColor: type === 'success' ? 'var(--sage-green)' : 'var(--moss-green)',
        zIndex: '10000',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease-out'
    });
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// ========================================
// Utility Functions
// ========================================

// Debounce function for performance
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========================================
// Initialize Blog on Daedalus Studios Page
// ========================================
if (window.location.pathname.includes('daedalus-studios.html')) {
    document.addEventListener('DOMContentLoaded', loadBlogPosts);
} 