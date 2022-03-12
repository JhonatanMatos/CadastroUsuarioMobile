import { StatusBar } from 'expo-status-bar';
import { Alert, Text, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [codigo, setCodigo] = useState();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [senha2, setSenha2] = useState();

  function limpaCampos() {
    setCodigo('');
    setNome('');
    setEmail('');
    setSenha('');
    setSenha2('');
  }


  async function salvar() {
    let objContato = {
      codigo: codigo,
      nome: nome,
      email: email,
      senha: senha,
      senha2: senha2,
    };

    try {
      const stringJson = JSON.stringify(objContato);
      let valida = true
      let msg = ""
      //if (!/\d/.test(objContato.codigo)) {
      if (!parseInt(objContato.codigo) || objContato.codigo < 1) {
        valida = false
        msg = "Campo Codigo invalido"
      }
      if (!(objContato.nome)) {
        valida = false
        msg = "Campo Nome invalido"
      }
      if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/.test(objContato.email)) {
        valida = false
        msg = "Campo Email invalido"
      }
      if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{5,}$/.test(objContato.senha)) {
        valida = false
        msg = "Campo Senha invalido"
      }
      if (objContato.senha2 != objContato.senha) {
        valida = false
        msg = "Campo Senha 2 invalido"
      }

      if (valida) {
        await AsyncStorage.setItem("@contato", stringJson);
        Alert.alert("Salvo com sucesso! ");
      }
      else {
        Alert.alert(msg);
      }
    }
    catch (erro) {
      Alert.alert("Ocorreu um erro: " + erro.toString());
    }
  }

  async function carregar() {
    try {
      const conteudoJson = await AsyncStorage.getItem('@contato');
      if (conteudoJson != null) {
        const objContato = JSON.parse(conteudoJson);
        setCodigo(objContato.codigo);
        setNome(objContato.nome);
        setEmail(objContato.email);
        setSenha(objContato.senha);
        setSenha2(objContato.senha2);
      }
      else {
        limpaCampos();
        Alert.alert("Não há cadastro!");
      }
    }
    catch (erro) {
      Alert.alert(erro.toString());
    }
  }

  return (

    <View style={styles.container}>

      <ScrollView>
        <Text style={styles.legendaTitulo}>Cadastro de Usuário</Text>
        <View style={styles.areaNome}>
          <Text style={styles.legendaCadastro}>Código</Text>
          <TextInput
            style={styles.campoEdicao}
            keyboardType='decimal-pad'
            onChangeText={(texto) => setCodigo(texto)}
            value={codigo}
          />
        </View>

        <View style={styles.areaNome}>
          <Text style={styles.legendaCadastro}>Nome</Text>
          <TextInput
            style={styles.campoEdicao}
            onChangeText={(texto) => setNome(texto)}
            value={nome}
          />
        </View>

        <View style={styles.areaNome}>
          <Text style={styles.legendaCadastro}>Email</Text>
          <TextInput
            style={styles.campoEdicao}
            onChangeText={(texto) => setEmail(texto)}
            value={email}
          />
        </View>

        <View style={styles.areaSenha}>
          <Text style={styles.legendaCadastro}>Senha</Text>
          <Text style={styles.legendaCadastro}>Confirmar senha</Text>
        </View>

        <View style={styles.areaCampoSenha}>
          <TextInput
            style={styles.campoSenha}
            secureTextEntry={true}
            onChangeText={(texto) => setSenha(texto)}
            value={senha}
          />
          <TextInput
            style={styles.campoSenha}
            secureTextEntry={true}
            onChangeText={(texto) => setSenha2(texto)}
            value={senha2}
          />
        </View>

        <View style={styles.areaBotes}>
          <TouchableOpacity
            style={styles.botaoSalvar}
            onPress={() => salvar()}
          >
            <Text style={styles.legendaCadastro}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoCarregar}
            onPress={() => carregar()}>
            <Text style={styles.legendaCadastro}>Carregar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.botaoLimpar}
          onPress={() => limpaCampos()}
        >
          <Text style={styles.legendaCadastro}>Limpar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />

      </ScrollView>


    </View >
  );
}


