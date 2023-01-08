import React, { Component } from "react";
import { nanoid } from "nanoid";

import { Container } from "./App.styled";
import ContactsList from "components/ContactsList";
import ContactsForm from "components/ContactsForm";
import Filter from "components/Filter";



 class App extends Component {
 state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
   ],
   
    filter: '',
    
   }; 

   
   addContactsList = ({name, number}) => {
     
     const contactlist = {
       id: nanoid(),
      name,
      number,
     };

     const currentContactList = [...this.state.contacts];

     if (currentContactList.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
     } else {
         this.setState(({contacts}) => ({
       contacts: [contactlist, ...contacts],
     }));
     }
       
   };

  deleteContacts = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
   changeFilter = evt => {
     this.setState({ filter: evt.currentTarget.value });
   };

   getVisibleContacts = () => {
     const { filter, contacts } = this.state;
     const normalizedFilter = filter.toLowerCase();
     return contacts.filter(contact =>
       contact.name.toLowerCase().includes(normalizedFilter),
     );
   }
   
   render() {
     const VisibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.addContactsList}></ContactsForm>
         <h2> Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList  contacts={VisibleContacts}
          onDeleteContacts={this.deleteContacts}
        />
            
      </Container>
    );
  }
}

export default App;
