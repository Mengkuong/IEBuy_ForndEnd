export default function ({ redirect }) {
    if (!localStorage.getItem('access_token')) {
      // User is not authenticated, redirect to login page
      return redirect('/login');
    }
  }
  