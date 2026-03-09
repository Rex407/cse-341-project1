const connectDB = require("../db/connection")
const { ObjectId } = require("mongodb")

// Get all contacts
async function getAllContacts() {
  const db = await connectDB()
  const contacts = await db.collection("contacts").find().toArray()
  return contacts
}

// Get single contact by ID
async function getContactById(id) {
  const db = await connectDB()
  const contact = await db.collection("contacts").findOne({ _id: new ObjectId(id) })
  return contact
}

module.exports = {
  getAllContacts,
  getContactById
}
