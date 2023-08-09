window.addEventListener('load', () => {
  var collapsibleItems = document.getElementsByClassName('collapsibleItem');

  Array.from(collapsibleItems).forEach(function (button) {
    button.addEventListener('click', function () {
      var parentEl = this.parentNode;
      var childEl = this.nextElementSibling;
      var arrowEl = parentEl.querySelector('.arrow2');
      var childComputedStyle = window.getComputedStyle(childEl);
      var totalChildElHeight =
        100 +
        childEl.offsetHeight +
        parseFloat(childComputedStyle.paddingTop) +
        parseFloat(childComputedStyle.paddingBottom);

      arrowEl.classList.toggle('rotatedArrow');

      parentEl.style.maxHeight =
        parentEl.offsetHeight === 100 ? `${totalChildElHeight}px` : '100px';
    });
  });
});
