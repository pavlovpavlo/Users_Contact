const SET_USERS_CONTACT = 'SET_USERS_CONTACT';
const DELETE_USER_CONTACT = 'DELETE_USER_CONTACT';
const IS_EDITING = 'IS_EDITING';
const CHANGE_EDITING_NAME = 'CHANGE_EDITING_NAME';
const CHANGE_EDITING_PHONE = 'CHANGE_EDITING_PHONE';
const CHANGE_EDITING_DESCRIPTION = 'CHANGE_EDITING_DESCRIPTION';
const CHANGE_NEW_NAME = 'CHANGE_NEW_NAME';
const CHANGE_NEW_PHONE = 'CHANGE_NEW_PHONE';
const CHANGE_NEW_DESCRIPTION = 'CHANGE_NEW_DESCRIPTION';
const IS_ADDING = 'IS_ADDING';
const ADD_CONTACT = 'ADD_CONTACT';

let initialState = {
    contacts: [],
    editing: false,
    isAdding: false,
    newContact:
        {
            name: '',
            phone: '',
            description: '',
            image: ''
        }
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_CONTACT: {
            return {...state, contacts: action.contacts};
        }
        case DELETE_USER_CONTACT: {
            let contacts = [...state.contacts];
            contacts.splice(contacts.findIndex(function (i) {
                return i.id === action.id;
            }), 1);
            debugger;
            return {...state, contacts}
        }
        case IS_EDITING: {
            return {...state, editing: action.val};
        }
        case CHANGE_EDITING_NAME: {
            let contacts = [...state.contacts];
            let index = contacts.findIndex(x => x.id === state.editing);
            contacts[index].name = action.text;
            return {...state, contacts}
        }
        case CHANGE_EDITING_PHONE: {
            let contacts = [...state.contacts];
            let index = contacts.findIndex(x => x.id === state.editing);
            contacts[index].phone = action.text;
            return {...state, contacts}
        }
        case CHANGE_EDITING_DESCRIPTION: {
            let contacts = [...state.contacts];
            let index = contacts.findIndex(x => x.id === state.editing);
            contacts[index].description = action.text;
            return {...state, contacts}
        }
        case CHANGE_NEW_NAME: {
            let newContact = {...state.newContact};
            newContact.name = action.text;
            return {...state, newContact}
        }
        case CHANGE_NEW_DESCRIPTION: {
            let newContact = {...state.newContact};
            newContact.description = action.text;
            return {...state, newContact}
        }
        case CHANGE_NEW_PHONE: {
            let newContact = {...state.newContact};
            newContact.phone = action.text;
            return {...state, newContact}
        }
        case IS_ADDING: {
            return {...state, isAdding: action.val};
        }
        case ADD_CONTACT: {
            return {
                ...state, newContact:
                    {
                        name: '',
                        phone: '',
                        description: '',
                        image: ''
                    }
            }
        }
        default:
            return state;
    }
};

export const setUserContacts = (contacts) => {
    return {
        type: SET_USERS_CONTACT,
        contacts
    }
};
export const deleteUserContacts = (id) => {
    debugger;
    return {
        type: DELETE_USER_CONTACT,
        id
    }
};
export const isEditing = (val) => {
    return {
        type: IS_EDITING,
        val
    }
};
export const changeEditingName = (text) => {
    return {
        type: CHANGE_EDITING_NAME,
        text
    }
};
export const changeEditingPhone = (text) => {
    return {
        type: CHANGE_EDITING_PHONE,
        text
    }
};
export const changeEditingDescription = (text) => {
    return {
        type: CHANGE_EDITING_DESCRIPTION,
        text
    }
};
export const newNameChange = (text) => {
    return {
        type: CHANGE_NEW_NAME,
        text
    }
};
export const newPhoneChange = (text) => {
    return {
        type: CHANGE_NEW_PHONE,
        text
    }
};
export const newDescriptionChange = (text) => {
    return {
        type: CHANGE_NEW_DESCRIPTION,
        text
    }
};
export const setAdding = (val) => {
    return {
        type: IS_ADDING,
        val
    }
};
export const addContact = () => {
    return {
        type: ADD_CONTACT,
    }
};


export default usersReducer;
