document.addEventListener('DOMContentLoaded', function() {
    // Cargar los servicios destacados
    loadFeaturedServices();
    
    // Cargar las categorías
    loadCategories();
    
    // Manejar el formulario de búsqueda
    setupSearchForm();
    
    // Manejar el formulario de registro de servicio
    setupServiceRegistrationForm();
});

// Función para cargar los servicios destacados
function loadFeaturedServices() {
    const featuredServices = getFeaturedServices();
    const featuredContainer = document.getElementById('featured-services');
    
    if (!featuredContainer) return;
    
    featuredContainer.innerHTML = '';
    
    featuredServices.forEach(service => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4 service-card';
        
        col.innerHTML = `
            <div class="card h-100">
                <img src="${service.image || 'img/service-placeholder.jpg'}" class="card-img-top" alt="${service.name}">
                <div class="category-badge">${service.categoryName}</div>
                <div class="card-body">
                    <h5 class="card-title">${service.name}</h5>
                    <div class="rating mb-2">
                        ${generateStarRating(service.rating)}
                        <span class="ms-1">${service.rating.toFixed(1)}</span>
                    </div>
                    <p class="card-text">${service.description}</p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center">
                    <small class="text-muted"><i class="fas fa-map-marker-alt me-1"></i> ${service.location}</small>
                    <a href="detail.html?id=${service.id}" class="btn btn-sm btn-outline-primary">Ver detalles</a>
                </div>
            </div>
        `;
        
        featuredContainer.appendChild(col);
    });
}

// Función para cargar las categorías
function loadCategories() {
    const categories = getAllCategories();
    const categoriesContainer = document.getElementById('categories-container');
    
    if (!categoriesContainer) return;
    
    categoriesContainer.innerHTML = '';
    
    categories.forEach(category => {
        const col = document.createElement('div');
        col.className = 'col-md-3 col-sm-6 mb-4';
        
        col.innerHTML = `
            <div class="category-card">
                <div class="category-icon">
                    <i class="${category.icon}"></i>
                </div>
                <h4>${category.name}</h4>
                <p>Profesionales verificados listos para ayudarte.</p>
                <a href="gallery.html?category=${category.id}" class="btn btn-sm btn-outline-primary">Ver servicios</a>
            </div>
        `;
        
        categoriesContainer.appendChild(col);
    });
}

// Configurar el formulario de búsqueda
function setupSearchForm() {
    const searchForm = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-container input');
    const searchButton = document.querySelector('.btn-search');
    
    if (!searchForm || !searchInput || !searchButton) return;
    
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `gallery.html?search=${encodeURIComponent(query)}`;
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `gallery.html?search=${encodeURIComponent(query)}`;
            }
            e.preventDefault();
        }
    });
}

// Configurar el formulario de registro de servicio
function setupServiceRegistrationForm() {
    const form = document.getElementById('service-registration-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // En un caso real, aquí enviaríamos los datos al servidor
        // Por ahora, mostraremos un mensaje de éxito como simulación
        
        const businessName = document.getElementById('business-name').value;
        const category = document.getElementById('category').value;
        const email = document.getElementById('email').value;
        
        // Validación básica
        if (!businessName || !category || !email) {
            alert('Por favor complete todos los campos obligatorios.');
            return;
        }
        
        // Simulación de envío exitoso
        alert(`¡Gracias por registrar tu servicio "${businessName}"! Revisaremos tu información y nos pondremos en contacto contigo pronto.`);
        
        // Cerrar el modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
        modal.hide();
        
        // Limpiar el formulario
        form.reset();
    });
}

// Función para generar las estrellas de calificación
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Estrellas completas
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Media estrella si corresponde
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Estrellas vacías
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Función para obtener parámetros de la URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
} 