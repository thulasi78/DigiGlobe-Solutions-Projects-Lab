document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const formData = new FormData(this);

    fetch('send_email.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        // Handle the server response here
        alert('Message sent successfully!');
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send the message.');
    });
});