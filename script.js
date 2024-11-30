document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const imageDisplay = document.getElementById('image-display');
    const dayImage = document.getElementById('day-image');
    const backgroundContainer = document.querySelector('.background-container');
    const body = document.body;
    const audio = document.getElementById("background-audio");
    const toggleSoundButton = document.getElementById("toggle-sound");

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

    // Thêm sự kiện nhấn cho nút phát âm thanh
    toggleSoundButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(error => {
                console.log("Không thể phát nhạc: ", error);
            });
            toggleSoundButton.textContent = "🔇"; // Đổi biểu tượng thành tắt âm
        } else {
            audio.pause();
            toggleSoundButton.textContent = "🔊"; // Đổi biểu tượng thành bật âm
        }
    });

});
