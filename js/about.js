document.addEventListener('DOMContentLoaded', function() {
    // Configurar el formulario de contacto
    setupContactForm();
    
    // Configurar el formulario de registro de servicio
    setupServiceRegistrationForm();
    
    // Animaciones en elementos estadísticos
    setupStatsAnimations();
});

// Configurar el formulario de contacto
function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los valores de los campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validar los campos
        if (!name || !email || !subject || !message) {
            showAlert('error', 'Por favor completa todos los campos del formulario.');
            return;
        }
        
        // Validar formato de email
        if (!isValidEmail(email)) {
            showAlert('error', 'Por favor ingresa un correo electrónico válido.');
            return;
        }
        
        // En un caso real, aquí enviaríamos los datos al servidor
        // Por ahora, mostraremos un mensaje de éxito como simulación
        
        showAlert('success', '¡Gracias por tu mensaje! Te responderemos lo antes posible.');
        
        // Limpiar el formulario
        form.reset();
    });
}

// Validar formato de email
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Mostrar alerta
function showAlert(type, message) {
    // Crear elemento de alerta
    const alertElement = document.createElement('div');
    alertElement.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show mt-3`;
    alertElement.setAttribute('role', 'alert');
    
    alertElement.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Buscar el formulario
    const form = document.getElementById('contact-form');
    
    if (form) {
        // Insertar la alerta después del formulario
        form.parentNode.insertBefore(alertElement, form.nextSibling);
        
        // Eliminar la alerta después de 5 segundos
        setTimeout(() => {
            alertElement.classList.remove('show');
            setTimeout(() => {
                alertElement.remove();
            }, 300);
        }, 5000);
    }
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

// Configurar animaciones para estadísticas
function setupStatsAnimations() {
    const statsSection = document.querySelector('.stats-section');
    
    if (!statsSection) return;
    
    // Detectar cuando el elemento es visible en el viewport
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            // Iniciar animación de números
            animateNumbers();
            // Desconectar observer después de iniciar la animación
            observer.disconnect();
        }
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
}

// Animar los números de estadísticas
function animateNumbers() {
    const numberElements = document.querySelectorAll('.stat-number');
    
    numberElements.forEach(element => {
        // Obtener el valor final (sin formatear)
        const finalValue = element.textContent.replace(/[^\d]/g, '');
        element.textContent = '0';
        
        // Animar desde 0 hasta el valor final
        let startValue = 0;
        const increment = Math.ceil(parseInt(finalValue) / 40); // 40 pasos para la animación
        const duration = 1500; // 1.5 segundos
        const interval = duration / 40;
        
        const timer = setInterval(() => {
            startValue += increment;
            if (startValue > parseInt(finalValue)) {
                element.textContent = element.textContent.includes('+') ? 
                    parseInt(finalValue).toLocaleString() + '+' :
                    parseInt(finalValue).toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = element.textContent.includes('+') ? 
                    parseInt(startValue).toLocaleString() + '+' :
                    parseInt(startValue).toLocaleString();
            }
        }, interval);
    });
} 