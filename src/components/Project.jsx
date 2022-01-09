import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import { HiExternalLink } from 'react-icons/hi';

import Image from './Image';

import '../assets/css/Project.css';
import { useState } from 'react';

Modal.setAppElement('#root');

const Project = ({ image, alt, title, model, link, description, srcCode }) => {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <div className="project-container" onClick={openModal} modelo={model}>
        <Image alt={alt} title={title} image={image} />
      </div>
      <Modal
        className='modal'
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="modal-container">
          <div className="modal-nav">
            <button onClick={closeModal}>
              <GrClose />
            </button>
          </div>
          <h2 className="title">{title}</h2>
          <div className="description">
            <p>{description}</p>
            {model !== 'trabalho' ? (
              <div className="link">
                <a href={link} target="_blank" rel="noreferrer">
                  Acessar Projeto
                  <HiExternalLink />
                </a>
                <a href={srcCode} target="_blank" rel="noreferrer">
                  Acessar Código Fonte
                  <HiExternalLink />
                </a>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Project;
