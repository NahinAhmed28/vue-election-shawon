export function clearToken() {
    localStorage.removeItem("users")
}
export function getUser() {
    return JSON.parse(localStorage.getItem("users"));
}
export function getToken() {
    let users = JSON.parse(localStorage.getItem("users"));
    return users.token;
}