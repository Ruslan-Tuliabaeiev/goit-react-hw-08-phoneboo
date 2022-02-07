


import PropTypes from "prop-types"


import { ElementContacts } from "../ElementContacts"

// import style from './phonebook.module.css'; //className={style.list} 


export const ContactList = ({ contacts, onDeleteContact }) => {

    return (
        <ul>
            {contacts.map(({ name, id, number }) => (<li key={id}><ElementContacts name={name} number={number} id={id} func={onDeleteContact} /></li>))}
        </ul>
    )
}


ContactList.prototype = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }
        )

    ),


}


