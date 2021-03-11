import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

const myList = [
  {
    "date": "11/03",
    "weekday": "Qui",
    "max": 27,
    "min": 17,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "12/03",
    "weekday": "Sex",
    "max": 27,
    "min": 17,
    "description": "Tempestades isoladas",
    "condition": "snow"
  },
  {
    "date": "13/03",
    "weekday": "Sáb",
    "max": 26,
    "min": 18,
    "description": "Tempestades",
    "condition": "hail"
  },
  {
    "date": "14/03",
    "weekday": "Dom",
    "max": 27,
    "min": 18,
    "description": "Tempestades",
    "condition": "rain"
  },
  {
    "date": "15/03",
    "weekday": "Seg",
    "max": 26,
    "min": 18,
    "description": "Tempestades",
    "condition": "fog"
  },
  {
    "date": "16/03",
    "weekday": "Ter",
    "max": 27,
    "min": 18,
    "description": "Tempestades",
    "condition": "clear_day"
  },
  {
    "date": "17/03",
    "weekday": "Qua",
    "max": 27,
    "min": 18,
    "description": "Tempestades",
    "condition": "clear_night"
  },
  {
    "date": "18/03",
    "weekday": "Qui",
    "max": 26,
    "min": 19,
    "description": "Tempestades",
    "condition": "cloud"
  },
  {
    "date": "19/03",
    "weekday": "Sex",
    "max": 24,
    "min": 19,
    "description": "Tempestades isoladas",
    "condition": "cloudly_day"
  },
  {
    "date": "20/03",
    "weekday": "Sáb",
    "max": 25,
    "min": 17,
    "description": "Tempestades",
    "condition": "cloudly_night"
  }
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />
      <FlatList
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list}
        data={myList}
        keyExtractor={item => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%'
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  }
})