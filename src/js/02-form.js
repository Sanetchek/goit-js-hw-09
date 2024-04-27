// Object with form fields
const formData = {
  email: "",
  message: ""
};

// Constants
const FEEDBACK_FORM_STATE = "feedback-form-state";

// Searching for Form
const feedbackForm = document.querySelector('.feedback-form');

// Get form data from localStorage
const storage = localStorage.getItem(FEEDBACK_FORM_STATE);

// Check if storage exist
if ( storage ) {
  // Get storage fields
  const { email, message } = JSON.parse(storage);

  // Save storage data email to Object
  formData.email = email;
  formData.message = message;

  // Save storage data to form fields
  feedbackForm.querySelector('[name="email"]').value = email;
  feedbackForm.querySelector('[name="message"]').value = message;
}

// Update Inputed text to Object and localStorage
const saveFieldToLacalStorage = (event) => {
  const field = event.target

  // Get field name
  const fieldName = field.getAttribute('name')

  // Update formData field
  formData[fieldName] = field.value.trim();

  // Save in localStorage
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
}

// Submit Form
const onSubmitFeedbackForm = (event) => {
  event.preventDefault();

  // Get all form elements
  const formEls = event.currentTarget.elements;

  // Check if fiedls are filled
  if (!formEls.email.value || !formEls.message.value) {
    alert('Fill all fields, please');
    return;
  }

  // Show formData in console
  console.log(formData);

  // Clear localStorage
  localStorage.removeItem(FEEDBACK_FORM_STATE);

  // Clear formData
  formData.email = "";
  formData.message = "";

  // Clear Form
  event.currentTarget.reset();
}

// Listeners
feedbackForm.addEventListener('input', saveFieldToLacalStorage);
feedbackForm.addEventListener('submit', onSubmitFeedbackForm);