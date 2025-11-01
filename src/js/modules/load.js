export function CompleteLoading() {

    const expandBox = document.getElementById('expand-box');
    const loaderContainer = document.getElementById('loader-container');
    const mainContent = document.getElementById('main-content');

    // Start expanding the box
    expandBox.classList.add('expand');

    // After box starts expanding, fade out the loader
    setTimeout(function () {
        loaderContainer.classList.add('fade-out');
        document.body.style.overflow = 'auto';
    }, 200);

    // Remove expand box after animation
    setTimeout(function () {
        expandBox.style.display = 'none';
    }, 1500);

}

