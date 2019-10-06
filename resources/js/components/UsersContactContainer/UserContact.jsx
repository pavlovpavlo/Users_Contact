import React from 'react';

const UserContact = (props) => {

    const url = 'http://127.0.0.1:8000/';

    let newName = React.createRef();
    let newPhone = React.createRef();
    let newDescription = React.createRef();
    let images = React.createRef();

    let onNameChange = () => {
        let text = newName.current.value;
        props.changeEditingName(text);
    };
    let onPhoneChange = () => {
        let text = newPhone.current.value;
        props.changeEditingPhone(text);
    };
    let onDescriptionChange = () => {
        let text = newDescription.current.value;
        props.changeEditingDescription(text);
    };
    let isEditing = (id) => {
        if (props.editing === false)
            props.isEditing(id);
        else {
            props.isEditing(false);
            let name = newName.current.value;
            let phone = newPhone.current.value;
            let description = newDescription.current.value;
            let image = images.current.src;
            let contact = {id, name, phone, description, image};

            fetch('api/contacts/' + contact.id, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            })
                .then(response => {
                    return response.json();
                })

        }

    };
    let confirmDelete = (id, name) => {
        if (confirm(`Delete contact ${name}?`)) {
            fetch('api/contacts/' + id,
                {method: 'delete'})
                .then(response => {
                    props.deleteUserContacts(id);
                });
        }
    };

    return (
        props.contacts.map(uc =>
            <div key={uc.id} className="contact-container">
                <div className="contact">
                    <img src={uc.image.length <= url.length ? '../user.jpg' : uc.image} ref={images} alt=""/>
                    {
                        (props.editing === false || props.editing !== uc.id) ?
                            <div className="contact_information">
                                <span>{uc.name}</span>
                                <span>{uc.phone}</span>
                            </div> :
                            <div className="contact_information-editing">
                                <input className='input' type="text"
                                       onChange={onNameChange}
                                       ref={newName}
                                       value={uc.name}/>
                                <input className='input' type="text"
                                       onChange={onPhoneChange}
                                       ref={newPhone}
                                       value={uc.phone}/>
                            </div>
                    }
                    <div className="contact_buttons">
                        <button className="buttons contact_edit"
                                onClick={() => {
                                    isEditing(uc.id)
                                }}>Edit
                        </button>
                        <button className="buttons contact_delete"
                                onClick={() => {
                                    confirmDelete(uc.id, uc.name)
                                }}>X delete
                        </button>
                    </div>
                </div>
                <div className="some-information">
                    {
                        (props.editing === false || props.editing !== uc.id) ?
                            <p>{uc.description}</p> :
                            <div>
                                <input className='input' type="text"
                                       onChange={onDescriptionChange}
                                       ref={newDescription}
                                       value={uc.description}/>
                            </div>
                    }
                </div>
            </div>
        )

    )
};

export default UserContact;
