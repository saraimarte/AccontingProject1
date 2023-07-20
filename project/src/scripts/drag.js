window.onload = function(){
    init();
}

function init() {
    var dropcontainers = [document.querySelector("#dragparent"), document.querySelector("#box1"), document.querySelector("#box2")];
    dragula(dropcontainers).on("drag", function(el){
        el.classList.remove("box1", "box2", "dragparent");
        el.style.border = "2px solid black";
    })
    dragula(dropcontainers).on("drop", function(el, target, source) {
      // check if the target container is dragparent or dragparent2
      var containerClass = target.id;
      // add the new class to the dropped element
      el.classList.add(containerClass);
    });
  }
