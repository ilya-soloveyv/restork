export default function({ store, redirect }) {
  if (!store.state.auth.user) {
    return redirect('/signin')
  } else if (!store.state.auth.user.iUserAdmin) {
    return redirect('/')
  }
}
