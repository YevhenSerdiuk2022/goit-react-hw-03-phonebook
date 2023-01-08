import propTypes from 'prop-types';
import React, { Component } from "react";
import { FormContacts, FormInput, Label } from "./ContactsForm.styled";
import { Button } from "components/ContactsList/ContactsList.styled";

class ContactsForm extends Component {
    state = {
        name: '',
        number: '',
    }
    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({[ name]: value });

    }
    handleSubmit = evt => {
        evt.preventDefault();
       
        this.props.onSubmit(this.state);
             
        this.setState({ name: '' });
        this.setState({number: ''})
    }

    render() {
        const { name, number } = this.state;
        return (
            <FormContacts onSubmit={this.handleSubmit}>
                <Label>Name</Label>
                <FormInput
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder="Enter name"
                    value={name}
                    onChange={this.handleChange}
                />
                <Label>Number</Label>
                 <FormInput
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Enter number"
                    value={number}
                    onChange={this.handleChange}
                /> 
                <Button type="submit">ADD CONTACT</Button>
            </FormContacts>
        );
    }
}
ContactsForm.propTypes = {
    handleSubmit: propTypes.func.isRequired,
}
export default ContactsForm;