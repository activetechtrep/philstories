import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonText, IonButton } from '@ionic/react';

// import './RegisterContainer.css';

interface ContainerProps { }

const processForm = () => { };

const RegisterContainer: React.FC<ContainerProps> = () => {
    return (
        <div className="container">

            <IonHeader collapse="condense">
                <IonToolbar>

                    <div className="ion-padding">
                        <IonTitle style={{ textAlign: 'center' }} size="large">Sign Up</IonTitle>
                    </div>

                </IonToolbar>
            </IonHeader>

            <form onSubmit={() => processForm()}>
                <div className="ion-padding">

                    <IonList>
                        <IonItem>
                            <IonLabel position="floating">Username <IonText color="danger">*</IonText></IonLabel>
                            <IonInput required type="text" />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Email <IonText color="danger">*</IonText></IonLabel>
                            <IonInput required type="text" />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Password <IonText color="danger">*</IonText></IonLabel>
                            <IonInput required type="password"></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Confirm Password <IonText color="danger">*</IonText></IonLabel>
                            <IonInput required type="password"></IonInput>
                        </IonItem>
                    </IonList>

                </div>

                <div className="ion-padding">
                    <IonButton expand="block" type="submit" class="ion-no-margin">Sign up</IonButton>
                </div>
            </form>

        </div>
    );
};

export default RegisterContainer;
