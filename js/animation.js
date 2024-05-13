const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('conteneur-animation');
    }
  });
});

observer.observe(document.querySelector('.conteneur3'));
observer.observe(document.querySelector('.conteneur2'));
observer.observe(document.querySelector('.conteneur1'));