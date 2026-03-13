const express = require("express")
const router = express.Router()

const contactsController = require("../controllers/contactsController")

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Retrieve all contacts
 *     description: Get a list of all contacts from MongoDB
 *     responses:
 *       200:
 *         description: Successfully returned all contacts
 */
router.get("/", contactsController.getAll)

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Retrieve a contact by ID
 *     description: Get a single contact using the contact ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB contact ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact found
 */
router.get("/:id", contactsController.getSingle)

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     description: Add a new contact to MongoDB
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contact created successfully
 */
router.post("/", contactsController.createContact)

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Update a contact
 *     description: Update an existing contact
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB contact ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Contact updated successfully
 */
router.put("/:id", contactsController.updateContact)

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact
 *     description: Remove a contact from the database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB contact ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Contact deleted successfully
 */
router.delete("/:id", contactsController.deleteContact)

module.exports = router
