const mockUsers = [
    {
        username: 'user1',
        password: `user1password`
    }
]

export const requestLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = mockUsers.find(u => u.username === username && u.password === password)

            if (user) {
                resolve(`${user.username} = token`)
            }
            reject(`User not found or password is incorrected`)
        }, 2000)
    })
}

export const setToken = (token) => {
    localStorage.setItem('token', token )
}

export const clearToken = () => {
    localStorage.removeItem('token')
}