import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react'

const Budget = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        <IonTitle>Budget</IonTitle>
      </IonToolbar>
    </IonHeader>
  </IonPage>
)

export default Budget