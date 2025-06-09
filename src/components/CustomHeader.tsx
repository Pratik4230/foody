import { Image, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ThemedView from '@/Themed/ThemedView'
import { Ionicons } from '@expo/vector-icons'
import SearchInput from '@/Themed/SearchInput'
import ThemedText from '@/Themed/ThemedText'
import { Colors } from '@/constants/Colors'



const CustomHeader = () => {

  const [searchText,  setSearchText] = useState("");
 const colorScheme = useColorScheme() ?? 'light';
const theme = Colors[colorScheme];
    let colorOfText = colorScheme == "dark" ? "#F1F1F1" : "2C2C2C"

  return (
<ThemedView safe={true} style={styles.container}   >
   <ThemedView style={styles.topLine} >
    <ThemedView style={styles.innerTop} >
    <Image source={
      require("@/assets/images/bike.png")
    } style={styles.image}
    
    />

<ThemedView>
    <ThemedText style={{fontWeight: "bold", fontSize: 15}} > Delivery - Now </ThemedText>
    <ThemedText style={{fontWeight: "400", fontSize: 14}} > Selected Location </ThemedText>
    </ThemedView>
     </ThemedView>

    <Ionicons name='person' size={32}  color={"orange"}  />
    
    </ThemedView> 

     <ThemedView style={styles.bottomLine} >
      <SearchInput value={searchText} onChangeText={setSearchText}  showClear={true} style={{width: 255 , color:colorOfText }}   /> 
      <Ionicons name='settings' size={30} color={"gray"} /> 
     </ThemedView>

 </ThemedView>
  
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  container:{
    gap:7
  },

  topLine:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding:3,
    gap:2
  },

  innerTop:{
    flexDirection: "row",
    gap:10
  },

  image: {
  height: 47,
  
  },

  bottomLine: {
    flexDirection: "row",
  gap: 6,
  alignItems: "center"
  }

})