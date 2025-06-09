import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '@/Themed/ThemedView'
import ThemedText from '@/Themed/ThemedText'
import Spacer from '@/Themed/Spacer'
import ThemedButton from '@/Themed/ThemedButton'
import SearchInput from '@/Themed/SearchInput'
import Input from '@/Themed/Input'
import { SafeAreaView } from 'react-native-safe-area-context'

const  Page  = () => {

  const [value, setValue] = useState("")

  return (
    <SafeAreaView style={{ backgroundColor: "blue" , flex: 1  }} >
    <ThemedView style={{paddingHorizontal:10, }} >
      <Text style={{color: "red"}} > Page </Text>
      <View style={{borderColor: "red" }} >
        <Spacer/>
        <ThemedText style={{}} >Hiiiiiiiii</ThemedText>
      </View>

<ThemedButton    > Button </ThemedButton>

 <SearchInput value={value} onChangeText={setValue} placeholder='search'    />

 <Input value={value} onChangeText={setValue} placeholder='enter email'  />

    </ThemedView>
    </SafeAreaView>
  )
}

export default  Page 