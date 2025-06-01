import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomHeader = () => {
  return (
<SafeAreaView   style={{backgroundColor: '#fff', flex:1 }} >
      <View style={{flex: 1 }} >
        <Text>Hello</Text>
      </View>
      </SafeAreaView>
  
  )
}

export default CustomHeader

const styles = StyleSheet.create({})