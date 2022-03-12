import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        //flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    legendaTitulo:{
        fontWeight: 'bold',
        fontSize: 40,        
        alignSelf: 'center',        
        marginTop: 30,
    },

    areaNome: {
        width: '90%',
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,        
        alignSelf: 'center',
    },
    areaSenha: {
        marginLeft: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 30,
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        //backgroundColor: '#F2F5A9',

    },
    areaCampoSenha: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',

    },
    campoSenha: {
        marginBottom: 30,
        height: 50,
        width: '40%',
        borderWidth: 1,
        fontSize: 20,
        paddingHorizontal: 10,
        backgroundColor: '#F2F5A9',
        marginLeft: 30,
        marginRight: 30,
    },
    campoEdicao: {
        height: 50,
        borderWidth: 1,
        fontSize: 20,
        backgroundColor: '#F2F5A9',
        paddingHorizontal: 10,
    },
    legendaCadastro: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    legendaSenha: {
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'space-between',
    },

    areaBotes: {
        marginTop: 30,
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    botaoSalvar: {
        backgroundColor: '#A9E2F3',
        borderWidth: 1,
        borderRadius: 30,
        width: '33%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaoCarregar: {
        backgroundColor: '#A9E2F3',
        borderWidth: 1,
        borderRadius: 30,
        width: '33%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaoLimpar: {
        marginTop: 30,
        width: '33%',
        height: 50,
        backgroundColor: '#A9E2F3',
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
});

export default styles;