import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonModal, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

  const [loggedIn, setLoggedin] = useState(false);
  const [showModal, setShowModal] = useState(false);

//   if (!loggedIn) {
//       setShowModal(true);
//   }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle style={{ textAlign: 'center' }} size="large">PhilStories</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer />

        <IonModal isOpen={showModal} cssClass='my-custom-class'>
            <p>This is modal content</p>
            <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>
        <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
