// Function for smooth scrolling around page sections
function scrollToSection(event, sectionId) {
    event.preventDefault();
    var targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  document.querySelector('nav a[href="#home"]').addEventListener('click', function(event) {
    scrollToSection(event, 'home');
  });
  
  document.querySelector('nav a[href="#about"]').addEventListener('click', function(event) {
    scrollToSection(event, 'about');
  });
  
  document.querySelector('nav a[href="#services"]').addEventListener('click', function(event) {
    scrollToSection(event, 'services');
  });

  // Telegram button animation
  (function() {var script=document.createElement("script");script.type="text/javascript";script.async =true;script.src="//telegram.im/widget-button/index.php?id=@schedule_mate_bot";document.getElementsByTagName("head")[0].appendChild(script);})();
