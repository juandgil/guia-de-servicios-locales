document.addEventListener('DOMContentLoaded', function() {
    // Obtener el ID del servicio de la URL
    const serviceId = getQueryParam('id');
    
    if (!serviceId) {
        showError('No se especificó un servicio');
        return;
    }
    
    // Obtener y mostrar el detalle del servicio
    loadServiceDetail(serviceId);
    
    // Configurar el formulario de registro de servicio
    setupServiceRegistrationForm();
    
    // Configurar el formulario de reseñas
    setupReviewForm();
});

// Cargar y mostrar el detalle del servicio
function loadServiceDetail(id) {
    const service = getServiceById(id);
    
    if (!service) {
        showError('Servicio no encontrado');
        return;
    }
    
    // Actualizar el título de la página
    document.title = `${service.name} - Guía de Servicios Locales`;
    
    // Actualizar los elementos con los datos del servicio
    updateBasicInfo(service);
    updateGallery(service);
    updateServiceDetails(service);
    updateSchedule(service);
    updateServiceList(service);
    updateReviews(service);
    
    // Cargar servicios relacionados
    loadRelatedServices(service.id, service.category);
}

// Actualizar la información básica del servicio
function updateBasicInfo(service) {
    // Actualizar breadcrumb
    const breadcrumb = document.getElementById('service-name-breadcrumb');
    if (breadcrumb) {
        breadcrumb.textContent = service.name;
    }
    
    // Actualizar nombre
    const nameElement = document.getElementById('service-name');
    if (nameElement) {
        nameElement.textContent = service.name;
    }
    
    // Actualizar calificación
    const ratingStars = document.getElementById('rating-stars');
    if (ratingStars) {
        ratingStars.innerHTML = generateStarRating(service.rating);
    }
    
    const ratingValue = document.getElementById('rating-value');
    if (ratingValue) {
        ratingValue.textContent = service.rating.toFixed(1);
    }
    
    const ratingCount = document.getElementById('rating-count');
    if (ratingCount) {
        ratingCount.textContent = `(${service.reviewCount} opiniones)`;
    }
    
    // Actualizar la descripción
    const description = document.getElementById('service-description');
    if (description) {
        description.textContent = service.longDescription || service.description;
    }
    
    // Actualizar información de contacto
    const location = document.getElementById('service-location');
    if (location) {
        location.textContent = service.location;
    }
    
    const phone = document.getElementById('service-phone');
    if (phone) {
        phone.textContent = service.phone;
    }
    
    const email = document.getElementById('service-email');
    if (email) {
        email.textContent = service.email;
    }
    
    const website = document.getElementById('service-website');
    if (website) {
        website.textContent = service.website;
        website.href = `https://${service.website}`;
    }
    
    // Actualizar badge de categoría
    const categoryBadge = document.getElementById('category-badge');
    if (categoryBadge) {
        categoryBadge.textContent = service.categoryName;
    }
}

// Actualizar la galería de imágenes
function updateGallery(service) {
    const mainImage = document.getElementById('main-service-image');
    if (mainImage) {
        mainImage.src = service.image || 'img/service-placeholder.jpg';
        mainImage.alt = service.name;
    }
    
    const thumbnailsContainer = document.getElementById('image-thumbnails');
    if (thumbnailsContainer && service.images && service.images.length > 0) {
        thumbnailsContainer.innerHTML = '';
        
        service.images.forEach((image, index) => {
            const col = document.createElement('div');
            col.className = 'col-3 mb-3';
            
            col.innerHTML = `
                <img src="${image}" class="img-fluid rounded thumbnail" alt="${service.name} - Imagen ${index + 1}" onclick="setMainImage('${image}', '${service.name}')">
            `;
            
            thumbnailsContainer.appendChild(col);
        });
    }
}

// Función para cambiar la imagen principal
function setMainImage(src, alt) {
    const mainImage = document.getElementById('main-service-image');
    if (mainImage) {
        mainImage.src = src;
        mainImage.alt = alt;
    }
}

// Actualizar detalles del servicio
function updateServiceDetails(service) {
    // Aquí puedes agregar más actualizaciones de detalles si es necesario
}

// Actualizar el horario de atención
function updateSchedule(service) {
    const scheduleContainer = document.getElementById('service-schedule');
    
    if (!scheduleContainer || !service.schedule) return;
    
    scheduleContainer.innerHTML = '';
    
    const days = {
        monday: 'Lunes',
        tuesday: 'Martes',
        wednesday: 'Miércoles',
        thursday: 'Jueves',
        friday: 'Viernes',
        saturday: 'Sábado',
        sunday: 'Domingo'
    };
    
    for (const [day, hours] of Object.entries(service.schedule)) {
        const dayTranslated = days[day] || day;
        
        const row = document.createElement('div');
        row.className = 'row schedule-row';
        
        row.innerHTML = `
            <div class="col-md-3 day">${dayTranslated}</div>
            <div class="col-md-9 hours">${hours}</div>
        `;
        
        scheduleContainer.appendChild(row);
    }
}

