
const toggleDarkMode = document.querySelector('.js-toggle-dark-mode'); 
jtd.addEvent(toggleDarkMode, 'click', function(){ 
    if (jtd.getTheme() === 'dark') { jtd.setTheme('light'); 
      toggleDarkMode.textContent = '☾'; } 
    else { jtd.setTheme('dark'); 
      toggleDarkMode.textContent = '☼'; } }); 


document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-switcher");
  const currentTheme = localStorage.getItem("theme") || "light";

  // Apply the saved theme
  document.documentElement.setAttribute("data-theme", currentTheme);

  toggleButton.addEventListener("click", () => {
    const newTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";

    // Apply and save the new theme
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');
  
  // Load the saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  jtd.setTheme(savedTheme);
  toggleDarkMode.textContent = savedTheme === 'dark' 
    ? 'Return to the light side' 
    : 'Preview dark color scheme';

  // Toggle theme on button click
  jtd.addEvent(toggleDarkMode, 'click', function () {
    const currentTheme = jtd.getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    jtd.setTheme(newTheme);
    toggleDarkMode.textContent = newTheme === 'dark' 
      ? 'Return to the light side' 
      : 'Preview dark color scheme';

    // Save the theme to localStorage
    localStorage.setItem('theme', newTheme);
  });
});
