import { useState } from 'react';
import mailer from '../services/mailer';

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
    <div>
      <form onSubmit={(e) => handleSendMailer(e)}>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          onChange={(e) => setRelease({ ...release, name: e.target.value })}
          name="name"
          id="name"
          value={release.name}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          onChange={(e) => setRelease({ ...release, email: e.target.value })}
          name="email"
          id="email"
          value={release.email}
        />
        <br />
        <label htmlFor="company">Empresa: </label>
        <input
          type="text"
          onChange={(e) => setRelease({ ...release, company: e.target.value })}
          name="company"
          id="company"
          value={release.company}
        />
        <br />
        <label htmlFor="contact">Contato: </label>
        <input
          type="text"
          onChange={(e) => setRelease({ ...release, contact: e.target.value })}
          name="contact"
          id="contact"
          value={release.contact}
        />
        <br />
        <label htmlFor="description">Descrição: </label>
        <input
          type="text"
          onChange={(e) =>
            setRelease({ ...release, description: e.target.value })
          }
          name="description"
          id="description"
          value={release.description}
        />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Contact;
