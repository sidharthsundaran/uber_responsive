{/* <script>
    document.getElementById('submit-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous errors
        document.getElementById('').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('subjectError').textContent = '';
        document.getElementById('messageError').textContent = '';

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        let valid = true;

        // Name /z
        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required';
            valid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            valid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Invalid email format';
            valid = false;
        }

        // Subject validation
        if (subject === '') {
            document.getElementById('subjectError').textContent = 'Subject is required';
            valid = false;
        }

        // Message validation
        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required';
            valid = false;
        }

        // If the form is valid, you can proceed with form submission
        if (valid) {
            alert('Form submitted successfully!');
            // Uncomment the line below to submit the form normally
            // document.getElementById('form').submit();
        }
    });
</script> */}
