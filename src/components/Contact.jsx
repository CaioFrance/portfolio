import { useState } from 'react';
import mailer from '../services/mailer';

import InfoBar from './InfoBar';

import '../assets/css/Contact.css';

const Contact = () => {
  const [release, setRelease] = useState({
    name: '',
    email: '',
    company: '',
    contact: '',
    description: '',
  });

  async function handleSendMailer(e) {
    e.preventDefault();

    await mailer.post('/api/v1/mailer', release);
    console.log(release);
  }

  return (
    <div id="contato">
      <InfoBar label="Contate-me" />
      <div className="contact-container">
        <div className="contact-description">
          <h2>Olá, aguardo seu contato!</h2>
          <p>
            Você pode preencher o formulário e me enviar uma mensagem, ou pelo
            WhatsApp, para conversarmos sobre o seu projeto e darmos um{' '}
            <span
              style={{ color: 'var(--secondary-color)', fontSize: '1.6rem' }}
            >
              UP!
            </span>{' '}
            para o seu negócio.
          </p>
        </div>
        <form className="form-container" onSubmit={(e) => handleSendMailer(e)}>
          <div className="input-name">
            <label htmlFor="name">Nome: </label>
            <input
              type="text"
              onChange={(e) => setRelease({ ...release, name: e.target.value })}
              name="name"
              id="name"
              value={release.name}
            />
          </div>
          <div className="input-email">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              onChange={(e) =>
                setRelease({ ...release, email: e.target.value })
              }
              name="email"
              id="email"
              value={release.email}
            />
          </div>
          <div className="input-company">
            <label htmlFor="company">Empresa: </label>
            <input
              type="text"
              onChange={(e) =>
                setRelease({ ...release, company: e.target.value })
              }
              name="company"
              id="company"
              value={release.company}
            />
          </div>
          <div className="input-contact">
            <label htmlFor="contact">Contato: </label>
            <input
              type="text"
              onChange={(e) =>
                setRelease({ ...release, contact: e.target.value })
              }
              name="contact"
              id="contact"
              value={release.contact}
            />
          </div>
          <div className="input-description">
            <label htmlFor="description">Descrição: </label>
            <textarea
              type="text"
              onChange={(e) =>
                setRelease({ ...release, description: e.target.value })
              }
              name="description"
              id="description"
              value={release.description}
            />
          </div>
          <input type="submit" className="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