// Actualizar la lista de servicios específicos
function updateServiceList(service) {
    const serviceListContainer = document.getElementById('service-list');
    
    if (!serviceListContainer || !service.services) return;
    
    serviceListContainer.innerHTML = '';
    
    service.services.forEach(specificService => {
        const col = document.createElement('div');
        col.className = 'col-md-6 mb-3';
        
        col.innerHTML = `
            <div class="service-item p-3 rounded">
                <h5>${specificService.name}</h5>
                <p>${specificService.description}</p>
                <div class="price">${specificService.price}</div>
            </div>
        `;
        
        serviceListContainer.appendChild(col);
    });
}

// Actualizar la sección de reseñas
function updateReviews(service) {
    // Actualizar resumen de calificaciones
    const overallRating = document.querySelector('.overall-rating .rating-value');
    if (overallRating) {
        overallRating.textContent = service.rating.toFixed(1);
    }
    
    const totalReviews = document.querySelector('.overall-rating .total-reviews');
    if (totalReviews) {
        totalReviews.textContent = `${service.reviewCount} opiniones`;
    }
    
    const stars = document.querySelector('.overall-rating .stars');
    if (stars) {
        stars.innerHTML = generateStarRating(service.rating);
    }
    
    // Actualizar lista de reseñas
    const reviewsContainer = document.getElementById('reviews-container');
    
    if (!reviewsContainer || !service.reviews) return;
    
    reviewsContainer.innerHTML = '';
    
    service.reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item p-3 mb-3';
        
        reviewItem.innerHTML = `
            <div class="d-flex justify-content-between">
                <div class="reviewer-info">
                    <h5 class="reviewer-name">${review.name}</h5>
                    <div class="review-date">${review.date}</div>
                </div>
                <div class="review-rating">
                    ${generateStarRating(review.rating)}
                </div>
            </div>
            <p class="review-text mt-2">${review.comment}</p>
        `;
        
        reviewsContainer.appendChild(reviewItem);
    });
}

// Cargar servicios relacionados
function loadRelatedServices(serviceId, category) {
    const relatedServices = getRelatedServices(serviceId, category);
    const relatedContainer = document.getElementById('related-services');
    
    if (!relatedContainer) return;
    
    relatedContainer.innerHTML = '';
    
    if (relatedServices.length === 0) {
        relatedContainer.innerHTML = '<div class="col-12"><p class="text-center">No hay servicios relacionados disponibles.</p></div>';
        return;
    }
    
    relatedServices.forEach(service => {
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
        
        relatedContainer.appendChild(col);
    });
}

// Configurar el formulario de reseñas
function setupReviewForm() {
    const form = document.getElementById('review-form');
    const ratingStars = document.querySelectorAll('.rating-select i');
    
    if (!form || !ratingStars.length) return;
    
    // Configurar las estrellas de calificación
    ratingStars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            highlightStars(rating);
        });
        
        star.addEventListener('mouseout', function() {
            const currentRating = parseInt(document.getElementById('review-rating').value);
            highlightStars(currentRating);
        });
        
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            document.getElementById('review-rating').value = rating;
            highlightStars(rating);
        });
    });
    
    // Manejar envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('reviewer-name').value;
        const email = document.getElementById('reviewer-email').value;
        const rating = parseInt(document.getElementById('review-rating').value);
        const text = document.getElementById('review-text').value;
        
        if (!name || !email || rating === 0 || !text) {
            alert('Por favor complete todos los campos y seleccione una calificación.');
            return;
        }
        
        // En un caso real, enviaríamos esta reseña al backend
        // Por ahora, mostraremos un mensaje de éxito
        
        alert('¡Gracias por tu opinión! Tu reseña ha sido enviada correctamente.');
        
        // Cerrar el modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('reviewModal'));
        modal.hide();
        
        // Limpiar el formulario
        form.reset();
        highlightStars(0);
    });
}

// Función para resaltar estrellas según la calificación
function highlightStars(rating) {
    const stars = document.querySelectorAll('.rating-select i');
    
    stars.forEach((star, index) => {
        if (index < rating) {
            star.className = 'fas fa-star active';
        } else {
            star.className = 'far fa-star';
        }
    });
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

// Mostrar mensaje de error
function showError(message) {
    const container = document.querySelector('.container');
    
    if (!container) return;
    
    container.innerHTML = `
        <div class="alert alert-danger my-5" role="alert">
            <h4 class="alert-heading">Error</h4>
            <p>${message}</p>
            <hr>
            <p class="mb-0">
                <a href="gallery.html" class="alert-link">Volver a la galería</a>
            </p>
        </div>
    `;
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