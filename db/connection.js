const { MongoClient } = require("mongodb")
require("dotenv").config()

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)

let db

async function connectDB() {
  try {
    if (!db) {
      await client.connect()
      console.log("MongoDB connected")
      db = client.db("contactsDB") //  database name
    }
    return db
  } catch (error) {
    console.error("MongoDB connection error:", error)
  }
}

module.exports = connectDB
