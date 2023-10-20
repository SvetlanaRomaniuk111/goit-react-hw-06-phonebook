import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selector } from 'store/contacts/selector';

const ContactList = () => {
  const { items, filteredItems } = useSelector(selector);

  return (
    <div>
      {items && (
        <ul className={css.list_group}>
          {(filteredItems ?? items).map(el => (
            <Contact contact={el} key={el.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
