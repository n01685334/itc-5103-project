function calculateCharges() {
  var startDate = new Date(document.getElementById('startDate').value);
  var endDate = new Date(document.getElementById('endDate').value);
  var facilities = document.querySelectorAll('input[name="facilities"]:checked');

  var days = ((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
  var baseCharge = days * 1000; // Assuming $100 per day
  var facilitiesCharge = 0;
  for (var i = 0; i < facilities.length; i++) {
      facilitiesCharge += 100; // Assuming $50 per facility
  }
  var totalCharge = baseCharge + facilitiesCharge;

  document.getElementById('totalCharges').textContent = '$' + totalCharge;
}

function validateForm(){
  var startDate = document.getElementById('startDate').value;
  var endDate = document.getElementById('endDate').value;
  var destination = document.getElementById('destination');

  if(!startDate || !endDate || !destination) return false;

  return true;
}

function cancelBooking() {
  document.getElementById('bookingForm').reset();
  document.getElementById('totalCharges').textContent = '$0';
}


const handleSubmitClick = (e) => {
  e.preventDefault();
  const valid = validateForm();
  if(valid) {
    calculateCharges();
  } else {
    window.alert("Please complete all required fields!");
  }
}

window.addEventListener('DOMContentLoaded', ()=>{
  const submitBtn = document.querySelector('#submit');
  submitBtn.addEventListener('click', handleSubmitClick);
})