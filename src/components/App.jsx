// import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

import { Container } from './Container/Container.styled';
import { MainTitle } from './MainTitle/MainTitle';
import { ContactForm } from './ContactForm/ContactForm';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) || []
  // );

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainTitle title="Phonebook ☎" />
        <ContactForm />
        <Title title="Contacts 📞" />
        <Filter />
        <ContactList />
        <GlobalStyleComponent />
      </Container>
    </ThemeProvider>
  );
};
