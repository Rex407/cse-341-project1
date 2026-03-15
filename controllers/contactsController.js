const contactsModel = require("../models/contactsModel")

async function getAll(req, res) {
  const contacts = await contactsModel.getAllContacts()
  res.json(contacts)
}

async function getSingle(req, res) {
  const contact = await contactsModel.getContactById(req.params.id)
  res.json(contact)
}

async function createContact(req, res) {
  const result = await contactsModel.createContact(req.body)
  res.status(201).json(result.insertedId)
}

async function updateContact(req, res) {
  await contactsModel.updateContact(req.params.id, req.body)
  res.status(200).send()
}

async function deleteContact(req, res) {
  await contactsModel.deleteContact(req.params.id)
  res.status(204).send()
}

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
}
