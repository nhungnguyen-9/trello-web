// chua bien tinh
let apiRoot = ''

if (process.env.BUILD_MODE === 'dev') {
    apiRoot = 'http://localhost:8017'
}

if (process.env.BUILD_MODE === 'production') {
    apiRoot = 'https://trello-api-2xjl.onrender.com'
}

console.log('🚀 ~ apiRoot:', apiRoot)
export const API_ROOT = apiRoot
