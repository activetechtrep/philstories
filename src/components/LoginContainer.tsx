import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonItemDivider, IonText, IonButton } from '@ionic/react';

// import './LoginContainer.css';

interface ContainerProps { }

const processForm = () => {};

const LoginContainer: React.FC<ContainerProps> = () => {
    return (
        <>
        <IonHeader translucent>
            <IonToolbar>

                <IonTitle style={{ textAlign: 'center' }} size="large">PhilStories</IonTitle>

            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>

            <form onSubmit={() => processForm()}>

                <div className="ion-padding">
                    <IonList>

                        <IonItem>
                            <IonLabel position="floating">Username <IonText color="danger">*</IonText></IonLabel>
                            <IonInput required type="text" />
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Password <IonText color="danger">*</IonText></IonLabel>
                            <IonInput required type="password"></IonInput>
                        </IonItem>
                    </IonList>
                </div>

                <div className="ion-padding">
                    <IonButton expand="block" type="submit" class="ion-no-margin">Sign-in</IonButton>
                </div>
            </form>

        </IonContent>
        </>
    );
};

export default LoginContainer;
