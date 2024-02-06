const updateFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const vehicle = document.querySelector('#vehicle_id').value.trim();
    const checkOut = document.querySelector('#check_out').value;
    const checkIn = document.querySelector('#check_in').value;


    const locationID = updateForm.dataset.location
  
    if (vehicle && checkOut && checkIn && locationID) {
      const response = await fetch('/reservation', {
        method: 'POST',
        body: JSON.stringify({ vehicle, checkOut, checkIn, locationID }),
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
  