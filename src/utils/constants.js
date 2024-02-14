// chua bien tinh
let apiRoot = ''

if (process.env.BUILD_MODE === 'dev') {
    apiRoot = 'https://localhost:8017'
}

if (process.env.BUILD_MODE === 'production') {
    apiRoot = 'https://trello-api-s3z0.onrender.com'
}

export const API_ROOT = apiRoot