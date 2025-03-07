import { View, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors'

const Style_Page_Cart = StyleSheet.create({
    container:{
        paddingHorizontal: 24,
        paddingTop: 16,
        backgroundColor: colors.White,
        flex: 1
    },

    title: {
        fontFamily: 'Inter Bold',
        fontSize: 24,
        color: colors.Black,
        marginBottom: 24
    },

    container_checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },

    icon_tick:{
        width: 12,
        height: 12,
    },

    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: colors.Black,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },

    checkbox_selected: {
        backgroundColor: colors.Blue
    },

    btn_delete: {
        width: 24,
        height: 24,
        position: 'absolute',
        bottom: 0,
        right: 0
    },

    icon_delete: {
        width: 10,
        height: 10,
    },

    container_quantity: {
        width: 88,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    btn_quantity: {
        width: 24,
        height: 24,
        borderRadius: 6,
        backgroundColor: colors.Light_Blue,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon_quantity: {
        width: 12,
        height: 12,
    },

    text_quantity: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Inter Regular',
        color: colors.Black
    },

    img_product: {
        width: 88,
        height: 88,
        borderRadius: 12
    },

    PaymentContainer: {
        width: '100%',
        paddingVertical: 16,
    },

    btn_payment: {
        width: '100%',
        height: 56,
        backgroundColor: colors.Red,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text_payment: {
        fontSize: 18,
        fontFamily: 'Inter Bold',
        lineHeight: 24,
        color: colors.White
    },

    Container_checkBoxAll: {
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    CheckBoxAll: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    text_CheckBoxAll: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Inter Medium'
    },

    text_totalPrice: {
        fontSize: 24,
        lineHeight: 32,
        fontFamily: 'Inter Bold',
        color: colors.Red
    }
})

export default Style_Page_Cart