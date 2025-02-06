import { StyleSheet } from 'react-native'
import colors from './colors'

const Style_Cart = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: colors.White,
        paddingTop: 20,
        paddingHorizontal: 20,
    },

    container_cart: {
        flex: 1
    },

    title_cart: {
        fontFamily: 'Inter Bold',
        fontSize: 20,
        color: colors.Black
    },

    container_bottom: {
        position: 'absolute',
        bottom: 0,
        left: 20,
        right: 20,
    },

    btn_payment: {
        width: '100%',
        height: 56,
        backgroundColor: colors.Red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 24,
    },

    text_payment: {
        fontFamily: 'Inter Bold',
        fontSize: 18,
        color: colors.White
    },

    container_empty: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    img_icon_empty: {
        width: 80,
        height: 80,
    },

    title_empty: {
        fontFamily: 'Inter Bold',
        color: colors.Black,
        fontSize: 24,
        marginVertical: 8
    },

    text_empty: {
        width: '90%',
        fontFamily: 'Inter Regular',
        color: colors.Black,
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24
    },

    btn_shopping: {
        width: '60%',
        height: 48,
        backgroundColor: colors.Red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        marginTop: 16,
    },
    
    text_shopping:{
        fontFamily: 'Inter Bold',
        fontSize: 16,
        color: colors.White
    }
})

export default Style_Cart