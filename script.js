const checkbox = document.getElementById('theme-checkbox');
const savedTheme = localStorage.getItem('theme');

// Встановлення попереднього стану
if (savedTheme === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
  checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});
