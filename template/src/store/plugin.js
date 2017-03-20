// ================================
// mutations plugin
// ================================
const plugin = store => {
  if (process.env.NODE_ENV === 'development') return
  store.subscribe((mutation, state) => {
    console.log(mutation)
  })
}

export default plugin
