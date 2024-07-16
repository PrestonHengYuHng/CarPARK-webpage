document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Booking submitted for ' + document.getElementById('facility').value + ' on ' + document.getElementById('date').value);
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Login attempt for ' + document.getElementById('username').value);
});

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.carousel__container');
    let currentIndex = 0;
    const totalImages = container.children.length;

    document.querySelector('.prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        container.style.transform = `translateX(-${currentIndex * 100 / totalImages}%)`;
    });

    document.querySelector('.next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalImages;
        container.style.transform = `translateX(-${currentIndex * 100 / totalImages}%)`;
    });
});

function confirmBooking() {
    alert("Booking successful!");
    window.location.href = 'facility-booking.html'; // Redirect to the booking page
}
