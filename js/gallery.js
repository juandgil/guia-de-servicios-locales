document.addEventListener('DOMContentLoaded', function() {
    // Inicializar los servicios
    initializeGallery();
    
    // Configurar filtros
    setupFilters();
    
    // Configurar cambio de vista (grid/list)
    setupViewToggle();
    
    // Configurar búsqueda
    setupSearch();
    
    // Configurar formulario de registro
    setupServiceRegistrationForm();
});

// Variables globales
let currentServices = [];
let currentCategory = 'todos';
let currentRating = 'todos';
let currentView = 'grid';

// Inicializar la galería
function initializeGallery() {
    // Obtener parámetros de la URL
    const categoryParam = getQueryParam('category');
    const searchParam = getQueryParam('search');
    
    if (categoryParam) {
        currentCategory = categoryParam;
        
        // Seleccionar la opción en el filtro
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.value = currentCategory;
        }
    }
    
    if (searchParam) {
        // Si hay un término de búsqueda, realizarla
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.value = searchParam;
            performSearch(searchParam);
            return;
        }
    }
    
    // Si no hay búsqueda, cargar por categoría
    loadServicesByCategory(currentCategory);
}

// Cargar servicios por categoría
function loadServicesByCategory(category) {
    currentServices = getServicesByCategory(category);
    filterServicesByRating(currentRating);
    
    updateResultCount();
    displayServices();
}

// Filtrar servicios por calificación
function filterServicesByRating(rating) {
    if (rating === 'todos') {
        // No filtrar, mantener todos los servicios
        return;
    }
    
    const minRating = parseFloat(rating);
    currentServices = currentServices.filter(service => service.rating >= minRating);
    
    updateResultCount();
    displayServices();
}

// Mostrar los servicios en la galería
function displayServices() {
    const galleryContainer = document.getElementById('gallery-container');
    
    if (!galleryContainer) return;
    
    galleryContainer.innerHTML = '';
    
    if (currentServices.length === 0) {
        galleryContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="lead">No se encontraron servicios que coincidan con tu búsqueda.</p>
                <button class="btn btn-primary" onclick="resetFilters()">Restablecer filtros</button>
            </div>
        `;
        return;
    }
    
    currentServices.forEach(service => {
        const col = document.createElement('div');
        
        if (currentView === 'grid') {
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
        } else {
            // Vista de lista
            col.className = 'col-12 mb-3 service-card';
            
            col.innerHTML = `
                <div class="card">
                    <div class="row g-0">
                        <div class="col-md-3">
                            <img src="${service.image || 'img/service-placeholder.jpg'}" class="img-fluid rounded-start h-100 w-100" style="object-fit: cover;" alt="${service.name}">
                            <div class="category-badge">${service.categoryName}</div>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">${service.name}</h5>
                                    <div class="rating">
                                        ${generateStarRating(service.rating)}
                                        <span class="ms-1">${service.rating.toFixed(1)}</span>
                                    </div>
                                </div>
                                <p class="card-text">${service.description}</p>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                    <small class="text-muted"><i class="fas fa-map-marker-alt me-1"></i> ${service.location}</small>
                                    <a href="detail.html?id=${service.id}" class="btn btn-sm btn-outline-primary">Ver detalles</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        galleryContainer.appendChild(col);
    });
    
    // Aplicar imágenes simuladas a los nuevos elementos creados
    if (typeof mockServiceImages === 'function') {
        mockServiceImages();
    }
}

// Configurar los filtros
function setupFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const ratingFilter = document.getElementById('rating-filter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            currentCategory = this.value;
            loadServicesByCategory(currentCategory);
        });
    }
    
    if (ratingFilter) {
        ratingFilter.addEventListener('change', function() {
            currentRating = this.value;
            loadServicesByCategory(currentCategory);
        });
    }
}

// Configurar cambio de vista
function setupViewToggle() {
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');
    
    if (gridViewButton && listViewButton) {
        gridViewButton.addEventListener('click', function() {
            currentView = 'grid';
            gridViewButton.classList.add('active');
            listViewButton.classList.remove('active');
            displayServices();
        });
        
        listViewButton.addEventListener('click', function() {
            currentView = 'list';
            listViewButton.classList.add('active');
            gridViewButton.classList.remove('active');
            displayServices();
        });
    }
}

// Configurar búsqueda
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    performSearch(query);
                }
                e.preventDefault();
            }
        });
    }
}

// Realizar búsqueda
function performSearch(query) {
    currentServices = searchServices(query);
    
    // Actualizar la UI para reflejar que estamos mostrando resultados de búsqueda
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.value = 'todos';
        currentCategory = 'todos';
    }
    
    const ratingFilter = document.getElementById('rating-filter');
    if (ratingFilter) {
        ratingFilter.value = 'todos';
        currentRating = 'todos';
    }
    
    updateResultCount(query);
    displayServices();
}

// Actualizar el contador de resultados
function updateResultCount(searchQuery = null) {
    const resultsCount = document.getElementById('results-count');
    
    if (!resultsCount) return;
    
    if (searchQuery) {
        resultsCount.textContent = `${currentServices.length} resultado(s) para "${searchQuery}"`;
    } else if (currentCategory === 'todos') {
        resultsCount.textContent = `Mostrando todos los servicios (${currentServices.length})`;
    } else {
        const categoryName = document.querySelector(`#category-filter option[value="${currentCategory}"]`).textContent;
        resultsCount.textContent = `Mostrando servicios de ${categoryName} (${currentServices.length})`;
    }
}

// Restablecer filtros
function resetFilters() {
    currentCategory = 'todos';
    currentRating = 'todos';
    
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.value = 'todos';
    }
    
    const ratingFilter = document.getElementById('rating-filter');
    if (ratingFilter) {
        ratingFilter.value = 'todos';
    }
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    loadServicesByCategory('todos');
}

// Configurar formulario de registro de servicio
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