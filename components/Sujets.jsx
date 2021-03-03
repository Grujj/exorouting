import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../App'
import { Route, Link } from "react-router-native";
import { Sujet } from './Sujet';

export const Sujets = ({ match }) => {
    console.log(match);
    return (

            <View>

                <Link to={`${match.url}/premierRendu`} underlayColor="#f0f4f7" style={styles.subNavItem}>
                    <Text>Premier Rendu avec React</Text>
                </Link>
                <Link to={`${match.url}/deuxiemeRendu`} underlayColor="#f0f4f7" style={styles.subNavItem}>
                    <Text>Deuxieme Rendu avec React</Text>
                </Link>

                <Route path={`${match.url}/:topicId`} component={Sujet} />
                <Route 
                    exact 
                    path={match.url} 
                    render={() => 
                    <Text style={styles.topic}>Choisissez ce que vous souhaitez développer</Text>
                    }
                />

            </View>

    )
}
