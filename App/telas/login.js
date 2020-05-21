import React, { useState, useEffect } from 'react';
import { Text, Animated,TouchableOpacity,Alert, StyleSheet,TextInput,Image} from 'react-native';

const FadeInView = (props) => { // efeito de fade in
    const [fadeAnim] = useState(new Animated.Value(0))  // valor de opacidade
  
    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1, // até quanto de opacidade vai, entre 0-1
          duration: 2500, // duração em ms
        }
      ).start();
    }, [])
  
    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}>
        {props.children}
      </Animated.View>
    );
  }
  
  
  
  
class LoginScreen extends React.Component {
  
    static navigationOptions = {
      title: 'Seja Bem-vindo!',
      headerStyle: {
        backgroundColor: '#aeead3',
      }, 
      headerTintColor: 'green',
    };
  
    goToMain= () => {
      this.props.navigation.navigate('Stack');
    }
  
    goToCadastro= () => {
      this.props.navigation.navigate('TelaCadastro');
    }
  
    render() {
      return (
        <FadeInView style={styles.container}>
          <Image
            source= {require('../imagens/logo.png')}
            style={styles.logo}
          />
  
          <Text style={styles.title}> Waste Not </Text>
          <Text style={{color:'green', fontSize:15}}>Evitar o desperdício é o início</Text>
  
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
          />
  
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite sua senha"
          />
  
          <TouchableOpacity
            style={styles.botao}
            onPress={ () => {this.goToMain()} }
          >
  
            <Text style={styles.botaoText}>Login</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => this.goToCadastro()}
          >
            <Text style={styles.cadastro}>Cadastrar-se</Text>
          </TouchableOpacity>
  
      </FadeInView>
  
      )
    }
  
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#aeead3'
    },
  
    logo: {
      width: 150,
      height: 150,
      borderRadius: 100,
      },
  
      input: {
        marginTop: 15,
        padding: 10,
        width: 300,
        backgroundColor: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
      },
  
      botao: {
        width: 300,
        height: 42,
        backgroundColor:'black',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
      },
  
      botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
      },
  
      title: {
        marginTop: 10,
        fontSize: 40,
        fontWeight: 'bold'
    },
  
    cadastro:{
      fontSize:15,
      color:'blue',
      marginTop: 15,
    }
  })

export default LoginScreen;