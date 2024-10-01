// components/UsageTracker.js

import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { firestore } from '../services/firebaseConfig';

const UsageTracker = () => {
    const [dailyUsage, setDailyUsage] = useState(0);

    useEffect(() => {
        const trackUsage = async () => {
            // Simulate tracking app usage
            const startTime = Date.now();

            // When the app is closed, stop tracking
            const endTime = Date.now();
            const usageTime = (endTime - startTime) / 1000; // convert to seconds

            // Save to Firestore
            await firestore.collection('usage').add({
                app: 'Example App',
                time: usageTime,
                date: new Date()
            });

            setDailyUsage(usageTime);
        };

        trackUsage();
    }, []);

    return (
        <View>
            <Text>Today's Phone Usage: {dailyUsage} seconds</Text>
        </View>
    );
};

export default UsageTracker;
