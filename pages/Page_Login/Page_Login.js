import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Rectangle_1_link} from './assets/imageLinks.js'
const Page_Login  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page6}    >
			<View style = {noneModeStyles._Rectangle_1_container}    >
				<View style = {noneModeStyles._Rectangle_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_1_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Dont_have_an_account_}   >
				Dont have an account?
			</Text>
			<View style = {noneModeStyles._Bot_n_Siguiente}    >
			</View>
			<Text style = {noneModeStyles._Sign_Up}   >
				Sign Up
			</Text>
			<Text style = {noneModeStyles._Forgot_Password_}   >
				Forgot Password?
			</Text>
			<View style = {noneModeStyles._User_duotone}    >
				<View style = {noneModeStyles._Ellipse_45}    >
				</View>
				<View style = {noneModeStyles._Ellipse_46}    >
				</View>
			</View>
			<Text style = {noneModeStyles._Type_your_Username}   >
				Type your Username
			</Text>
			<View style = {noneModeStyles._Status_Bar}    >
				<View style = {noneModeStyles._UI}    >
					<View style = {noneModeStyles._Battery}    >
						<View style = {noneModeStyles._Border}    >
						</View>
						<View style = {noneModeStyles.style15}    >
							<View style = {noneModeStyles.style16}   >
								<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
									<Path fill = {"black"}     d = "M0 0V4C0.80794 3.66122 1.33333 2.87313 1.33333 2C1.33333 1.12687 0.80794 0.338777 0 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._Capacity}    >
						</View>
					</View>
					<View style = {noneModeStyles._Wifi}    >
						<View style = {noneModeStyles._Wifi_2}    >
						</View>
					</View>
					<View style = {noneModeStyles._Cell}    >
						<View style = {noneModeStyles._Cell_2}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Time}    >
					<Text style = {noneModeStyles._Time_2}   >
						9:27
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._system___light___home_indicator}    >
				<View style = {noneModeStyles._Home_Indicator}    >
				</View>
			</View>
			<View style = {noneModeStyles._Bot_n_Siguiente_2}    >
			</View>
			<Text style = {noneModeStyles._Login}   >
				Login
			</Text>
			<Text style = {noneModeStyles._Login_2}   >
				Login
			</Text>
			<Text style = {noneModeStyles._Username}   >
				Username
			</Text>
			<Text style = {noneModeStyles._Password}   >
				Password
			</Text>
			<Text style = {noneModeStyles._Enter_your_Password}   >
				Enter your Password
			</Text>
			<View style = {noneModeStyles._Lock_light}    >
				<View style = {noneModeStyles._Group_8}    >
					<View style = {noneModeStyles.style34}    >
						<View style = {noneModeStyles.style35}   >
							<Svg style={{height: 13, width: 17}} viewBox = "0 0 17 13">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 4.5C0.5 2.61438 0.5 1.67157 1.08579 1.08579C1.67157 0.5 2.61438 0.5 4.5 0.5H12.5C14.3856 0.5 15.3284 0.5 15.9142 1.08579C16.5 1.67157 16.5 2.61438 16.5 4.5V6.5C16.5 9.32843 16.5 10.7426 15.6213 11.6213C14.7426 12.5 13.3284 12.5 10.5 12.5H6.5C3.67157 12.5 2.25736 12.5 1.37868 11.6213C0.5 10.7426 0.5 9.32843 0.5 6.5V4.5Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style36}    >
						<View style = {noneModeStyles.style37}   >
							<Svg style={{height: 6, width: 9}} viewBox = "0 0 9 6">
								<Path fill = {"none"}   stroke = {"white"}  d = "M8.5 5.5V4.5C8.5 2.29086 6.70914 0.5 4.5 0.5V0.5C2.29086 0.5 0.5 2.29086 0.5 4.5V5.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._Ellipse_6}    >
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Login

