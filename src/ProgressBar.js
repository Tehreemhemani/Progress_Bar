import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { VictoryPie } from 'victory-native';
import * as Progress from 'react-native-progress';





export default function ProgressBar() {

  const [percent, setPercent] = useState(0);

  function getData(percent) {
    const data = [];
    for (let i = 1; i <= 50; i++) {
      data.push({ x: i, y: 2 });
    }
    return data;
  }


  return (
    <View>

      <View>
        <Text style={styles.Text}>  Percentage Progress Bar </Text>
      </View>
      <TextInput
        style={styles.TextInput1}
        keyboardType="numeric"
        onChangeText={text => setPercent(Number(text))}
        value={String(percent)}
      />

      <View>

        <VictoryPie
          padAngle={1}
          data={getData(percent)}

          innerRadius={80}
          cornerRadius={0}
          labels={() => null}
          style={{
            data: {
              fill: ({ index }) => {
                const color = index < percent / 2 ? 'gold' : 'gray';
                return color;
              },
            },
          }}
        />
        <Text style={styles.output}>
          {percent}%
        </Text>

      </View>


      
    </View>

  )
}

const styles = StyleSheet.create({

  TextInput1: {
    borderWidth: 2,
    borderColor: "#86939e",
    marginHorizontal: 50,
    borderRadius: 12,
    paddingLeft: 20,
    marginTop: 50

  },

  output: {
    position: 'absolute',
    top: 155,
    left: '50%',
    color: 'black',
    marginHorizontal: -27,
    fontSize: 40,




  },

  Text: {
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 20


  }







})