import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ThemedView from '@/Themed/ThemedView'

const CustomHeader = () => {
  return (
<ThemedView safe={true}   >
      <View >
        <Text style={styles.container} >Hello</Text>
      </View>
      </ThemedView>
  
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  container:{
    height: 60,
    

  }
})