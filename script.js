// Load wedding data from JSON file
async function loadWeddingData() {
    try {
        const response = await fetch('wedding-data.json');
        const data = await response.json();
        populateWebsite(data);
        startCountdown(data.wedding.dateTime);
    } catch (error) {
        console.error('Error loading wedding data:', error);
    }
}

function populateWebsite(data) {
    // Header
    document.getElementById('coupleNames').textContent = data.wedding.coupleNames;
    document.getElementById('weddingDate').textContent = formatDate(data.wedding.dateTime);

    // Our Story
    document.getElementById('storyContent').textContent = data.story;

    // Schedule
    const scheduleGrid = document.getElementById('scheduleGrid');
    scheduleGrid.innerHTML = data.schedule.map(event => `
        <div class="event-card">
            <h3>${event.title}</h3>
            <p class="time">${event.time}</p>
            <p>${event.description}</p>
            ${event.location ? `<p style="margin-top: 1rem;"><strong>📍 ${event.location}</strong></p>` : ''}
        </div>
    `).join('');

    // Location
    const locationContent = document.getElementById('locationContent');
    locationContent.innerHTML = data.locations.map(location => `
        <div class="location-card">
            <h3>${location.name}</h3>
            <div class="location-details">
                <p><strong>Address:</strong> ${location.address}</p>
                ${location.parking ? `<p><strong>Parking:</strong> ${location.parking}</p>` : ''}
                ${location.notes ? `<p><strong>Note:</strong> ${location.notes}</p>` : ''}
            </div>
            ${location.googleMapsUrl ? `<a href="${location.googleMapsUrl}" target="_blank" class="btn">Get Directions</a>` : ''}
            ${location.googleMapsEmbedUrl ? `
                <div class="map-container">
                    <iframe 
                        src="${location.googleMapsEmbedUrl}" 
                        width="100%" 
                        height="100%" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy">
                    </iframe>
                </div>
            ` : ''}
        </div>
    `).join('');

    // FAQ
    const faqContent = document.getElementById('faqContent');
    faqContent.innerHTML = data.faq.map(item => `
        <div class="faq-item">
            <h4>${item.question}</h4>
            <p>${item.answer}</p>
        </div>
    `).join('');

    // Contact
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.innerHTML = `
        <h3>Questions?</h3>
        <p>Feel free to reach out to us!</p>
        ${data.contact.map(person => `
            <p style="margin-top: 1rem;">
                <strong>${person.name}</strong><br>
                ${person.email ? `Email: <a href="mailto:${person.email}" style="color: var(--secondary-color);">${person.email}</a><br>` : ''}
                ${person.phone ? `Phone: ${person.phone}` : ''}
            </p>
        `).join('')}
    `;

    // Footer
    document.getElementById('footerText').textContent = data.footer;
}

function formatDate(dateTimeString) {
    const date = new Date(dateTimeString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function startCountdown(weddingDateTime) {
    const weddingDate = new Date(weddingDateTime).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<div class="countdown-item"><div class="number">❤️</div><div class="label">The Day is Here!</div></div>';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    loadWeddingData();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
