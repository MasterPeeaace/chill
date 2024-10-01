// components/RewardsSystem.js

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { firestore } from '../services/firebaseConfig';

const RewardsSystem = () => {
    const [rewardPoints, setRewardPoints] = useState(0);

    useEffect(() => {
        const calculateRewards = async () => {
            // Fetch usage data
            const usageSnapshot = await firestore.collection('usage').get();
            const totalUsage = usageSnapshot.docs.reduce((total, doc) => total + doc.data().time, 0);

            // Compare with previous days and award points
            if (totalUsage < 3600) { // Example: Reward if usage is under 1 hour
                setRewardPoints(rewardPoints + 10); // Add 10 points as reward
            }
        };

        calculateRewards();
    }, []);

    return (
        <View>
            <Text>Your Reward Points: {rewardPoints}</Text>
        </View>
    );
};

export default RewardsSystem;
