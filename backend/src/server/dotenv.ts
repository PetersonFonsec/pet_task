import { config } from 'dotenv'

const enviroment_dev = 'src/.env'

const enviroment_tes = 'src/.env.test'

const path = process.env.NODE_ENV === 'development' ? enviroment_dev : enviroment_tes

config({ path })