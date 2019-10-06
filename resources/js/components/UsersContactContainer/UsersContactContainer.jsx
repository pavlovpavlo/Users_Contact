import React from 'react';
import {connect} from 'react-redux';
import {
    addContact,
    changeEditingDescription,
    changeEditingName,
    changeEditingPhone,
    deleteUserContacts,
    isEditing, newDescriptionChange, newNameChange, newPhoneChange, setAdding,
    setUserContacts
} from "../../redux/contact_reducer";
import UsersContact from "./UsersContact";

class UsersContactContainer extends React.Component {

    componentDidMount() {
        fetch('/api/contacts')
            .then(response => {
                return response.json();
            })
            .then(contacts => {
                //Fetched product is stored in the state
                this.props.setUserContacts(contacts);
            });
    };

    render() {
        return (
            <UsersContact contacts={this.props.contacts}
                          newContact={this.props.newContact}
                          editing={this.props.editing}
                          setUserContacts={this.props.setUserContacts}
                          isEditing={this.props.isEditing}
                          changeEditingName={this.props.changeEditingName}
                          changeEditingPhone={this.props.changeEditingPhone}
                          changeEditingDescription={this.props.changeEditingDescription}
                          newNameChange={this.props.newNameChange}
                          newPhoneChange={this.props.newPhoneChange}
                          newDescriptionChange={this.props.newDescriptionChange}
                          isAdding={this.props.isAdding}
                          setAdding={this.props.setAdding}
                          deleteUserContacts={this.props.deleteUserContacts}
                          addContact={this.props.addContact}/>
        );
    }
};
let mapStateToProps = (state) => {
    return {
        contacts: state.contact.contacts,
        editing: state.contact.editing,
        newContact: state.contact.newContact,
        isAdding: state.contact.isAdding
    }
};


export default connect(mapStateToProps,
    {
        setUserContacts, deleteUserContacts, isEditing, setAdding,
        changeEditingName, changeEditingPhone, changeEditingDescription,
        newNameChange, newPhoneChange, newDescriptionChange, addContact
    })
(UsersContactContainer);

