// components/UsageAlerts.js

import React, { useState, useEffect } from 'react';
import { Alert, View, Button } from 'react-native';
import { firestore } from '../services/firebaseConfig';

const UsageAlerts = () => {
    const [usageLimit, setUsageLimit] = useState(3600); // Default limit: 1 hour
    const [currentUsage, setCurrentUsage] = useState(0);

    useEffect(() => {
        const checkUsage = async () => {
            // Fetch today's usage data from Firestore
            const usageSnapshot = await firestore.collection('usage').get();
            const totalUsage = usageSnapshot.docs.reduce((total, doc) => total + doc.data().time, 0);
            setCurrentUsage(totalUsage);

            // Trigger an alert if usage exceeds limit
            if (totalUsage > usageLimit) {
                Alert.alert('Alert', 'You have exceeded your phone usage limit!');
            }
        };

        checkUsage();
    }, [currentUsage]);

    return (
        <View>
            <Text>Set Daily Usage Limit (in seconds): </Text>
            <Button title="Check Usage" onPress={() => setCurrentUsage(currentUsage)} />
        </View>
    );
};

export default UsageAlerts;
