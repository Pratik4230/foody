import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { forwardRef, useMemo } from 'react'
import { BottomSheetModal, BottomSheetView, useBottomSheetModal } from '@gorhom/bottom-sheet'
import ThemedText from '@/Themed/ThemedText'
import ThemedView from '@/Themed/ThemedView'
import ThemedButton from '@/Themed/ThemedButton'
import Spacer from '@/Themed/Spacer'
import { Ionicons } from '@expo/vector-icons'
import { useAppTheme } from '@/hooks/useAppTheme'



export type Ref = BottomSheetModal

const BottomSheet = forwardRef<Ref>((props, ref) => {

    const snapPoints = useMemo(() => ['50%'], [])

    const {dismiss} = useBottomSheetModal();

    const theme = useColorScheme()
    const { colors } = useAppTheme();


    console.log("theme", theme);
    

  return (
    <BottomSheetModal
    handleIndicatorStyle={{display: "none"}}
    backgroundStyle={{backgroundColor: colors.navBackground}}
    overDragResistanceFactor={0} ref={ref} snapPoints={snapPoints}  >
<BottomSheetView style={styles.sheetView} >
    <ThemedView>
<Spacer height={10} />
    <ThemedView style={styles.head} >
        <ThemedText style={styles.tab} >Delivery</ThemedText>
        <ThemedText style={styles.tab} > Pickup </ThemedText>
    </ThemedView>

    <Spacer height={20} />

    <ThemedText title={true} > Your Location </ThemedText>
    <Pressable style={styles.raw} >
        <Ionicons name='location' size={25} color={colors.iconColor} />
        <ThemedText>Location</ThemedText>

        <Ionicons name='chevron-forward' size={30} color={colors.iconColor}  />
    </Pressable>

      <Spacer height={10} />

    <ThemedText title={true}  > Arrival Time </ThemedText>
    <Pressable style={styles.raw} >
        <Ionicons name='stopwatch' size={25} color={colors.iconColor} />
        <ThemedText>Now</ThemedText>

        <Ionicons name='chevron-forward' size={30} color={colors.iconColor} />
    </Pressable>

    <Spacer/>

    <ThemedButton variant='orange' onPress={() => dismiss()} >Confirm</ThemedButton>
    </ThemedView>
</BottomSheetView>
    </BottomSheetModal>
  )
})

export default BottomSheet

const styles = StyleSheet.create({
    sheetView: {
    flex:1,
        // marginVertical:40,
  
    },

    head:{
        flexDirection: 'row',
        gap: 10,
        justifyContent: "center"

    },

    tab:{

         backgroundColor: "gray",
         padding: 7,
  borderRadius: 6,
  color: "white",
  fontSize: 15
  
        },

    raw: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingVertical: 7
    }
})