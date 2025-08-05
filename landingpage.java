// GLOBAL VIEW COUNT: Uses CountAPI. Only you can see total at the dashboard URL!
fetch('https://api.countapi.xyz/hit/yourphotolanding/visitor')
  .then(res => res.json())
  .then(data => {
    // No need to show on page! To see your secret visitor count, visit:
    // https://api.countapi.xyz/get/yourphotolanding/visitor
  });

// Google Form submission
function submitNameForm() {
  let name = document.getElementById('visitor-name').value.trim();
  if (!name) name = "";
  document.getElementById('hidden-visitor-name').value = name;
  document.getElementById('hidden-google-form').submit();
  document.getElementById('thank-you-msg').innerText = name.length > 0 ?
    `Thank you for visiting, ${name}!` : `Thank you for visiting!`;
  document.getElementById('visitor-name').value = '';
}

// Button for journey (stub)
function goToJourney() {
  alert("Next: Your photography journey page will go here.");
}
