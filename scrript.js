const fulImgbox = document.getElementById("fulImgbox");
fulImg = document.getElementById("fulImg");

function openFullImg(reference){
  fulImgbox.style.display = "flex";
  fulImg.src = reference;
}
function closeImg(reference){
  fulImgbox.style.display = "none";
  fulImg.src = reference;
}
