import React from 'react';
import { useQuery } from 'react-query';

import logo from './logo.svg';
import './App.css';

async function getNotifications() {
  const response = await fetch('http://localhost:3001/notifications');
  const notifications = await response.json();

  return notifications;
}

function App() {
  const { data, isLoading } = useQuery('notifications', getNotifications, {
    refetchInterval: 1000 * 10, //Refetch every 5 seconds
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="notifications">
        {
          data.notifications.map((not: any) => (
            <div key={not.id} className="notification">
              <div className="header">
                <strong>{not.title}</strong>
                <p>{not.id}</p>
              </div>
              <p>{not.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
