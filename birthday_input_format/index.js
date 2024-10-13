document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById('birthday_ja').addEventListener('input', function (e) {
    let value = e.target.value;
    const lastChar = value.slice(-1);
    if (lastChar === '/') {
      e.target.value = value.replace(/[0-9]\s\/$/, '');
      return;
    }
    const reg_2b_num = /[０-９]/g;
    if (reg_2b_num.test(value)) {
      e.target.value = value = value.replace(reg_2b_num, function(num) {
        return String.fromCharCode(num.charCodeAt(0) - 0xFEE0);
      })
    }
    const digits = e.target.value.replace(/\D/g, '').match(/(\d{0,4})(\d{0,2})(\d{0,2})/);
    e.target.value = digits[1].length < 4 ? digits[1] : digits[1] + ' / ' + digits[2] + (digits[2].length === 2 ? ' / ' + digits[3] : '');
  });

  document.getElementById('birthday_en').addEventListener('input', function (e) {
    let value = e.target.value;
    const lastChar = value.slice(-1);
    if (lastChar === '/') {
      e.target.value = value.replace(/[0-9]\s\/$/, '');
      return;
    }

    const digits = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
    e.target.value = digits[1].length < 2 ? digits[1] : digits[1] + ' / ' + digits[2] + (digits[2].length === 2 ? ' / ' + digits[3] : '');
  });
});
