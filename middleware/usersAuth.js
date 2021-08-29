export default ({ store, redirect }) => {
  if (!store.$auth.loggedIn) {
    redirect('/users/login');
  }
}