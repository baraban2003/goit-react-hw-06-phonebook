import Container from './components/Container';
import ContactList from './components/ContactList';
import SearchForm from './components/SearchForm';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <SearchForm />
        <ContactList />
      </Container>
    </div>
  );
}
