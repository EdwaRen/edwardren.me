function resetColors() {

  for (i = 0; i < 7; i++) {

    var selectedGroup = "myGroup" + i;
    var selectedImage = "imagePlaceholder" + i;

    document.getElementById(selectedGroup).style.backgroundColor = "#eef2f2";
    document.getElementById(selectedImage).style.opacity = 0.6;
  }



}

function resetFileColors() {
  for (i = 0; i < files.length; i++) {
    var fileName = "myFiles" + i;
    document.getElementById(fileName).style.backgroundColor = "#FFFFFF";
    document.getElementById(fileName).style.color = "#333333";


  }
}
