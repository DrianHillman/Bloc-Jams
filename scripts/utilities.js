var forEach = function(points){
  for (var i = 0; i < points.length; i++){
    var revealPoint = function(index){
      points[index].style.opacity = 1;
      points[index].style.transform = "scaleX(1) translateY(0)";
      points[index].style.msTransform = "scaleX(1) translateY(0)";
      points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
    };
    
    revealPoint(i);
  };
};