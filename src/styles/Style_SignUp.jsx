import { StyleSheet } from 'react-native'
import colors from './colors'

const Style_SignUp = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
        paddingTop: 24,
        paddingHorizontal: 24,
      },
    
      img_logo: {
        width: 110,
        height: 40
      },
    
    //   container_form: {
    //     flex: 1,
    //     justifyContent: 'center'
    //   },
    
      title_page: {
        fontFamily: 'Inter Bold',
        color: colors.Black,
        fontSize: 28,
        textAlign: 'center',
        marginTop: 24,
        marginBottom: 24
      },
    
      title_input: {
        fontFamily: 'Inter Medium',
        color: colors.Grey,
        fontSize: 16,
        marginBottom: 8,
      },
    
      text_input: {
        width: '100%',
        height: 56,
        backgroundColor: colors.Light_Blue,
        borderRadius: 16,
        marginBottom: 24,
        paddingLeft: 20
      },
    
      text_forgot: {
        fontFamily: 'Inter Medium',
        color: colors.Black,
        fontSize: 16,
        textAlign: 'right',
        marginTop: -8,
        marginBottom: 32
      },
      
      text_caption: {
        fontFamily: 'Inter Medium',
        color: colors.Black,
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
        marginBottom: 8
      },
    
      text_btn: {
        fontFamily: 'Inter Bold',
        fontSize: 16,
        color: colors.White
      },
    
      btn_signUp: {
        width: '100%',
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.Red
      },
    
      btn_login: {
        width: '100%',
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.Blue,
        marginBottom: 24
      }
})

export default Style_SignUp