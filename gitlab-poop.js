const poopURL = chrome.extension.getURL('poop-emoji.png')

function updateLogos() {
  // let's update the main logos
  document.querySelectorAll('#logo, .center-logo, .blank-header').forEach(el => el.innerHTML = `<img src="${poopURL}">`)

  // let's update the svg logos
  document.querySelectorAll('.nav-logo, .footer-logo').forEach((el) => {
    const parent = el.parentNode

    parent.insertAdjacentHTML('afterBegin', `<img src="${poopURL}" class="${el.className.baseVal}">`)
    parent.removeChild(el)
  })

  // image in the footer in homepage fix
  document.styleSheets[0].insertRule('.footer-logo { width: 64px; }', 1)

  // let's update the error pages' logos
  document.querySelectorAll('[alt*="Logo"]').forEach(el => el.src = poopURL)
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