function showContent(e, target){
  var tabContent = document.getElementsByClassName("tab-content");

  for(var i=0; i<tabContent.length; i++){
    tabContent[i].style.display = "none";
  }

  var tabLinks = document.getElementsByClassName("tab-links");

  for(var i=0; i<tabLinks.length; i++){
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(target).style.display = "block";
  e.currentTarget.className += " active";
}
