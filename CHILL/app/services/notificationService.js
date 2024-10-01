// services/notificationService.js

import { messaging } from './firebaseConfig';
import { Alert } from 'react-native';

messaging.onMessage(async remoteMessage => {
    Alert.alert('Usage Alert', remoteMessage.notification.body);
});

const sendNotification = async (title, body) => {
    await messaging.send({
        notification: {
            title: title,
            body: body,
        },
        token: MY_DEVICE_TOKEN, 
    });
};

export { sendNotification };
