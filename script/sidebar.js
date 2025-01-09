function hideSidebar(){
  const sidebar = document.querySelector('#sidebar')
  const penutup = document.querySelector('#penutup')

  sidebar.style.right= '-50%'
  penutup.style.opacity = '0%'
  penutup.style.left = 'auto'
}

function showSidebar(){
  const sidebar = document.querySelector('#sidebar')
  const penutup = document.querySelector('#penutup')

  sidebar.style.right= '0'
  penutup.style.opacity = '100%'
  penutup.style.left = '0px'
}