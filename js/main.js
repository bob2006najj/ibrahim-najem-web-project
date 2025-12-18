/* ============================================
   Touristic Website - Main JavaScript
   ============================================ */

// Feature 1: Gallery Modal/Lightbox
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initActiveNav();
    initGalleryModal();
    initFeedbackForm();
});

// Feature 3: Active Navigation Indicator
function initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Feature 1: Gallery Modal/Lightbox
function initGalleryModal() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('gallery-modal');
    
    if (!modal) return;
    
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalLink = document.getElementById('modal-link');
    const modalClose = document.querySelector('.modal-close');
    
    // Map monument names to their page URLs
    const monumentPages = {
        'Great Pyramid': 'monument-1.html',
        'Colosseum': 'monument-2.html',
        'Taj Mahal': 'monument-3.html',
        'Machu Picchu': 'monument-4.html',
        'Stonehenge': 'monument-5.html'
    };
    
    // Open modal on gallery item click (but not on name link)
    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Don't open modal if clicking on the name link
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            e.preventDefault();
            const img = this.querySelector('img');
            const name = this.querySelector('.monument-name');
            
            if (img && modalImage) {
                modalImage.src = img.src.replace('-thumb', '');
                modalImage.alt = img.alt;
            }
            
            if (name && modalTitle) {
                // Get text content, removing link text if present
                const nameText = name.textContent.trim();
                modalTitle.textContent = nameText;
                
                // Add link to detail page
                if (modalLink) {
                    const monumentName = item.getAttribute('data-name');
                    const pageUrl = monumentPages[monumentName];
                    if (pageUrl) {
                        modalLink.innerHTML = `<a href="${pageUrl}" style="color: #3498db; font-weight: bold;">View Full Details →</a>`;
                    } else {
                        modalLink.innerHTML = '';
                    }
                }
            }
            
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal functions
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

// Feature 2: Feedback Form Validation and localStorage
function initFeedbackForm() {
    const form = document.getElementById('feedback-form');
    if (!form) return;
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('success-message');
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validation functions
    function validateName() {
        const name = nameInput.value.trim();
        const errorEl = nameInput.parentElement.querySelector('.error-message');
        
        if (name === '') {
            showError(nameInput, errorEl, 'Name is required');
            return false;
        } else {
            clearError(nameInput, errorEl);
            return true;
        }
    }
    
    function validateEmail() {
        const email = emailInput.value.trim();
        const errorEl = emailInput.parentElement.querySelector('.error-message');
        
        if (email === '') {
            showError(emailInput, errorEl, 'Email is required');
            return false;
        } else if (!emailRegex.test(email)) {
            showError(emailInput, errorEl, 'Please enter a valid email address');
            return false;
        } else {
            clearError(emailInput, errorEl);
            return true;
        }
    }
    
    function validateMessage() {
        const message = messageInput.value.trim();
        const errorEl = messageInput.parentElement.querySelector('.error-message');
        const minLength = 10;
        
        if (message === '') {
            showError(messageInput, errorEl, 'Message is required');
            return false;
        } else if (message.length < minLength) {
            showError(messageInput, errorEl, `Message must be at least ${minLength} characters long`);
            return false;
        } else {
            clearError(messageInput, errorEl);
            return true;
        }
    }
    
    function showError(input, errorEl, message) {
        input.parentElement.classList.add('error');
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.add('show');
        }
    }
    
    function clearError(input, errorEl) {
        input.parentElement.classList.remove('error');
        if (errorEl) {
            errorEl.classList.remove('show');
        }
    }
    
    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isMessageValid) {
            // Get form values
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            
            // Create feedback object
            const feedback = {
                name: name,
                email: email,
                message: message,
                timestamp: new Date().toISOString()
            };
            
            // Get existing feedback from localStorage
            let feedbacks = [];
            const storedFeedbacks = localStorage.getItem('feedbacks');
            if (storedFeedbacks) {
                try {
                    feedbacks = JSON.parse(storedFeedbacks);
                } catch (e) {
                    feedbacks = [];
                }
            }
            
            // Add new feedback
            feedbacks.push(feedback);
            
            // Save to localStorage
            localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
            
            // Prepare mailto link
            const adminEmail = 'ibrahimnajem842@gmail.com';
            const subject = encodeURIComponent('Feedback from ' + name);
            const body = encodeURIComponent(
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n' +
                'Message:\n' + message
            );
            const mailtoLink = 'mailto:' + adminEmail + '?subject=' + subject + '&body=' + body;
            
            // Open mailto link
            window.location.href = mailtoLink;
            
            // Show success message
            if (successMessage) {
                successMessage.classList.add('show');
                successMessage.textContent = 'Thank you for your feedback! Your message has been saved to localStorage and your email client should open.';
            }
            
            // Reset form
            form.reset();
            
            // Scroll to success message
            if (successMessage) {
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            
            // Hide success message after 8 seconds (longer since email client opens)
            setTimeout(() => {
                if (successMessage) {
                    successMessage.classList.remove('show');
                }
            }, 8000);
        }
    });
}

