import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from './colors'

const Style_MyOders = StyleSheet.create({
    container: {
        backgroundColor: colors.White,
    },

    navigation: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 56,
        marginHorizontal: 24,
        marginTop: 8,
        marginBottom: 8
    },

    img_icon: {
        width: 24,
        height: 24,
        marginRight: 16
    },

    text_navigation: {
        fontFamily: 'Inter Medium',
        color: colors.Black,
        fontSize: 20
    },

    contain_text_input: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        backgroundColor: colors.Light_Blue,
        marginHorizontal: 20,
        paddingHorizontal: 16,
        borderRadius: 12,
        marginTop: 8,
        marginBottom: 24
    },

    text_input: {
        flex: 1,
        fontSize: 16,
        marginStart: -4
    },

    container_order: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.Grey
    },

    container_content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    oderId: {
        width: '50%',
        fontFamily: 'Inter SemiBold',
        fontSize: 18,
        color: colors.Black,
    },

    date: {
        fontFamily: 'Inter Regular',
        fontSize: 14,
        color: colors.Black,
    },

    body: {
        fontSize: 16,
        fontFamily: 'Inter Medium',
        lineHeight: 24
    },

    btn_detail: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: colors.Red,
        borderRadius: 12
    },

    text_detail: {
        fontFamily: 'Inter SemiBold',
        fontSize: 16,
        color: colors.White
    },

    btn_filter: {
        marginRight: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        backgroundColor: 'transparent',
        backgroundColor: colors.Light_Blue,

    },

    btn_active_filter: {
        backgroundColor: 'transparent',
        backgroundColor: colors.Red,
    },

    text_filter: {
        color: colors.Grey,
        fontSize: 16,
        fontFamily: 'Inter SemiBold'
    },

    text_active_filter: {
        color: colors.White,
        fontSize: 16,
        fontFamily: 'Inter SemiBold'
    }
})

export default Style_MyOders