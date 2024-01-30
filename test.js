// Function to show the modal
function showModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const modalImage = document.createElement('img');

    modalImage.src = imageSrc;
    modalContent.innerHTML = '';
    modalContent.appendChild(modalImage);

    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Event listeners for opening and closing the modal
document.addEventListener('DOMContentLoaded', function () {
    const projectImages = document.querySelectorAll('.project img');
    const modalCloseButton = document.getElementById('modal-close');

    projectImages.forEach(function (image) {
        image.addEventListener('click', function () {
            showModal(image.src);
        });
    });

    modalCloseButton.addEventListener('click', closeModal);
});

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slider img').length;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slideWidth = document.querySelector('.slider img').clientWidth;

    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

// Event listeners for slider navigation
document.getElementById('prev-slide').addEventListener('click', function () {
    showSlide(currentSlide - 1);
});

document.getElementById('next-slide').addEventListener('click', function () {
    showSlide(currentSlide + 1);
});





// ... (existing JavaScript)

// Dynamic form submission confirmation
function showConfirmation() {
    const confirmationContainer = document.getElementById('confirmation-container');
    const confirmationMessage = document.querySelector('.confirmation-message');

    confirmationMessage.style.opacity = '1';

    setTimeout(() => {
        confirmationMessage.style.opacity = '0';
    }, 3000);
}
test.js

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
});

// ... (existing JavaScript)





