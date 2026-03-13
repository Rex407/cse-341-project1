const connectDB = require("../db/connection")
const { ObjectId } = require("mongodb")

async function getAllContacts() {
  const db = await connectDB()
  return db.collection("contacts").find().toArray()
}

async function getContactById(id) {
  const db = await connectDB()
  return db.collection("contacts").findOne({ _id: new ObjectId(id) })
}

async function createContact(contact) {
  const db = await connectDB()
  return db.collection("contacts").insertOne(contact)
}

async function updateContact(id, contact) {
  const db = await connectDB()
  return db.collection("contacts").updateOne(
    { _id: new ObjectId(id) },
    { $set: contact }
  )
}

async function deleteContact(id) {
  const db = await connectDB()
  return db.collection("contacts").deleteOne({ _id: new ObjectId(id) })
}

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
}
