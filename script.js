// 文字コピー
document.querySelectorAll('.copy-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var value = btn.previousElementSibling.innerText;
    navigator.clipboard.writeText(value);

    var icon = btn.querySelector('i');
    icon.innerHTML = '<img src="check.png" alt="コピー完了">';
    btn.classList.add('is-copied');

    setTimeout(function () {
      icon.innerHTML = '<img src="copy.png" alt="コピー">';
      btn.classList.remove('is-copied');
    }, 1200);
  });
});
