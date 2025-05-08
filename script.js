// Event Handling
document.getElementById('colorBtn').addEventListener('click', () => {
    const btn = document.getElementById('colorBtn');
    btn.style.backgroundColor = btn.style.backgroundColor === 'coral' ? 'teal' : 'coral';
  });
  
  document.getElementById('hoverText').addEventListener('mouseover', () => {
    document.getElementById('hoverText').textContent = 'Thanks for hovering!';
  });
  
  document.getElementById('keyInput').addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Image Gallery
  const images = [
    'https://via.placeholder.com/150?text=1',
    'https://via.placeholder.com/150?text=2',
    'https://via.placeholder.com/150?text=3'
  ];
  let currentImg = 0;
  
  document.getElementById('nextImgBtn').addEventListener('click', () => {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById('galleryImg').src = images[currentImg];
  });
  
  // Tabs
  function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
  }
  
  // Form Validation
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('formFeedback');
  
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
      feedback.textContent = "Please enter a valid email.";
      feedback.style.color = "red";
      return;
    }
  
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
      feedback.style.color = "red";
      return;
    }
  
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
  });
  