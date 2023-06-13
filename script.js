
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorButton');
    const select = document.getElementById('colorSelect');
    let newColor = "red";

    button.addEventListener('click', function() {
      previousColor = newColor;  
      newColor = select.value;

        let elements = document.querySelectorAll('[class^="' + previousColor + '"]')
        elements.forEach(function(element) {
          let previousClass = element.classList.value
          let newClass = previousClass.replace(previousColor, newColor)
          element.classList.replace(previousClass, newClass)
        });

      });
});