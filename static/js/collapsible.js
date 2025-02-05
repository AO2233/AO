document.addEventListener("DOMContentLoaded", function() {
    var bars = document.querySelectorAll(".collapsible .bar");
    bars.forEach(function(bar) {
      bar.addEventListener("click", function(){
        var collapsible = bar.parentElement;
        collapsible.classList.toggle("active");
        // if(collapsible.classList.contains("active")){
        //   bar.textContent = "点击折叠";
        // } else {
        //   bar.textContent = "点击展开";
        // }
      });
    });
  });
  