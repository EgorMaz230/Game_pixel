let loading = document.querySelector(".A_loading");
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    // loading.classList.add('fade-out');
    setTimeout(function () {
        // loading.classList.remove('fade-out');
        window.location.href = './logic2.html';
    }, 1000);
  }
});

