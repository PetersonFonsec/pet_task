import "./server/dotenv"
import './server/mongoDB'

import Server from './server/server'

const PORT = process.env.PORT || 3000

Server.listen(PORT, () => console.log(`backend is running in port: ${PORT}`) )