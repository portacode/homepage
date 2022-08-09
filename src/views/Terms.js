import React from 'react';
import TermsOfService from '../components/sections/TermsOfService';
import Container from '../components/sections/Container';

const Terms = () => {
  return (
    <Container
      title="Portacode's Terms of Service"
      paragraph="Please read the following terms of service carefully before using Portacode"
    >
      <TermsOfService />
    </Container>
  );
}

export default Terms;