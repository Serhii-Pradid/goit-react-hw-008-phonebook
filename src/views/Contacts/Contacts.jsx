import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectIsLoading, selectError } from "redux/selectors";

import Form from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import './Contacts.module.css'

const Contacts = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <section>
      <h2>
        Enter a name and phone number to add a contact
      </h2>
      <Form />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </section>
  );
};

export default Contacts;