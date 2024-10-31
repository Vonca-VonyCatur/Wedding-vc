const photoFrame = document.getElementById('photoFrame');
const nextPageButton = document.getElementById('nextPageButton');

photoFrame.addEventListener('mousemove', (e) => {
    const rect = photoFrame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 30; // Rotate between -15deg to 15deg
    const rotateX = (0.5 - y / rect.height) * 30; // Rotate between -15deg to 15deg

    photoFrame.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    photoFrame.querySelectorAll('.layer').forEach((layer, index) => {
        const depth = (index === 1) ? 60 : (index === 2) ? 90 : 0; // Depth difference for specific layers
        layer.style.transform = `translateZ(${depth}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
});

photoFrame.addEventListener('mouseleave', () => {
    resetLayers();
});

nextPageButton.addEventListener('click', () => {
    window.location.href = 'Page1.html';
});

function resetLayers() {
    photoFrame.style.transform = 'rotateY(0deg) rotateX(0deg)';
    photoFrame.querySelectorAll('.layer').forEach((layer, index) => {
        const depth = (index === 1) ? 60 : (index === 2) ? 90 : 0;
        layer.style.transform = `translateZ(${depth}px)`;
    });
}