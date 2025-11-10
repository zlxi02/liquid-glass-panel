// ============================================
// LIQUID GLASS PANEL - JavaScript
// ============================================

// DOM Elements
const createButton = document.getElementById('createButton');
const modalOverlay = document.getElementById('modalOverlay');
const closeButton = document.getElementById('closeButton');
const liquidGlassCard = document.querySelector('.liquid-glass-card');
const specularHighlight = document.querySelector('.specular-highlight');
const sendButton = document.querySelector('.send-button');
const notificationToast = document.getElementById('notificationToast');
const toastCloseButton = document.getElementById('toastCloseButton');
const issueTitleInput = document.getElementById('issue-title');
const toastIssueName = document.getElementById('toastIssueName');

// Initialize
console.log('Liquid Glass Panel initialized');

// ============================================
// MODAL FUNCTIONALITY
// ============================================

// Open modal when create button is clicked
createButton.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus on title input after modal animation
    setTimeout(() => {
        document.getElementById('issue-title').focus();
    }, 300); // Match modal animation duration
});

// Close modal when close button is clicked
closeButton.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
});

// Close modal when clicking outside the card (on overlay)
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ============================================
// NOTIFICATION TOAST FUNCTIONALITY
// ============================================

// Show notification when "Create issue" is clicked
sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Get the issue title from input
    const issueTitle = issueTitleInput.value.trim() || 'New Issue title';
    
    // Update toast with issue title
    toastIssueName.textContent = issueTitle;
    
    // Close the modal
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Show the notification toast
    setTimeout(() => {
        notificationToast.classList.add('show');
    }, 300);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        notificationToast.classList.remove('show');
    }, 5300);
    
    // Clear the form
    issueTitleInput.value = '';
    document.getElementById('issue-description').value = '';
});

// Close notification when X is clicked
toastCloseButton.addEventListener('click', () => {
    notificationToast.classList.remove('show');
});

// Placeholder for future interactive features:
// - Dynamic specular highlight positioning (mouse tracking)
// - Button lifting effects
// - Advanced hover interactions

