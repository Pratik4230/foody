import { Image, Pressable, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ThemedView from '@/Themed/ThemedView'
import { Ionicons } from '@expo/vector-icons'
import SearchInput from '@/Themed/SearchInput'
import ThemedText from '@/Themed/ThemedText'
import { Colors } from '@/constants/Colors'
import BottomSheet from './BottomSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'



const CustomHeader = () => {

  const [searchText,  setSearchText] = useState("");
   const bottomSheetModalRef = useRef<BottomSheetModal>(null);

 const colorScheme = useColorScheme() ?? 'light';
const theme = Colors[colorScheme];
    let colorOfText = colorScheme == "dark" ? "#F1F1F1" : "2C2C2C"


 const openModal = () => {
  console.log("Open Modal");
  bottomSheetModalRef?.current?.present()
 }

  return (
<ThemedView safe={true} style={styles.container}   >
  <BottomSheet ref={bottomSheetModalRef}  />
   <ThemedView style={styles.topLine} >
    <Pressable style={styles.innerTop} onPress={openModal}  >
    <Image source={
      require("@/assets/images/bike.png")
    } style={styles.image}
    
    />

<ThemedView>
    <ThemedText style={{fontWeight: "bold", fontSize: 15}} > Delivery - Now </ThemedText>
    <ThemedText style={{fontWeight: "400", fontSize: 14, justifyContent:"center", alignItems:"center" }} > Selected Location 
<Ionicons name='chevron-down' size={15} color={theme.iconColor} />

    </ThemedText>
    </ThemedView>
     </Pressable>

    <Ionicons name='person' size={32}  color={"orange"}  />
    
    </ThemedView> 

     <ThemedView style={styles.bottomLine} >
      <SearchInput value={searchText} onChangeText={setSearchText}  showClear={true} style={{width: 255 , color:colorOfText }}   /> 
      <Ionicons name='settings' size={30} color={theme.iconColor} /> 
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