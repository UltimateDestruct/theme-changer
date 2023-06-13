
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorButton');
    const select = document.getElementById('colorSelect');
    let themeColor = "red";

    button.addEventListener('click', function() {
        themeColor = select.value;
        console.log(themeColor);
      });
});