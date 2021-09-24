require("dotenv").config()

const bgHost=process.env.VUE_APP_BG_HOST
const bgPort=process.env.VUE_APP_BG_PORT
const authUrl=process.env.VUE_APP_AUTH_URL

export default {
    BG_HOST:bgHost,
    BG_PORT:bgPort,
    AUTH_URL:authUrl
}