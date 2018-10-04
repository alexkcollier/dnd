import dotenv from 'dotenv'

dotenv.config()

export const ctfConfig = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_CDA_KEY: process.env.CTF_CDA_KEY,
  CTF_CPA_KEY: process.env.CTF_CPA_KEY,
  CTF_PERSONAL_ACCESS_TOKEN: process.env.CTF_PERSONAL_ACCESS_TOKEN
}
