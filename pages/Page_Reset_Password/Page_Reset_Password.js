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
const Page_Reset_Password  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page0}    >
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
			<Text style = {noneModeStyles._Enter_New_Password}   >
				Enter New Password
			</Text>
			<Text style = {noneModeStyles._Enter_your_new_password}   >
				Enter your new password
			</Text>
			<Text style = {noneModeStyles._Re_enter_your_new_password}   >
				Re-enter your new password
			</Text>
			<View style = {noneModeStyles._Bot_n_Siguiente}    >
			</View>
			<Text style = {noneModeStyles._Reset_Password}   >
				Reset Password
			</Text>
			<View style = {noneModeStyles._Lock_duotone}    >
				<View style = {noneModeStyles._Group_8}    >
					<View style = {noneModeStyles.style26}    >
						<View style = {noneModeStyles.style27}   >
							<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
								<Path fill = {"#7E869E"}   stroke = {"white"} strokeWidth = {1.2} d = "M0.627907 4.81393C0.627907 2.84061 0.627907 1.85395 1.24094 1.24091C1.85397 0.627881 2.84063 0.627881 4.81395 0.627881H13.186C15.1594 0.627881 16.146 0.627881 16.7591 1.24091C17.3721 1.85395 17.3721 2.84061 17.3721 4.81393V6.90695C17.3721 9.86693 17.3721 11.3469 16.4525 12.2665C15.533 13.186 14.053 13.186 11.093 13.186H6.90698C3.94699 13.186 2.467 13.186 1.54746 12.2665C0.627907 11.3469 0.627907 9.86693 0.627907 6.90695V4.81393Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style28}    >
						<View style = {noneModeStyles.style29}   >
							<Svg style={{height: 7, width: 10}} viewBox = "0 0 10 7">
								<Path fill = {"none"}   stroke = {"white"} strokeWidth = {1.2} d = "M9.34783 6.08693V4.99997C9.34783 2.59874 7.40124 0.652147 5 0.652147V0.652147C2.59876 0.652147 0.652174 2.59874 0.652174 4.99997V6.08693"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._Ellipse_6}    >
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Re_enter_New_Password}   >
				Re-enter New Password
			</Text>
			<View style = {noneModeStyles._Lock_duotone_2}    >
				<View style = {noneModeStyles._Group_8_2}    >
					<View style = {noneModeStyles.style34}    >
						<View style = {noneModeStyles.style35}   >
							<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
								<Path fill = {"#7E869E"}   stroke = {"white"} strokeWidth = {1.2} d = "M0.627907 4.81393C0.627907 2.84061 0.627907 1.85395 1.24094 1.24091C1.85397 0.627881 2.84063 0.627881 4.81395 0.627881H13.186C15.1594 0.627881 16.146 0.627881 16.7591 1.24091C17.3721 1.85395 17.3721 2.84061 17.3721 4.81393V6.90695C17.3721 9.86693 17.3721 11.3469 16.4525 12.2665C15.533 13.186 14.053 13.186 11.093 13.186H6.90698C3.94699 13.186 2.467 13.186 1.54746 12.2665C0.627907 11.3469 0.627907 9.86693 0.627907 6.90695V4.81393Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style36}    >
						<View style = {noneModeStyles.style37}   >
							<Svg style={{height: 7, width: 10}} viewBox = "0 0 10 7">
								<Path fill = {"none"}   stroke = {"white"} strokeWidth = {1.2} d = "M9.34783 6.08693V4.99997C9.34783 2.59874 7.40124 0.652147 5 0.652147V0.652147C2.59876 0.652147 0.652174 2.59874 0.652174 4.99997V6.08693"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._Ellipse_6_2}    >
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Reset_Password

const noneModeStyles = StyleSheet.create({
_page0: {
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
	right: 0.333344,
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
	left: 0.333333,
	top: "50%",
	right: 1.66667,
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
_Enter_New_Password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 133},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Enter_your_new_password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 84},
		{translateY: 186},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "300",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Re_enter_your_new_password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 84},
		{translateY: 311},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "300",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Bot_n_Siguiente: {
	width: 234,
	height: 53,
	backgroundColor: "rgb(93, 95, 239)",
	position: "absolute",
	transform: [
		{translateX: 77},
		{translateY: 406},
	],
	borderRadius: 100,
	},
_Reset_Password: {
	width: 286,
	height: 30,
	position: "absolute",
	transform: [
		{translateX: 53},
		{translateY: 418},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 20,
	fontWeight: "400",
	lineHeight: 23.4375,
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Lock_duotone: {
	width: 24,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 33},
		{translateY: 189},
	],
	},
_Group_8: {
	width: 16,
	height: 18,
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 876},
	],
	},
style26: {
	position: "absolute",
	transform: [
		{translateY: 6},
	],
	},
style27: {
	},
style28: {
	position: "absolute",
	transform: [
		{translateX: 4},
	],
	},
style29: {
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
_Re_enter_New_Password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 255},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Lock_duotone_2: {
	width: 24,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 33},
		{translateY: 313},
	],
	},
_Group_8_2: {
	width: 16,
	height: 18,
	position: "absolute",
	left: 4,
	top: 3,
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
_Ellipse_6_2: {
	width: 4,
	height: 4,
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 10},
	],
	},
})

