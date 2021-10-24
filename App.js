import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from '@expo-google-fonts/dev';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_Reset_Password from "./pages/Page_Reset_Password/Page_Reset_Password.js";
import Page_App_p2 from "./pages/Page_App_p2/Page_App_p2.js";
import Page_Successful_created_account from "./pages/Page_Successful_created_account/Page_Successful_created_account.js";
import Page_Forgot_Password from "./pages/Page_Forgot_Password/Page_Forgot_Password.js";
import Page_Sign_up from "./pages/Page_Sign_up/Page_Sign_up.js";
import Page_App_p1 from "./pages/Page_App_p1/Page_App_p1.js";
import Page_Login from "./pages/Page_Login/Page_Login.js";
import Page_Words from "./pages/Page_Words/Page_Words.js";
import Page_Welcome_page from "./pages/Page_Welcome_page/Page_Welcome_page.js";
import Page_Welcome_page_2 from "./pages/Page_Welcome_page_2/Page_Welcome_page_2.js";
const Tab = createBottomTabNavigator();
const Page_Reset_PasswordStackNavigator = createStackNavigator();
const ScreenForPage_Reset_Password = () => {
	return (
		<Page_Reset_PasswordStackNavigator.Navigator>
			<Page_Reset_PasswordStackNavigator.Screen
				name = "Page_Reset_Password"
				component = {Page_Reset_Password}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Reset_PasswordStackNavigator.Navigator>
	)
};
const Page_App_p2StackNavigator = createStackNavigator();
const ScreenForPage_App_p2 = () => {
	return (
		<Page_App_p2StackNavigator.Navigator>
			<Page_App_p2StackNavigator.Screen
				name = "Page_App_p2"
				component = {Page_App_p2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_App_p2StackNavigator.Navigator>
	)
};
const Page_Successful_created_accountStackNavigator = createStackNavigator();
const ScreenForPage_Successful_created_account = () => {
	return (
		<Page_Successful_created_accountStackNavigator.Navigator>
			<Page_Successful_created_accountStackNavigator.Screen
				name = "Page_Successful_created_account"
				component = {Page_Successful_created_account}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Successful_created_accountStackNavigator.Navigator>
	)
};
const Page_Forgot_PasswordStackNavigator = createStackNavigator();
const ScreenForPage_Forgot_Password = () => {
	return (
		<Page_Forgot_PasswordStackNavigator.Navigator>
			<Page_Forgot_PasswordStackNavigator.Screen
				name = "Page_Forgot_Password"
				component = {Page_Forgot_Password}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Forgot_PasswordStackNavigator.Navigator>
	)
};
const Page_Sign_upStackNavigator = createStackNavigator();
const ScreenForPage_Sign_up = () => {
	return (
		<Page_Sign_upStackNavigator.Navigator>
			<Page_Sign_upStackNavigator.Screen
				name = "Page_Sign_up"
				component = {Page_Sign_up}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Sign_upStackNavigator.Navigator>
	)
};
const Page_App_p1StackNavigator = createStackNavigator();
const ScreenForPage_App_p1 = () => {
	return (
		<Page_App_p1StackNavigator.Navigator>
			<Page_App_p1StackNavigator.Screen
				name = "Page_App_p1"
				component = {Page_App_p1}
				options = {{
					headerShown: false
				}}
			/>
		</Page_App_p1StackNavigator.Navigator>
	)
};
const Page_LoginStackNavigator = createStackNavigator();
const ScreenForPage_Login = () => {
	return (
		<Page_LoginStackNavigator.Navigator>
			<Page_LoginStackNavigator.Screen
				name = "Page_Login"
				component = {Page_Login}
				options = {{
					headerShown: false
				}}
			/>
		</Page_LoginStackNavigator.Navigator>
	)
};
const Page_WordsStackNavigator = createStackNavigator();
const ScreenForPage_Words = () => {
	return (
		<Page_WordsStackNavigator.Navigator>
			<Page_WordsStackNavigator.Screen
				name = "Page_Words"
				component = {Page_Words}
				options = {{
					headerShown: false
				}}
			/>
		</Page_WordsStackNavigator.Navigator>
	)
};
const Page_Welcome_pageStackNavigator = createStackNavigator();
const ScreenForPage_Welcome_page = () => {
	return (
		<Page_Welcome_pageStackNavigator.Navigator>
			<Page_Welcome_pageStackNavigator.Screen
				name = "Page_Welcome_page"
				component = {Page_Welcome_page}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Welcome_pageStackNavigator.Navigator>
	)
};
const Page_Welcome_page_2StackNavigator = createStackNavigator();
const ScreenForPage_Welcome_page_2 = () => {
	return (
		<Page_Welcome_page_2StackNavigator.Navigator>
			<Page_Welcome_page_2StackNavigator.Screen
				name = "Page_Welcome_page_2"
				component = {Page_Welcome_page_2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Welcome_page_2StackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	const [isPage5Open, setIsPage5Open] = useState(false)
	const zIndexPage5 = useRef(2)
	const [isPage6Open, setIsPage6Open] = useState(false)
	const zIndexPage6 = useRef(2)
	const [isPage7Open, setIsPage7Open] = useState(false)
	const zIndexPage7 = useRef(2)
	const [isPage8Open, setIsPage8Open] = useState(false)
	const zIndexPage8 = useRef(2)
	const [isPage9Open, setIsPage9Open] = useState(false)
	const zIndexPage9 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_Reset_Password"
							component = {ScreenForPage_Reset_Password}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_App_p2"
							component = {ScreenForPage_App_p2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Successful_created_account"
							component = {ScreenForPage_Successful_created_account}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Forgot_Password"
							component = {ScreenForPage_Forgot_Password}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Sign_up"
							component = {ScreenForPage_Sign_up}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_App_p1"
							component = {ScreenForPage_App_p1}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Login"
							component = {ScreenForPage_Login}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Words"
							component = {ScreenForPage_Words}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Welcome_page"
							component = {ScreenForPage_Welcome_page}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Welcome_page_2"
							component = {ScreenForPage_Welcome_page_2}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

