document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // When scrolled
                navbar.classList.add('shadow-2xl', 'bg-bg/60', 'border-white/10');
                navbar.classList.remove('bg-bg/20', 'border-white/5');
            } else {
                // Top of page
                navbar.classList.remove('shadow-2xl', 'bg-bg/60', 'border-white/10');
                navbar.classList.add('bg-bg/20', 'border-white/5');
            }
        });
    }

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileBtn && mobileMenu && mobileCloseBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            document.body.style.overflow = 'hidden'; // prevent scrolling
        });

        mobileCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            document.body.style.overflow = '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                document.body.style.overflow = '';
            });
        });
    }

    // Gallery Popup Logic
    const galleryTriggers = document.querySelectorAll('.gallery-trigger');
    const galleryModal = document.getElementById('gallery-modal');
    
    if (galleryModal) {
        const modalImg = document.getElementById('gallery-modal-img');
        const modalClose = document.getElementById('gallery-close');

        galleryTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const img = trigger.querySelector('img');
                if (img) {
                    modalImg.src = img.src;
                    galleryModal.classList.remove('hidden');
                    galleryModal.classList.add('flex');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        modalClose.addEventListener('click', () => {
            galleryModal.classList.add('hidden');
            galleryModal.classList.remove('flex');
            document.body.style.overflow = '';
        });

        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) {
                galleryModal.classList.add('hidden');
                galleryModal.classList.remove('flex');
                document.body.style.overflow = '';
            }
        });
    }
});
