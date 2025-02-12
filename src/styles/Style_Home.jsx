import { StyleSheet } from 'react-native'
import colors from './colors'

const Style_Home = StyleSheet.create({
    container: {
        backgroundColor: colors.White,
        paddingTop: 20,
    },

    container_title: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        paddingHorizontal: 16
    },

    img_logo: {
        width: 110,
        height: 40
    },

    img_icon: {
        width: 24,
        height: 24
    },

    container_filer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 40,
    },

    title: {
        fontFamily: 'Inter Medium',
        fontSize: 20,
        color: colors.Black
    },

    container_category: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 16,
        marginBottom: 24,
    },

    render_category: {
        height: 40,
        paddingHorizontal: 16,
        backgroundColor: colors.Light_Blue,
        marginRight: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },

    render_text_category: {
        fontFamily: 'Inter Medium',
        fontSize: 16,
        color: colors.Black,
    },

    container_product: {
        paddingHorizontal: 10,
    },

    card_product: {
        width: '45%',
        marginHorizontal: 10,
        marginBottom: 20
    },

    img_product: {
        width: '100%',
        height: 160,
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 8
    },

    name_product: {
        fontFamily: 'Inter SemiBold',
        fontSize: 16,
        color: colors.Black,
        marginBottom: 4
    },

    type_product: {
        fontFamily: 'Inter Regular',
        fontSize: 14,
        color: colors.Grey,
    },

    price_product: {
        fontFamily: 'Inter Bold',
        fontSize: 24,
        color: colors.Red,
    },

    label_outStock: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        bottom: 16,
        right: 8
    },

    text_outStock: {
        fontFamily: 'Inter Bold',
        color: colors.White,
        fontSize: 12
    }
})

export default Style_Home