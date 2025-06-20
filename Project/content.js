document.addEventListener('click', function(event) {
  if (event.target.tagName === 'A' && event.target.target === '_blank') {
    event.preventDefault();
    alert('Pop-up blocked');
  }
});
