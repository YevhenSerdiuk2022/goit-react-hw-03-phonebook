import propTypes from 'prop-types';
import React from 'react';
import {ContactsItem, Button, ContactsText} from './ContactsList.styled'

const ContactsList = ({ contacts, onDeleteContacts }) => (
        
        <ul>{contacts.map(({id, name, number}) =>(
            <ContactsItem  key={id}>
                <ContactsText>{name}:  {number}</ContactsText>
              
                <Button onClick={() => onDeleteContacts(id)}>DELETE</Button>
            </ContactsItem>
        ))}
        </ul>
    
)

ContactsList.propTypes = {
    contacts: propTypes.arrayOf(
        propTypes.exact({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            number: propTypes.number.isRequired,
        })
    ),
    onDeleteContacts: propTypes.func.isRequired,
}
export default ContactsList;