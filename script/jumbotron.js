const images = document.querySelectorAll(".slide")
const buttons = document.querySelectorAll(".button-container div")

function handleButton(idx){
  // Menghilangkan Aktif
  for(let i = 0; i < images.length; i++){
    images[i].setAttribute("class", "slide")
    buttons[i].setAttribute("class", "")
  }

  // Ubah Aktif
  images[idx].setAttribute("class", "slide active")
  buttons[idx].setAttribute("class", "btn-active")
}