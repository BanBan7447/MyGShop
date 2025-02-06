import { StyleSheet } from 'react-native'
import colors from './colors'

const Style_Cart = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
        paddingTop: 20,
        paddingHorizontal: 20,
    },

    title_cart: {
        fontFamily: 'Inter Bold',
        fontSize: 20,
        color: colors.Black
    },

    btn_payment: {
        width: '100%',
        height: 56,
        backgroundColor: colors.Red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },

    text_payment: {
        fontFamily: 'Inter Bold',
        fontSize: 18,
        color: colors.White
    }
})

export default Style_Cart