function closeMenuAndGoTo(query) {
  console.log(query);
  if(query=='./partner/index.html'){
    window.open(query, '_blank').focus();
    return;
  }
  document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')
  setTimeout(() => {
    const element = document.querySelector(query)
    window.scrollTo({
      top: element.getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }, 250);
}

document.querySelector('#hero-menu').
  querySelectorAll('[href]').
  forEach(function (link) {
    link.onclick = function (event) {
      event.preventDefault()
      closeMenuAndGoTo(link.getAttribute('href'))
    }
  })

  

  // Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");


function onClickImage(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Use the same src in the expanded image as the image being clicked on from the grid
  modalImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  // Show the container element (hidden with CSS)
  //expandImg.parentElement.style.display = "block";
  modal.style.display = "block";

}

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
// }
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}