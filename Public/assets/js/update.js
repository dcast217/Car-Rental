const updateFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('#email').value.trim();
    const address = document.querySelector('#address').value.trim();
    const updateForm = document.querySelector('#update-user');
    const dob = document.querySelector('#dob').value;

    const userID = updateForm.dataset.user
  
    if (email && address && dob) {
      const response = await fetch('/user/' + userID, {
        method: 'PUT',
        body: JSON.stringify({ email, address, dob }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile?success=true');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('#update-user')
    .addEventListener('submit', updateFormHandler);
  