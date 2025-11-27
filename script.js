document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const bgMusic = document.getElementById('bg-music');
    const detailsBtn = document.getElementById('details-btn');
    const detailsSection = document.getElementById('details-section');
    const fadeElements = document.querySelectorAll('.fade-in-element');

    // 1. Intro Screen Click
    introScreen.addEventListener('click', () => {
        // Play Music
        bgMusic.volume = 0.5;
        bgMusic.play().catch(error => {
            console.log("Audio play failed (likely needs user interaction):", error);
        });

        // Fade out intro
        introScreen.style.opacity = '0';
        
        setTimeout(() => {
            introScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            
            // Trigger animations for main content
            setTimeout(() => {
                fadeElements.forEach(el => {
                    el.classList.add('visible');
                });
            }, 100);

        }, 1000);
    });

    // 2. Details Button Click
    detailsBtn.addEventListener('click', () => {
        // Hide button smoothly
        detailsBtn.style.opacity = '0';
        setTimeout(() => {
            detailsBtn.style.display = 'none';
            
            // Show details section
            detailsSection.style.display = 'block';
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                detailsSection.style.opacity = '1';
                detailsSection.style.transform = 'translateY(0)';
            }, 50);
            
        }, 300);
    });
});
