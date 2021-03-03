import React from 'react'
import { View, Text } from 'react-native'
import { styles } from"../App";

export function Sujet({ match }) {
    console.log(match);
    return (
        <View>
            <Text style={styles.topic}>{match.params.topicId}</Text>
        </View>
    )
}
