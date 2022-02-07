
import PropTypes from'prop-types';
//import style from './phonebook.module.css'; ///className={style.listName} className={style.listNumber} className={style.buttonDelete}

export const ElementContacts = ({name, number, id, func}) => {

    return( 
<>
<i >{name}:</i>
<b >{number}</b>
<button  onClick={() => func(id)}  >Delete</button>


</>

    )
} 


ElementContacts.prototype={
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

}


