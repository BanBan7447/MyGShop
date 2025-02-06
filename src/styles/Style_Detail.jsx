import { StyleSheet } from 'react-native'
import colors from './colors'

const Style_Detail = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
    },

    navigation: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        marginTop: 8
    },

    card: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.Green,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginHorizontal: 20,
        borderRadius: 12,
    },

    text_card: {
        fontFamily: 'Inter Bold',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Inter Bold',
        fontSize: 18,
    },

    cart: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    text_cart: {
        fontFamily: 'Inter Medium',
        fontSize: 20,
        color: colors.Black,
    },

    img_icon: {
        width: 24,
        height: 24,
        marginRight: 16
    },

    img_icon_cart: {
        width: 24,
        height: 24,
        marginRight: 8
    },

    text_navigation: {
        fontFamily: 'Inter Medium',
        color: colors.Black,
        fontSize: 20
    },

    img_product: {
        width: 390,
        height: 300,
    },

    container_title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20
    },

    container_info: {
        marginTop: 16,
        marginHorizontal: 20
    },

    text_name: {
        fontFamily: 'Inter SemiBold',
        fontSize: 24,
        color: colors.Black,
        marginBottom: 4
    },

    text_price: {
        fontFamily: 'Inter Bold',
        fontSize: 28,
        color: colors.Red,
        marginBottom: 4
    },

    text_title_state: {
        fontFamily: 'Inter Medium',
        color: colors.Black,
        fontSize: 16,
        marginBottom: 24
    },

    text_title_describe: {
        fontFamily: 'Inter Medium',
        color: colors.Black,
        fontSize: 20
    },

    text_describe: {
        fontFamily: 'Inter Regular',
        color: colors.Black,
        fontSize: 14,
        marginBottom: 24
    },

    btn_AddCart: {
        width: '100%',
        height: 56,
        backgroundColor: colors.Red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 24
    },

    text_AddCart: {
        fontFamily: 'Inter Bold',
        fontSize: 18,
        color: colors.White
    }
    
})

export default Style_Detail