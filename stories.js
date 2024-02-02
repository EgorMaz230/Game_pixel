let loading = document.querySelector(".A_start");
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    loading.classList.add('fade-out');
    setTimeout(function () {
        loading.classList.remove('fade-out');
        window.location.href = 'logic.html';
    }, 1000);
  }
});