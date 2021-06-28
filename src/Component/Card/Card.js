import React from 'react';
//import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Card.css';
const customStyles = {
  content: {
    padding:'0px',
    width: '420px',
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function Card(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(props.displayValue);

//   function openModal() {
//     setIsOpen(true);
//   }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'white';
    subtitle.style.backgroundColor="#4b0b55";
    subtitle.style.padding= "15px";
    subtitle.style.fontWeight= "bolder";
    subtitle.style.fontSize= "20px";
  }

  function closeModal() {
    setIsOpen(false);
    props.setCardValue(false);
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div ref={(_subtitle) => (subtitle = _subtitle)}>Invalid Input</div>
        <div className='card-display'>{props.messages}</div>
        <button className="button" onClick={closeModal}>okay</button>

      </Modal>
    </div>
  );
}
export default Card;
//ReactDOM.render(<App />, appElement);