export const setItems = item => {
    localStorage.setItem('auth', item)
}

export const getItems = item => {
    return localStorage.getItem(item)
}