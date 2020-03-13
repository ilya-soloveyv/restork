export default function({ store, redirect }) {
  console.log('-----------------')
  if (!store.state.auth.user) {
    return redirect('/login')
  } else if (!store.state.auth.user.iUserAdmin) {
    return redirect('/')
  }
}
