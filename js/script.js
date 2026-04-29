// ========== MENÚ HAMBURGUESA ==========
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// ========== FORMULARIO DE CONTACTO ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Gracias por contactar a Constructora Valcron. Pronto te responderemos.');
        contactForm.reset();
    });
}

// Función para agregar un item a la galería (sin botón eliminar)
function addGalleryItem(imageUrl, title, service, isBlob = false, blobUrl = null) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('gallery-info');

    const titleEl = document.createElement('h4');
    titleEl.textContent = title;

    const serviceTag = document.createElement('span');
    serviceTag.classList.add('service-tag');
    serviceTag.textContent = service;

    // Ya NO se crea el botón eliminar
    infoDiv.appendChild(titleEl);
    infoDiv.appendChild(serviceTag);
    galleryItem.appendChild(img);
    galleryItem.appendChild(infoDiv);
    galleryGrid.appendChild(galleryItem);
}

// Subir foto nueva (sin eliminar)
uploadBtn.addEventListener('click', () => {
    if (!fileInput.files || fileInput.files.length === 0) {
        alert('Por favor selecciona una imagen.');
        return;
    }
    const file = fileInput.files[0];
    if (!file.type.startsWith('image/')) {
        alert('Solo se permiten archivos de imagen.');
        return;
    }
    const title = imgTitle.value.trim() || 'Trabajo reciente';
    const service = imgService.value;

    const blobUrl = URL.createObjectURL(file);
    activeBlobUrls.push(blobUrl);
    addGalleryItem(blobUrl, title, service, true, blobUrl);

    imgTitle.value = '';
    fileInput.value = '';

    // Notificación
    const toast = document.createElement('div');
    toast.textContent = '✅ Foto agregada a la galería';
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.backgroundColor = '#0b2b26';
    toast.style.color = '#f4c542';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '30px';
    toast.style.zIndex = '999';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
});

// Cargar imágenes de ejemplo (sin eliminar)
//const sampleImages = [
   // { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop', title: 'Estructura metálica industrial', service: 'Obra Gris & Metales' },
    //{ url: 'https://images.unsplash.com/photo-1563089145-5994c5c45d5a?w=400&h=300&fit=crop', title: 'Instalación de cerca eléctrica', service: 'Cerca Eléctrica' },
   // { url: 'https://images.unsplash.com/photo-1581094288338-1c4b4a3b9f5d?w=400&h=300&fit=crop', title: 'Mantenimiento en condominio', service: 'Mantenimiento General' },
    //{ url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop', title: 'Jardinería profesional', service: 'Jardinería & Poda' },
    //{ url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop', title: 'Poda de árboles urbanos', service: 'Jardinería & Poda' },
    //{ url: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop', title: 'Cerramiento en metal', service: 'Obra Gris & Metales' }


sampleImages.forEach(img => {
    addGalleryItem(img.url, img.title, img.service, false, null);
});
