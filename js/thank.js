// Vanilla JS
(function() {
    window.onload = function() {
      var $main = document.querySelector("main");
      window.mySparticles = new Sparticles($main);
    }
  }());
  // jQuery
  $(function() {
    var $main = $("main");
    window.mySparticles = new Sparticles($main.get(0));
  });
  // ESM
  new Sparticles( document.querySelector("main"));
  // Svelte
  let sparticles;
  function addSparticles(node) {
    new Sparticles(node);
  }
  