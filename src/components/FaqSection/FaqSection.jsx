import React from 'react';
import { Accordion } from 'react-bootstrap';
import './FaqSection.css';

const FaqSection = () => {
  return (
    <section id="faq-section" className="container my-5">
      <h2 className="text-center text-purple mb-4">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className='accordion-header'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eveniet iure asperiores! Natus, ad esse?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nulla libero asperiores autem repellat soluta doloribus suscipit similique porro ipsa.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className='accordion-header'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa cumque aut?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, blanditiis labore, enim fugit unde dignissimos perspiciatis eaque, doloremque repellendus recusandae sit accusantium.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className='accordion-header'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nam id accusantium animi repudiandae dignissimos?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facere dolore quam iusto veniam nesciunt, libero sunt amet nobis quibusdam reprehenderit vitae modi error sit.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};
export default FaqSection;