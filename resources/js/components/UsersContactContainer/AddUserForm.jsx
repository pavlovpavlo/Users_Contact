import React from 'react';

const AddUserForm = (props) => {
    let newName = React.createRef();
    let newPhone = React.createRef();
    let newDescription = React.createRef();
    let images = React.createRef();
    const url = 'http://127.0.0.1:8000/';

    let addContact = () => {

        let name = newName.current.value;
        let phone = newPhone.current.value;
        let description = newDescription.current.value;
        let image = images.current.src;
        let contact = {name, phone, description, image};
        if (name.trim().length > 0 && phone.trim().length > 0)
            fetch('api/contacts/', {
                method: 'post',
                /* headers are important*/
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            })
                .then(response => {
                    fetch('/api/contacts')
                        .then(response => {
                            return response.json();
                        })
                        .then(contacts => {
                            //Fetched product is stored in the state
                            props.setUserContacts(contacts);
                        });
                    props.addContact();
                    props.setAdding(false);
                    return response.json();
                })

    };

    let onNewNameChange = () => {
        let text = newName.current.value;
        props.newNameChange(text);
    };
    let onNewPhoneChange = () => {
        let text = newPhone.current.value;
        props.newPhoneChange(text);
    };
    let onNewDescriptionChange = () => {
        let text = newDescription.current.value;
        props.newDescriptionChange(text);
    };

    return (
        <div className='form'>
            <div className='form-control form-name'>
                <img src={props.newContact.image.length <= url.length ? '../user.jpg' : props.newContact.image}
                     ref={images} alt=""/>
                <div>
                    <span>Name</span><br/>
                    <input className='input' type="text" ref={newName} value={props.newContact.name} onChange={onNewNameChange}/>
                </div>
            </div>
            <div className='form-control'>
                <span>Phone</span><br/>
                <input className='input' type="text" ref={newPhone} value={props.newContact.phone} onChange={onNewPhoneChange}/>
            </div>
            <div className='form-control'>
                <span>Description</span><br/>
                <input className='input input-description' type="text" ref={newDescription} value={props.newContact.description}
                       onChange={onNewDescriptionChange}/>
            </div>
            <button className="buttons contact-add" onClick={addContact}>Add</button>
        </div>
    )
};

export default AddUserForm;
