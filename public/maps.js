// Get proper error message based on the code.
const getPositionErrorMessage = code => {
    switch (code) {
      case 1:
        return 'Permission denied.';
      case 2:
        return 'Position unavailable.';
      case 3:
        return 'Timeout reached.';
    }
  }
  
  function init() {
    // Omitted for brevity
  
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => console.log(`Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`),
        err => alert(`Error (${err.code}): ${getPositionErrorMessage(err.code)}`)
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }