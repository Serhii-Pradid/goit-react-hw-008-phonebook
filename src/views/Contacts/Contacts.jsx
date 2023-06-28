import Form from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import './Contacts.module.css'

const Contacts = () => {
  return (
    <section>
      <h2>
        Enter a name and phone number to add a contact
      </h2>
      <Form />
      <Filter />
      <ContactList />
    </section>
  );
};

export default Contacts;