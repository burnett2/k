function filterCourses() {
    const category = document.getElementById('category').value;
    const courses = document.querySelectorAll('.course');

    courses.forEach(course => {
        if (category === 'all' || course.getAttribute('data-category') === category) {
            course.style.display = 'inline-block';
        } else {
            course.style.display = 'none';
        }
    });
}

// Simple form submission handling (for demonstration purposes)
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! Thank you for contacting us.');
    this.reset(); // Reset the form fields
});