export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('users'));
    if (user && user.token) {
      // for Node.js Express back-end
      return { 'x-access-token': user.token };
    } else {
      return {};
    }
}