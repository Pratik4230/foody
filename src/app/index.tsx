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
    
    <ThemedView style={{paddingHorizontal:10  , flex: 1, height: 50 }} >
      <ThemedText  > Page </ThemedText>
      

    </ThemedView>
  
  )
}

export default  Page 