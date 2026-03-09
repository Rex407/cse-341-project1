const contactsModel = require("../models/contactsModel")

async function getAll(req, res) {
  try {
    const contacts = await contactsModel.getAllContacts()
    res.json(contacts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

async function getSingle(req, res) {
  try {
    const contact = await contactsModel.getContactById(req.params.id)
    res.json(contact)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAll,
  getSingle
}
