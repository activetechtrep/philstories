import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonModal, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import LoginContainer from '../components/LoginContainer';
import RegisterContainer from '../components/RegisterContainer';
import './Home.css';

const Auth: React.FC = () => {

    const [loggedIn, setLoggedin] = useState(false);
    const [showModal, setShowModal] = useState(false);

    //   if (!loggedIn) {
    //       setShowModal(true);
    //   }

    return (
        <IonPage>

            <LoginContainer />

            <IonModal isOpen={showModal} cssClass='my-custom-class'>
                
                <RegisterContainer />

                <div className="ion-padding">
                    <IonButton expand="full" class="ion-no-margin" onClick={() => setShowModal(false)}>Back to Login</IonButton>
                </div>
            </IonModal>

            <div className="ion-padding">
                <IonButton expand="full" class="ion-no-margin" onClick={() => setShowModal(true)}>Create an account</IonButton>
            </div>
            
        </IonPage>
    );
};

export default Auth;
