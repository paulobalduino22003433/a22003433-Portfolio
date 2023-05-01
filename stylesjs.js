document.getElementById('menu-btn').addEventListener('click', function() {
  
    this.classList.toggle('active');
    
    document.getElementById('nav-links').classList.toggle('active');
    
    this.style.display = 'none';
  });
  
  document.addEventListener('scroll', function() {
  
    document.documentElement.style.setProperty('--scroll-pos', window.scrollY + 'px');
  });
  
  