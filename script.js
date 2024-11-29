document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const imageDisplay = document.getElementById('image-display');
    const dayImage = document.getElementById('day-image');
    const backgroundContainer = document.querySelector('.background-container');
    const body = document.body;
    const audio = document.getElementById("background-audio");

    const imageToShow = 'IMG-20241002-WA0030.jpg';

    // Generate calendar days
    for (let day = 1; day <= 30; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        dayElement.addEventListener('click', () => {
            showImage(imageToShow);
            calendar.style.display = 'none';
            backgroundContainer.classList.add('hidden');
            imageDisplay.style.display = 'block';
            body.classList.add('hidden-background');
        });
        calendar.appendChild(dayElement);
    }

    // Return to calendar when clicking on the image display
    imageDisplay.addEventListener('click', () => {
        imageDisplay.style.display = 'none';
        calendar.style.display = 'grid';
        backgroundContainer.classList.remove('hidden');
        body.classList.remove('hidden-background');
    });

    // Hiển thị ảnh khi cần thiết
    function showImage(imageSrc) {
        dayImage.src = imageSrc;
        imageDisplay.style.display = 'block';
    }

});
