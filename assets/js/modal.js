var modal = document.getElementById('myModal');
var span = document.getElementById('close');
setTimeout(() => (modal.style.display = 'block'), 3000);
span.onclick = () => (modal.style.display = 'none');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
