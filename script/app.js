

// alert('HI welcome to Ajibade Daniel's WEBPAGE.'); 

document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const contactMethodField = document.getElementById('contactMethod');
    const termsCheckbox = document.getElementById('terms');
    const formSummary = document.getElementById('formSummary');
    const summaryName = document.getElementById('summaryName');
    const summaryEmail = document.getElementById('summaryEmail');
    const summaryContactMethod = document.getElementById('summaryContactMethod');
    const termsMessage = document.getElementById('termsMessage');
  
    // Data Capture and Validation
    userForm.addEventListener('submit', function (event) {
      event.preventDefault();  // Prevent form submission to the server
  
      // Validate email format
      const emailValue = emailField.value;
      if (!validateEmail(emailValue)) {
        emailError.textContent = 'Invalid email format';
        return;  // Stop further processing if validation fails
      } else {
        emailError.textContent = '';
      }
  
      // Validate that contact method is selected
      if (contactMethodField.value === '') {
        alert('Please select a preferred contact method');
        return;
      }
  
      // Store form data in an object
      const formData = {
        name: document.getElementById('name').value,
        email: emailValue,
        contactMethod: contactMethodField.value,
        termsAccepted: termsCheckbox.checked
      };
  
      // Display Form Summary
      summaryName.textContent = formData.name;
      summaryEmail.textContent = formData.email;
      summaryContactMethod.textContent = formData.contactMethod;
      termsMessage.textContent = formData.termsAccepted
        ? 'You have accepted the terms and conditions.'
        : 'You have not accepted the terms and conditions.';
  
      formSummary.style.display = 'block';
    });
  
    // Email Validation Function
    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(email);
    }
  
    // Real-Time Feedback on Email Validation
    emailField.addEventListener('input', function () {
      if (!validateEmail(emailField.value)) {
        emailError.textContent = 'Invalid email format';
      } else {
        emailError.textContent = '';
      }
    });
  });
  