function toggleCollapse(sectionId) {
    const content = document.getElementById(sectionId);
    const toggleIcon = document.getElementById(sectionId + '-toggle');
    if (!content || !toggleIcon) return;
    const isOpen = content.classList.contains('open');
    if (isOpen) {
        content.classList.remove('open');
        toggleIcon.classList.add('collapsed');
    } else {
        content.classList.add('open');
        toggleIcon.classList.remove('collapsed');
    }
}

// Function to create an app card
function createAppCard(app) {
    const card = document.createElement('a');
    card.href = app.url;
    card.className = 'app-card';
    
    // Add target="_blank" for external links
    if (app.url.startsWith('http')) {
        card.target = '_blank';
    }
    
    // Add badge if requires authentication
    if (app.requiresAuth) {
        const badge = document.createElement('span');
        badge.className = 'app-badge';
        badge.textContent = app.authType;
        card.appendChild(badge);
    }
    
    // App icon
    const iconDiv = document.createElement('div');
    iconDiv.className = 'app-icon';
    const img = document.createElement('img');
    img.src = app.logo;
    img.alt = app.name + ' Logo';
    iconDiv.appendChild(img);
    card.appendChild(iconDiv);
    
    // App info
    const infoDiv = document.createElement('div');
    infoDiv.className = 'app-info';
    const title = document.createElement('h3');
    title.textContent = app.name;
    const description = document.createElement('p');
    description.textContent = app.description;
    infoDiv.appendChild(title);
    infoDiv.appendChild(description);
    card.appendChild(infoDiv);
    
    return card;
}

// Function to load apps from JSON
async function loadApps() {
    try {
        const response = await fetch('resources/apps.json');
        const data = await response.json();

        // Load home apps
        const homeGrid = document.getElementById('home-apps-grid');
        if (homeGrid) {
            data.public.slice(0,4).forEach(app => {
                homeGrid.appendChild(createAppCard(app));
            });
        }
        
        // Load public apps
        const publicGrid = document.getElementById('public-apps-grid');
        if (publicGrid) {
            data.public.forEach(app => {
                publicGrid.appendChild(createAppCard(app));
            });
        }
        
        // Load private apps
        const privateGrid = document.getElementById('private-apps-grid');
        if (privateGrid) {
            data.private.forEach(app => {
                privateGrid.appendChild(createAppCard(app));
            });
        }
        
        // Load admin apps
        const adminGrid = document.getElementById('admin-apps-grid');
        if (adminGrid) {
            data.admin.forEach(app => {
                adminGrid.appendChild(createAppCard(app));
            });
        }
    console.log("fetched data");
    } catch (error) {
        console.error('Error loading apps:', error);
    }
}

// Load apps when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadApps);
} else {
    loadApps();
}