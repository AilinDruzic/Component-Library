import React, { useState } from 'react'
import Button from './Button.jsx'
import Alert from './Alert.jsx'
import Badges from './Badges.jsx'
import Card from './Card.jsx'
import Modal from './Modal.jsx'
import './App.css'
import { AiOutlineWarning } from 'react-icons/Ai'

function App() {
  const [showModal, setShowModal] = useState(false);

  function onDismiss() {
    alert("hej");
  }
 

  return (
   <div>
   <Button color="primary" size="small" title={"Click!"} disabled={true}/>
   <Alert onDismiss={onDismiss} color="primary" size="small" title={"Alert"} icon={<AiOutlineWarning/>} />
   <Badges color="primary" size="small" title={"Warning!"} icon={<AiOutlineWarning />} />
   <Card href="https://cdn.happyrail.com/uploads/landingpage_images/bosnia_herzegovina_mostar_crucero.jpg" 
   imgAlt="En bild på bron i Mostar"
   imgSrc="bosnien.jpeg" />

  <button onClick={()=>setShowModal(true)}>
    Open!
  </button>


   <Modal show={showModal} >
      <Modal.Header>
          <h1>Header</h1>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world are
              updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes
              into effect on May 25 and is meant to ensure a common set of data
              rights in the European Union. It requires organizations to notify users
              as soon as possible of high-risk data breaches that could personally
              affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={()=>setShowModal(false)}>I accept</button>
        </Modal.Footer>
      </Modal>
   </div>
  )
}

export default App;
