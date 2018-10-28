import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

class Botao extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.styles = StyleSheet.create({
			botao:{
				width:250,
				height:50,
				borderWidth:2,
				borderColor:props.color,
				backgroundColor:'#FFF',
				borderRadius:25
			},
			botaoArea:{
				flex:1,
				flexDirection:'row',
				justifyContent:'center',
				alignItems:'center'
			},
			botaoText:{
				color:props.color,
				fontSize:14,
				fontWeight:'bold'
			}
		});
	}

	render() {
		return(
			<TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
				<View style={this.styles.botaoArea}>
					<Text style={this.styles.botaoText}> Gerar Frase </Text>
				</View>
			</TouchableOpacity>
		);
	}

}

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {texto:'App Developed by Marcos André...'};

		this.frases = ['Não é a linguagem de programação que define o programador, mas sim sua lógica.', 'Faça como um programador. Quando tudo está errado e confuso, apague tudo e recomece do zero.', 'Faça da sua vida mais "Responsivo"', 'Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema.', 'Mais vale uma crítica construtiva do que cem comentários inúteis.', 'É só uma alteração pequena', 'Não está funcionando…', 'O Café acabou', 'Só parou de funcionar depois que você mexeu', 'Java é lento', 'React > Flutter', 'PHP > NodeJS', 'Se funciona, não mexa', 'Programar é facil', 'Na minha Máquina Funciona', 'Javascript é Front-End', 'Não trate como constante quem te trata como variavel.'];

		this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
	}

	quebrarBiscoito() {
		let s = this.state;

		let random = Math.floor(Math.random() * this.frases.length);

		s.texto = this.frases[random];	
		this.setState(s);
	}

	render() {

		return(

			<View style={styles.body}>
				<Image source={require("./assets/programmer.png")} />

				<Text style={styles.text}> "{this.state.texto}" </Text>

				<Botao color="#2196f3" onPress={this.quebrarBiscoito} />
			</View>

		);

	}

}

const styles = StyleSheet.create({
	body:{
		paddingTop:30,
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor: '#CCC'
	},
	text: {
		fontSize:17,
		color:'#000',
		margin:30,
		fontStyle:'italic',
		textAlign:'center'
	}
});