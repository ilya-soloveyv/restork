const vh = window.innerHeight * 0.01
console.log(vh)
document.documentElement.style.setProperty('--vh', vh + 'px')
window.addEventListener('resize', () => {
  const vh = window.innerHeight * 0.01
  console.log(vh)
  document.documentElement.style.setProperty('--vh', vh + 'px')
})
