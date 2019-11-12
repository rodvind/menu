import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../declarations';
import { home, list, wallet, pricetags } from 'ionicons/icons';

// interface MenuProps extends RouteComponentProps {
//   appPages: AppPage[];
// }

const Menu = () => (
  <IonMenu contentId="main" type="overlay" side="start">
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink='/home' routerDirection="none">
            <IonIcon slot="start" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink='/list' routerDirection="none">
            <IonIcon slot="start" icon={list} />
            <IonLabel>List</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink='/expenses' routerDirection="none">
            <IonIcon slot="start" icon={pricetags} />
            <IonLabel>Expenses</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink='/budget' routerDirection="none">
            <IonIcon slot="start" icon={wallet} />
            <IonLabel>Budget</IonLabel>
          </IonItem>
        </IonMenuToggle>
         
      
      </IonList>
    </IonContent>
  </IonMenu>
);

export default withRouter(Menu);
