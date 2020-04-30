import React from "react";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav"
import ContactForm from "../components/Forms/ContactForm"

const Contact = () => {
  return (
    <>
        <Header />
        <ContactForm />
        <div className="h-16"></div>
        <BottomNav/>
    </>
  );
};

export default Contact;
