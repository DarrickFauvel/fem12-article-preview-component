import './assets/styles/main.css'

const shareBtn = document.querySelector('.share__btn')

const toggleActive = (e) => {
  e.preventDefault()
  const card = document.querySelector('.card')
  card.classList.toggle('active')
}

shareBtn.addEventListener('click', toggleActive)
