import { StyleSheet } from 'react-native'
import colors from '../styles/colors'

const Style_Page_Product = StyleSheet.create({
    container:{
        paddingHorizontal: 24,
        backgroundColor: colors.White,
        flex: 1
    },

    title: {
        flexDirection: 'row',
        width: '100%',
        height: 56,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title_text:{
        fontSize: 20,
        color: colors.Black,
        lineHeight: 28,
        fontWeight: 'medium'
    },

    cart: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    icon: {
        width: 20,
        height: 20,
        marginRight: 8,
        alignItems: 'center'
    },

    Card: {
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        backgroundColor: colors.White,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 16,
        marginHorizontal: 20,
        zIndex: 1000,
        elevation: 5,
    },

    Card_Text: {
        color: colors.Green,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Inter Bold',
        fontSize: 18,
    },

    icon_tick: {
        width: 28,
        height: 28,
        marginRight: 12
    },

    img: {
        width: '100%',
        height: 200,
        borderRadius: 16,
        marginBottom: 24
    },

    name: {
        fontSize: 24,
        color: colors.Black,
        lineHeight: 32,
        fontFamily: 'Inter Bold',
        marginBottom: 8
    },

    price: {
        fontSize: 28,
        color: colors.Red,
        lineHeight: 36,
        fontFamily: 'Inter Bold',
        marginBottom: 8
    },

    state: {
        fontSize: 16,
        color: colors.Black,
        lineHeight: 24,
        fontFamily: 'Inter Medium',
        marginBottom: 24
    },

    btn: {
        width: '100%',
        height: 56,
        borderRadius: 16,
        backgroundColor: colors.Red,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 56,
    },

    btn_text: {
        fontSize: 18,
        color: colors.White,
        lineHeight: 24,
        fontFamily: 'Inter Bold',
    }
})

export default Style_Page_Product