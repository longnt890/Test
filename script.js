document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const imageDisplay = document.getElementById('image-display');
    const dayImage = document.getElementById('day-image');
    const backgroundContainer = document.querySelector('.background-container');
    const body = document.body;

    const imageToShow = 'IMG-20241002-WA0030.jpg';

    // Generate calendar days
    for (let day = 1; day <= 30; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        dayElement.addEventListener('click', () => {
            dayImage.src = imageToShow;
            calendar.style.display = 'none';
            backgroundContainer.classList.add('hidden');
            imageDisplay.classList.add('show');
            body.classList.add('hidden-background');
        });
        calendar.appendChild(dayElement);
    }

    // Return to calendar when clicking on the image display
    imageDisplay.addEventListener('click', () => {
        imageDisplay.classList.remove('show');
        setTimeout(() => {
            calendar.style.display = 'grid';
            backgroundContainer.classList.remove('hidden');
            body.classList.remove('hidden-background');
        }, 500);
    });

    document.addEventListener("DOMContentLoaded", () => {
        const audio = document.getElementById("background-audio");
        const toggleSoundButton = document.getElementById("toggle-sound");
    
        // Xử lý sự kiện khi người dùng nhấn nút
        toggleSoundButton.addEventListener("click", () => {
            if (audio.muted) {
                audio.muted = false;
                toggleSoundButton.textContent = "🔇"; // Đổi biểu tượng thành tắt âm
            } else {
                audio.muted = true;
                toggleSoundButton.textContent = "🔊"; // Đổi biểu tượng thành bật âm
            }
        });
    });
    
});
