function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

function showRelationshipQuestion() {
    showSection('relationship-question');
}

function handleYes() {
    showSection('yes-response');
}

function handleNo() {
    showSection('no-response');
}

function handleSubmit(event) {
    event.preventDefault();
    
    const contactInfo = document.getElementById('contact').value.trim();
    
    // Send the form data
    sendFormData(contactInfo);
    
    // Show thank you message
    showSection('thank-you');
}

function sendFormData(contactInfo) {
    // METHOD 1: Using Formspree (recommended - easy setup)
    // Sign up at formspree.io and replace YOUR_FORM_ID with your actual form ID
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
    
    fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contact: contactInfo || '(No contact info provided)',
            timestamp: new Date().toISOString()
        })
    }).catch(error => {
        console.error('Error sending form:', error);
    });
    
    // METHOD 2: Using email (requires backend or service)
    // Uncomment and configure if you prefer email
    /*
    const mailtoLink = `mailto:your.email@example.com?subject=New Contact from NFC Card&body=Contact Info: ${encodeURIComponent(contactInfo || 'None provided')}`;
    window.location.href = mailtoLink;
    */
}
