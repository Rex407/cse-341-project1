const express = require("express")
const { MongoClient } = require("mongodb")
const cors = require("cors") 
require("dotenv").config()

const app = express()
app.use(cors())

const contactsRoutes = require("./routes/contactsRoutes")

app.use(express.json())
app.use("/contacts", contactsRoutes)

const PORT = process.env.PORT || 3000
const uri = process.env.MONGODB_URI

const client = new MongoClient(uri)

const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./swagger")

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))


async function startServer() {
  try {
    // Connect to MongoDB
    await client.connect()
    console.log("MongoDB connected")

    // Start Express server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })

  } catch (error) {
    console.error("MongoDB connection failed:", error)
  }
}

startServer()
