import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from './colors'

const Style_Detail_Order = StyleSheet.create({
    container: {
        backgroundColor: colors.White,
        paddingHorizontal: 20,
        flex: 1
    },

    navigation: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 56,
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

    title: {
        fontFamily: 'Inter Bold',
        color: colors.Black,
        fontSize: 22,
        lineHeight: 32
    },
    
    date: {
        fontFamily: 'Inter Medium',
        fontSize: 16,
        color: colors.Black
    },

    status: {
        fontFamily: 'Inter SemiBold',
        fontSize: 16,
    },

    container_title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8
    }
})

export default Style_Detail_Order