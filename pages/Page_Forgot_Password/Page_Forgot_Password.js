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
import {image_image_8_link} from './assets/imageLinks.js'
const Page_Forgot_Password  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page3}    >
			<View style = {noneModeStyles._Group}    >
				<View style = {noneModeStyles.style2}    >
					<View style = {noneModeStyles.style3}   >
						<Svg style={{height: 28, width: 19}} viewBox = "0 0 19 28">
							<Path fill = {"white"}     d = "M15.985 11.565C15.995 11.5049 16 11.4451 16 11.3799V6.5C16 4.7649 15.3249 3.1299 14.0949 1.8999C12.87 0.67505 11.235 0 9.5 0C5.91505 0 3 2.91505 3 6.5V11.3799C3 11.4451 3.005 11.5049 3.015 11.565C1.16005 13.3001 0 15.7649 0 18.5C0 23.74 4.26 28 9.5 28C14.74 28 19 23.74 19 18.5C19 15.7649 17.84 13.3001 15.985 11.565ZM11.245 21.445C11.26 21.52 11.245 21.595 11.195 21.655C11.145 21.7151 11.075 21.75 11 21.75H8C7.92505 21.75 7.855 21.7151 7.80495 21.6551C7.76 21.5949 7.74 21.52 7.755 21.445L8.43505 18.385C8.005 18.055 7.75 17.5501 7.75 17C7.75 16.0349 8.53505 15.25 9.5 15.25C10.4649 15.25 11.25 16.0349 11.25 17C11.25 17.5501 10.995 18.055 10.565 18.385L11.245 21.445ZM14 10.135C12.6601 9.4099 11.13 9 9.5 9C7.87 9 6.33995 9.4099 5 10.135V6.5C5 4.02 7.02 2 9.5 2C10.705 2 11.8349 2.46995 12.685 3.31495C13.53 4.16505 14 5.2949 14 6.5V10.135Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Status_Bar}    >
				<View style = {noneModeStyles._UI}    >
					<View style = {noneModeStyles._Battery}    >
						<View style = {noneModeStyles._Border}    >
						</View>
						<View style = {noneModeStyles.style8}    >
							<View style = {noneModeStyles.style9}   >
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
			<View style = {noneModeStyles._image_8_container}    >
				<View style = {noneModeStyles._image_8}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_8_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Forgot_Password_}   >
				Forgot Password?
			</Text>
			<Text style = {noneModeStyles._Email_Address}   >
				Email Address 
			</Text>
			<Text style = {noneModeStyles._Enter_your_Email_Address}   >
				Enter your Email Address
			</Text>
			<View style = {noneModeStyles._Message_duotone}    >
				<View style = {noneModeStyles._Rectangle_1}    >
				</View>
				<View style = {noneModeStyles.style24}    >
					<View style = {noneModeStyles.style25}   >
						<Svg style={{height: 6, width: 19}} viewBox = "0 0 19 6">
							<Path fill = {"none"}   stroke = {"white"} strokeWidth = {1.2} d = "M0.275048 0.550034L8.58322 4.70412C9.16035 4.99268 9.83965 4.99268 10.4168 4.70412L18.725 0.550034"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style26}    >
					<View style = {noneModeStyles.style27}   >
						<Svg style={{height: 8, width: 18}} viewBox = "0 0 18 8">
							<Path fill = {"#7E869E"}   stroke = {"white"} strokeWidth = {1.2} d = "M8.3739 6.89113L1.3739 3.39113C0.899603 3.15398 0.6 2.66921 0.6 2.13893V2C0.6 1.2268 1.2268 0.6 2 0.6H16C16.7732 0.6 17.4 1.2268 17.4 2V2.13893C17.4 2.66921 17.1004 3.15398 16.6261 3.39113L9.6261 6.89113C9.23196 7.0882 8.76804 7.0882 8.3739 6.89113Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Bot_n_Siguiente}    >
			</View>
			<Text style = {noneModeStyles._Send_email_confirmation_to_reset_password}   >
				Send email confirmation to reset password
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Forgot_Password

const noneModeStyles = StyleSheet.create({
_page3: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(196, 196, 196)",
	},
_Group: {
	width: 19,
	height: 28,
	position: "absolute",
	transform: [
		{translateX: 325},
		{translateY: 1077},
	],
	},
style2: {
	position: "absolute",
	},
style3: {
	},
_Status_Bar: {
	width: 375,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
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
		{translateY: 0.333313},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 2.66667,
	},
style8: {
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 4},
	],
	},
style9: {
	},
_Capacity: {
	width: 18,
	height: 7.33331,
	backgroundColor: "rgb(0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2.33331},
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
	top: 1.33331,
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
	top: 0.666687,
	right: 0.333328,
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
_image_8_container: {
	width: 387,
	height: 812,
	position: "absolute",
	transform: [
		{translateX: -12},
	],
	},
_image_8: {
	width: "100%",
	height: "100%",
	},
_Forgot_Password_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 64},
		{translateY: 124},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 30,
	fontWeight: "700",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Email_Address: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 41},
		{translateY: 289},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Enter_your_Email_Address: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 88},
		{translateY: 349},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "300",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Message_duotone: {
	width: 27,
	height: 27,
	position: "absolute",
	transform: [
		{translateX: 41},
		{translateY: 349},
	],
	},
_Rectangle_1: {
	width: 18,
	height: 13.5,
	position: "absolute",
	transform: [
		{translateX: -491.5},
		{translateY: 1039.75},
	],
	borderTopWidth: 1.2,
	borderRightWidth: 1.2,
	borderBottomWidth: 1.2,
	borderLeftWidth: 1.2,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 2,
	},
style24: {
	position: "absolute",
	transform: [
		{translateX: 45.5},
		{translateY: 359.125},
	],
	},
style25: {
	},
style26: {
	position: "absolute",
	transform: [
		{translateX: 45.5},
		{translateY: 355.75},
	],
	},
style27: {
	},
_Bot_n_Siguiente: {
	width: 341,
	height: 82,
	backgroundColor: "rgb(93, 95, 239)",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 474},
	],
	borderRadius: 100,
	},
_Send_email_confirmation_to_reset_password: {
	width: 286,
	height: 30,
	position: "absolute",
	transform: [
		{translateX: 41},
		{translateY: 490},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 20,
	fontWeight: "400",
	lineHeight: 23.4375,
	fontFamily: "Open Sans",
	textAlign: "center",
	},
})