const noneModeStyles = StyleSheet.create({
_page6: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(39, 106, 180)",
	},
_Rectangle_1_container: {
	width: 581,
	height: 882,
	position: "absolute",
	left: -44,
	top: -7,
	},
_Rectangle_1: {
	width: "100%",
	height: "100%",
	borderRadius: 44,
	},
_Dont_have_an_account_: {
	width: 221,
	height: 26,
	position: "absolute",
	left: 25,
	top: 555,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	lineHeight: 23.4375,
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Bot_n_Siguiente: {
	width: 343,
	height: 50,
	backgroundColor: "rgb(93, 95, 239)",
	position: "absolute",
	left: 18,
	top: 603,
	borderRadius: 100,
	},
_Sign_Up: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 152,
	top: 615,
	color: "rgb(255, 255, 255)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Forgot_Password_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 187,
	top: 406,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_User_duotone: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 36,
	top: 250,
	},
_Ellipse_45: {
	width: 16,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: -829},
		{translateY: -146},
	],
	borderTopWidth: 1.2,
	borderRightWidth: 1.2,
	borderBottomWidth: 1.2,
	borderLeftWidth: 1.2,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	},
_Ellipse_46: {
	width: 8,
	height: 8,
	position: "absolute",
	transform: [
		{translateX: -825},
		{translateY: -158},
	],
	borderTopWidth: 1.2,
	borderRightWidth: 1.2,
	borderBottomWidth: 1.2,
	borderLeftWidth: 1.2,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	},
_Type_your_Username: {
	width: 219,
	height: "auto",
	position: "absolute",
	left: 83,
	top: 247,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Status_Bar: {
	width: 375,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_UI: {
	width: 68,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	top: 15,
	right: 14,
	},
_Battery: {
	width: 25,
	height: 12,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	top: 2,
	right: 0,
	},
_Border: {
	width: 22,
	height: 11.3333,
	position: "absolute",
	transform: [
		{translateY: 0.333344},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 2.66667,
	},
style15: {
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 4},
	],
	},
style16: {
	},
_Capacity: {
	width: 18,
	height: 7.33334,
	backgroundColor: "rgb(0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2.33334},
	],
	borderRadius: 1.33333,
	},
_Wifi: {
	width: 21,
	height: 15,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 20},
		{translateY: 1},
	],
	},
_Wifi_2: {
	width: 15.3333,
	height: 11,
	position: "absolute",
	top: 1.33334,
	right: 3,
	},
_Cell: {
	width: 18,
	height: 12,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	top: 2,
	right: 50,
	},
_Cell_2: {
	width: 17,
	height: 10.6667,
	position: "absolute",
	top: 0.666656,
	right: 0.333313,
	},
_Time: {
	width: 56,
	height: 23,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 21,
	top: 8,
	},
_Time_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0.333313,
	top: "50%",
	right: 1.66669,
	transform: [
		{translateY: -5.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_system___light___home_indicator: {
	width: "auto",
	height: 34,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 0,
	bottom: 0,
	right: 0,
	},
_Home_Indicator: {
	width: 134,
	height: 5,
	backgroundColor: "rgb(0, 0, 0)",
	position: "absolute",
	left: "50%",
	bottom: 8,
	transform: [
		{translateX: -66.5},
	],
	borderRadius: 100,
	},
_Bot_n_Siguiente_2: {
	width: 343,
	height: 50,
	backgroundColor: "rgb(93, 95, 239)",
	position: "absolute",
	left: 13,
	top: 488,
	borderRadius: 100,
	},
_Login: {
	width: 64,
	height: 39,
	position: "absolute",
	left: 162,
	top: 499,
	color: "rgb(255, 255, 255)",
	fontSize: 20,
	fontWeight: "600",
	lineHeight: 23.4375,
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Login_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 148,
	top: 108,
	color: "rgb(0, 0, 0)",
	fontSize: 30,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Username: {
	width: 157,
	height: "auto",
	position: "absolute",
	left: -1,
	top: 203,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Password: {
	width: 91,
	height: "auto",
	position: "absolute",
	left: 30,
	top: 309,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Enter_your_Password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 83,
	top: 362,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Lock_light: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 37,
	top: 365,
	},
_Group_8: {
	width: 16,
	height: 18,
	position: "absolute",
	transform: [
		{translateX: -828},
		{translateY: -44},
	],
	},
style34: {
	position: "absolute",
	transform: [
		{translateY: 6},
	],
	},
style35: {
	},
style36: {
	position: "absolute",
	transform: [
		{translateX: 4},
	],
	},
style37: {
	},
_Ellipse_6: {
	width: 4,
	height: 4,
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 10},
	],
	},
})

