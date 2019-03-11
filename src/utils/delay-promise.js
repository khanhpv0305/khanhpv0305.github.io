export default (period) => new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, period)
})