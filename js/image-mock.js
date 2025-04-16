// Archivo para simular imágenes con servicios de placeholder
document.addEventListener('DOMContentLoaded', function() {
    // Reemplazar imágenes de servicios con placeholders
    mockServiceImages();
    
    // Reemplazar otras imágenes faltantes
    mockOtherImages();
});

// Función para reemplazar imágenes de servicios
// Esta función se exporta para que pueda ser usada por otros scripts
window.mockServiceImages = function() {
    // Mapa de categorías a temas de imágenes
    const categoryThemes = {
        'electricistas': 'tech',
        'mecanicos': 'car',
        'musicos': 'music',
        'plomeros': 'work',
        'carpinteros': 'wood',
        'jardineros': 'nature',
        'pintores': 'art',
        'limpieza': 'clean'
    };
    
    // Mapa de colores por categoría (colores pastel agradables)
    const categoryColors = {
        'electricistas': '#F9D923',   // amarillo
        'mecanicos': '#36AE7C',       // verde
        'musicos': '#187498',         // azul
        'plomeros': '#4E9F3D',        // verde oscuro
        'carpinteros': '#D57E7E',     // rosa
        'jardineros': '#A0D995',      // verde claro
        'pintores': '#FD8A8A',        // rojo claro
        'limpieza': '#98DDCA',        // turquesa
        'default': '#7A86B6'          // azul grisáceo (predeterminado)
    };
    
    // Reemplazar imágenes en cards de servicios
    const serviceCards = document.querySelectorAll('.service-card img');
    serviceCards.forEach(img => {
        const card = img.closest('.service-card');
        let category = '';
        
        // Intentar obtener la categoría
        const categoryBadge = card.querySelector('.category-badge');
        if (categoryBadge) {
            const badgeText = categoryBadge.textContent.toLowerCase();
            
            // Mapear el texto del badge a una categoría
            if (badgeText.includes('electric')) category = 'electricistas';
            else if (badgeText.includes('mecánico')) category = 'mecanicos';
            else if (badgeText.includes('músic')) category = 'musicos';
            else if (badgeText.includes('plomer')) category = 'plomeros';
            else if (badgeText.includes('carpinter')) category = 'carpinteros';
            else if (badgeText.includes('jardiner')) category = 'jardineros';
            else if (badgeText.includes('pintor')) category = 'pintores';
            else if (badgeText.includes('limpieza')) category = 'limpieza';
            else category = 'default';
        }
        
        // Si no se pudo determinar la categoría, usar un valor predeterminado
        const theme = categoryThemes[category] || 'business';
        const color = categoryColors[category] || categoryColors.default;
        const id = Math.floor(Math.random() * 1000);
        
        // Intentar con Unsplash primero
        img.src = `https://source.unsplash.com/featured/?${theme},service&sig=${id}`;
        img.onerror = function() {
            // Si Unsplash falla, usar picsum.photos 
            this.src = `https://picsum.photos/seed/${theme}${id}/600/400`;
            
            // Si picsum falla, crear un contenedor coloreado con texto
            this.onerror = function() {
                createColorBlock(this, 600, 400, color, category);
            };
        };
    });
    
    // Reemplazar imágenes en la página de detalle
    const mainServiceImage = document.getElementById('main-service-image');
    if (mainServiceImage) {
        const id = Math.floor(Math.random() * 1000);
        const category = getQueryParam('category') || 'default';
        const theme = categoryThemes[category] || 'business';
        const color = categoryColors[category] || categoryColors.default;
        
        mainServiceImage.src = `https://source.unsplash.com/featured/?${theme},service&sig=${id}`;
        mainServiceImage.onerror = function() {
            // Si falla la carga, usar picsum.photos
            this.src = `https://picsum.photos/seed/${theme}${id}/800/600`;
            
            // Si picsum falla, crear un contenedor coloreado con texto
            this.onerror = function() {
                createColorBlock(this, 800, 600, color, "Imagen Principal");
            };
        };
        
        // Reemplazar también las miniaturas
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumb, index) => {
            const thumbId = Math.floor(Math.random() * 1000) + index;
            thumb.src = `https://source.unsplash.com/featured/?${theme},detail&sig=${thumbId}`;
            thumb.onerror = function() {
                // Si falla la carga, usar picsum.photos
                this.src = `https://picsum.photos/seed/${theme}${thumbId}/150/150`;
                
                // Si picsum falla, crear un contenedor coloreado con texto
                this.onerror = function() {
                    createColorBlock(this, 150, 150, color, `${index + 1}`);
                };
            };
        });
    }
}

// Función para reemplazar otras imágenes del sitio
function mockOtherImages() {
    // Imagen de "Sobre Nosotros"
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        aboutImage.src = 'https://source.unsplash.com/featured/?team,office';
        aboutImage.onerror = function() {
            // Si falla la carga, usar picsum.photos
            this.src = 'https://picsum.photos/seed/team/600/400';
            
            // Si picsum falla, crear un contenedor coloreado con texto
            this.onerror = function() {
                createColorBlock(this, 600, 400, '#7A86B6', "Nuestro Equipo");
            };
        };
    }
    
    // Imagen del equipo
    const memberImage = document.querySelector('.member-image img');
    if (memberImage) {
        memberImage.src = 'https://source.unsplash.com/featured/?business,person';
        memberImage.onerror = function() {
            // Si falla la carga, usar picsum.photos
            this.src = 'https://picsum.photos/seed/person/300/300';
            
            // Si picsum falla, crear un contenedor coloreado con texto
            this.onerror = function() {
                createColorBlock(this, 300, 300, '#98DDCA', "Juan David Gil", true);
            };
        };
    }
}

// Función para crear un bloque de color como respaldo cuando fallan las imágenes
function createColorBlock(imgElement, width, height, color, text, isRound = false) {
    // Crear un canvas para generar una imagen de color sólido
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Llenar el fondo con el color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    
    // Agregar texto si se proporciona
    if (text) {
        ctx.fillStyle = getContrastColor(color);
        ctx.font = `bold ${Math.floor(width / 10)}px Arial, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Si el texto es una categoría, mostrar "Servicio de [categoría]"
        let displayText = text;
        if (!text.includes('Imagen') && !text.match(/^\d+$/)) {
            // Convertir primera letra a mayúscula
            displayText = text.charAt(0).toUpperCase() + text.slice(1);
            displayText = `Servicio de ${displayText}`;
        }
        
        ctx.fillText(displayText, width / 2, height / 2);
    }
    
    // Convertir el canvas a una URL de datos
    const dataUrl = canvas.toDataURL('image/png');
    
    // Asignar la URL al elemento de imagen
    imgElement.src = dataUrl;
    
    // Si es redondo (para avatares), agregar estilo
    if (isRound) {
        imgElement.style.borderRadius = '50%';
    }
}

// Función para calcular color de contraste (para texto legible)
function getContrastColor(hexColor) {
    // Convertir color hex a RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calcular brillo usando la fórmula de YIQ
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    
    // Retornar negro o blanco dependiendo del brillo
    return (yiq >= 128) ? '#000000' : '#FFFFFF';
}

// Obtener parámetro de URL (función auxiliar)
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
} 