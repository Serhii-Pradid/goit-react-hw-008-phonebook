import css from './ContactList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from "redux/contacts/operations";
import { selectContacts, selectStatusFilter } from "redux/contacts/selectors"
import authSelectors from 'redux/auth/auth-selectors';


export const ContactList = () => {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectStatusFilter);

    const visibleContacts = [...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
        
  ];

    const handleDeleteContact = contactId => {
          dispatch(deleteContact(contactId));
    };
      
  //console.log(visibleContacts)


    return (
      <div>
     {isLoggedIn && ( <ul>
        {visibleContacts.map(({id, name, number}) => (
                <li key={id} >
                    <p> {name} : {number} </p>
                    <button className={css.buttonDelete}  
                            onClick={ () => (handleDeleteContact(id)) }> Delete </button>
                </li>
            ))}
    </ul>)}   
    </div>
    );
};


