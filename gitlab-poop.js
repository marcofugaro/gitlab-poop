const poopURL = chrome.extension.getURL('poop-emoji.png')

function updateLogos() {
  const logo = document.getElementById('logo')
  if (logo) logo.innerHTML = `<img src="${poopURL}">`

  document.querySelectorAll('[alt="GitLab Logo"]').forEach(el => el.src = poopURL)
}

function updateFavicon() {
  const oldFavicon = document.querySelector('[rel="shortcut icon"]')

  const favicon = document.createElement('link')
  favicon.rel = 'icon'
  favicon.type = 'image/png'
  favicon.href = poopURL

  if (oldFavicon) document.head.removeChild(oldFavicon)
  document.head.appendChild(favicon)
}

updateLogos()
updateFavicon()

// gitlab's fucking turbolinks!
document.addEventListener('page:load', updateLogos)