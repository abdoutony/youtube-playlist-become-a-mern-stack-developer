class contactsController {
  /**
   * @param mongoose
   * @param Contact
   */

  constructor() {
    //set up mongoose and model
    const mongoose = require("mongoose");
    const Contact = require("../models/contactModel")(mongoose);

    this.mongoose = mongoose;
    this.Contact = Contact;
  }

  // get all contacts
  async getContacts() {
    let contacts = await this.Contact.find();
    return contacts;
  }

  //add new contact
  async addContact(body) {
    let newContact = this.Contact(body);
    newContact.save();
    return await this.getContacts();
  }

  //get contact by id
  async getContactById(id) {
    let contact = await this.Contact.findById(id);
    return contact;
  }

  //delete contact by id
  async deleteContactById(id) {
    await this.Contact.deleteOne({ _id: id });
  }
  // update contact by id

  async updateContactById(id, body) {
    let contact = await this.Contact.findOneAndUpdate({ _id: id }, body, {
      new: true,
      useFindAndModify: false,
    });
    return contact;
  }
}

module.exports = contactsController;
