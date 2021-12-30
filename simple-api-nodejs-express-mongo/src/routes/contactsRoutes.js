const express = require("express");
// use express router to manage child routes
const router = express.Router();

// import and instanciate your controller to use it to execute functionality when a user access a route
const contactsController = require("../controllers/contactsController");
const ContactsController = new contactsController();

// export a function that return a router
module.exports = (params) => {
  // here inside this function you design your router which routes it will contain

  // route to get all the contacts from database
  router.get("/contacts", async (req, res) => {
    try {
      let contacts = await ContactsController.getContacts();
      res.status(200).json({ data: contacts });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // route to add a contact to database
  router.post("/contacts", async (req, res) => {
    try {
      let body = req.body;
      let contacts = await ContactsController.addContact(body);
      res.status(200).json({ data: contacts });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // route to get one contact by id
  router.get("/contacts/:contactId", async (req, res) => {
    try {
      let id = req.params.contactId;
      let contact = await ContactsController.getContactById(id);
      res.status(200).send({ contact: contact });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // route to delete one contact by id
  router.delete("/contacts/:contactId", async (req, res) => {
    try {
      let id = req.params.contactId;
      await ContactsController.deleteContactById(id);
      res.status(200).json({ message: "a contact has been deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // route to update one contact by id
  router.put("/contacts/:contactId", async (req, res) => {
    try {
      let id = req.params.contactId;
      let contact = await ContactsController.updateContactById(id, req.body);
      res.status(200).json({ data: contact });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
