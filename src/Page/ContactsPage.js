



import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm} from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
// import style from './components/phonebook.module.css';   //className={style.contact}
import { getFilter } from '../redux/fiter/selector';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery, useDeleteContactMutation } from '../redux/contactApi';




function ContactsPage() {
    const [deleteContact] = useDeleteContactMutation()
    const { data, isFetching } = useFetchContactsQuery()
    const filter = useSelector(getFilter)

    const findContacts = () => {

        const normalizedFilter = filter.toLowerCase()
        const visibleContacts = data.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
        return visibleContacts

    }



    return (

        <>

            <ContactForm contacts={data}
            />

            <h2 >Contacts</h2>

            <Filter
            />


            {isFetching && <h1>loading...</h1>}

            {data && (< ContactList
                onDeleteContact={deleteContact}
                contacts={findContacts()} />)


            }

        </>
    )
}


export default ContactsPage;
