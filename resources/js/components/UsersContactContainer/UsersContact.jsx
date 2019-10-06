import React from 'react';
import UserContact from "./UserContact";
import AddUserForm from "./AddUserForm";

const UsersContact = (props) => {

    let setAdding = (val) => {
        props.setAdding(val);
    };
    return (
        <div>
            <div className="contact-title">
                <h3>My Contact list</h3>
                {
                    !props.isAdding ? <button className="buttons contact-add bold" onClick={() => setAdding(true)}>Add
                        new</button> : <></>
                }
            </div>
            {
                props.isAdding ? <AddUserForm
                        newNameChange={props.newNameChange}
                        newPhoneChange={props.newPhoneChange}
                        newDescriptionChange={props.newDescriptionChange}
                        newContact={props.newContact}
                        setAdding={() => setAdding(false)}
                        setUserContacts={props.setUserContacts}
                        addContact={props.addContact}/> :
                    <></>
            }
            {
                <UserContact
                    contacts={props.contacts}
                    editing={props.editing}
                    changeEditingName={props.changeEditingName}
                    changeEditingPhone={props.changeEditingPhone}
                    changeEditingDescription={props.changeEditingDescription}
                    isEditing={props.isEditing}
                    deleteUserContacts={props.deleteUserContacts}/>
            }
        </div>
    );
};

export default UsersContact;
