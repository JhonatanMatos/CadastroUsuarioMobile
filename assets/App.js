import { StatusBar } from 'expo-status-bar';
import { Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useState } from 'react';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();

  function limpaCampos() {
    setNome('');
    setTelefone('');
  }


  async function salvar() {
    let objContato = {
      nome: nome,
      telefone: telefone,
    };
    
    
    try{
      const stringJson = JSON.stringify(objContato);
    
      await AsyncStorage.setItem("@contato", stringJson);
      Alert.alert("Salvo com sucesso! " ); 
      //console.warn(stringJson);     
    }
    catch(erro)
    {
       Alert.alert("Ocorreu um erro: " + erro.toString());
    }  
  }


async function carregar(){
  try{
    const conteudoJson = await AsyncStorage.getItem('@contato');
    if (conteudoJson != null){
      const objContato = JSON.parse(conteudoJson);
      setNome(objContato.nome);
      setTelefone(objContato.telefone);
    }
    else{
      limpaCampos();
      Alert.alert("Não há cadastro!");
    }
  }
  catch(erro)
  {
    Alert.alert(erro.toString());
  }
}



  return (
    <View style={styles.container}>
      <Text style={styles.tituloProjeto} >Persistindo dados localmente!</Text>

      <View style={styles.areaCadastro}>
        <View style={styles.areaNome}>
          <Text style={styles.legendaCadastro}>Nome</Text>
          <TextInput
            style={styles.campoEdicao}
            onChangeText={(texto) => setNome(texto)}
            value={nome}                   
          />

        </View>

        <View style={styles.areaTelefone}>
          <Text style={styles.legendaCadastro}>Telefone</Text>
          <TextInput
            style={styles.campoEdicao}
            keyboardType='phone-pad'
            onChangeText={(texto) => setTelefone(texto)}
            value={telefone}
          />
        </View>
      </View>

      <View style={styles.areaBotes}>
        <TouchableOpacity
          style={styles.botaoSalvar}
          onPress={() => salvar()}
        >
          <Text style={styles.legendaCadastro}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCarregar}
            onPress={()=> carregar()}>
          <Text style={styles.legendaCadastro}>Carregar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoLimpar}
          onPress={() => limpaCampos()}
        >
          <Text style={styles.legendaCadastro}>Limpar</Text>
        </TouchableOpacity>
      </View>



      <StatusBar style="auto" />
    </View >
  );
}


