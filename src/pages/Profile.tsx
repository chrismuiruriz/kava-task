import { IonContent, IonHeader, IonButtons, IonButton, IonIcon, IonPage, IonTitle, IonToolbar, IonItemDivider } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ellipsisHorizontal, ellipsisVertical, power } from "ionicons/icons";
import { useHistory, RouteComponentProps } from "react-router-dom";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonItem, IonLabel, IonAvatar } from '@ionic/react';

interface ResetProps
  extends RouteComponentProps<{
    id: string;
  }> { }

const Dashboard: React.FC<ResetProps> = ({ match }) => {
  const history = useHistory();
  const [users, setUsers] = useState<Array<any>>([]);
  useEffect(() => {
    const api = axios.create({
      baseURL: `https://reqres.in/api`
    })
    api.get("/users")
      .then(res => {
        setUsers(res.data.data)
      })
      .catch(error => {
        console.log("Error fetching data")
      })
  }, [])

  const logout = () => {
    history.push("/login/");
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dasboard</IonTitle>
          <IonButtons slot="primary">
            <IonButton color="primary" onClick={logout}>
              <IonIcon slot="icon-only" ios={power} md={power} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h4>Kava Test App</h4>
              <IonItemDivider></IonItemDivider>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {users.map((user, i) => {
                return (
                  <IonItem key={i}>
                    <IonAvatar>
                      <img src={user.avatar} />
                    </IonAvatar>
                    <IonLabel>
                      <h2 style={{ paddingLeft: "10px" }}>{user.first_name + " " + user.last_name} </h2>
                      <p style={{ paddingLeft: "10px" }}>{user.email}</p>
                    </IonLabel>
                  </IonItem>
                );
              })}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
