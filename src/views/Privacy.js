import React from 'react';
// import sections
import Container from '../components/sections/Container';
import PrivacyPolicy from '../components/sections/PrivacyPolicy';

const Privacy = () => {

  return (
    <Container
      title="Portacode's Privacy Statment"
      paragraph="This page describes how we collect, use, and share personal information, user content and other visitor information, and how we comply with applicable data privacy laws, rules, and regulations"
    >
      <PrivacyPolicy />
    </Container>
  );
}

export default Privacy;