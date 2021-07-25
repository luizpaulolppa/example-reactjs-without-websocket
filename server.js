const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());

let notifications = [];

setInterval(() => {
  addNotification();
}, 15000);

function addNotification() {
  console.log('Add Notification....');
  notifications.push(
    {
      id: uuidv4(),
      title: 'Notificação ' + uuidv4(),
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    }
  );
}

app.get('/notifications', (_req, res) => {
  res.json({ notifications });
});

app.listen(3001);