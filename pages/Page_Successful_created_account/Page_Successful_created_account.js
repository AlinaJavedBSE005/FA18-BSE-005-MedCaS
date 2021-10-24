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
import {image_image_6_link} from './assets/imageLinks.js'
const Page_Successful_created_account  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page2}    >
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
			<View style = {noneModeStyles._Check_ring}    >
				<View style = {noneModeStyles._Ellipse_47}    >
				</View>
				<View style = {noneModeStyles.style19}    >
					<View style = {noneModeStyles.style20}   >
						<Svg style={{height: 33, width: 48}} viewBox = "0 0 48 33">
							<Path fill = {"none"}   stroke = {"#221E1F"} strokeWidth = {2} d = "M0.666195 16.1453L18.1328 31.6013L47.2438 0.689222"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Success_}   >
				Success!
			</Text>
			<Text style = {noneModeStyles._Congratulations__Your_account_has_been_successfully_created_}   >
				Congratulations! {'\n'}Your account has been{'\n'} successfully created.
			</Text>
			<Text style = {noneModeStyles._Continue_to_app}   >
				Continue to app
			</Text>
			<View style = {noneModeStyles._image_6_container}    >
				<View style = {noneModeStyles._image_6}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_6_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Successful_created_account

const noneModeStyles = StyleSheet.create({
_page2: {
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
	left: 0.333374,
	top: "50%",
	right: 1.66663,
	transform: [
		{translateY: -5.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_Check_ring: {
	width: 139,
	height: 123,
	position: "absolute",
	transform: [
		{translateX: 129},
		{translateY: 125},
	],
	},
_Ellipse_47: {
	width: 104.25,
	height: 92.25,
	position: "absolute",
	transform: [
		{translateX: -967.625},
		{translateY: 824.375},
	],
	borderTopWidth: 2,
	borderRightWidth: 2,
	borderBottomWidth: 2,
	borderLeftWidth: 2,
	borderStyle: "solid",
	borderColor: "rgb(34, 30, 31)",
	},
style19: {
	position: "absolute",
	transform: [
		{translateX: 175.333},
		{translateY: 171.125},
	],
	},
style20: {
	},
_Success_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 140},
		{translateY: 259},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 30,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Congratulations__Your_account_has_been_successfully_created_: {
	width: 270,
	height: 147,
	position: "absolute",
	transform: [
		{translateX: 61},
		{translateY: 379},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 25,
	fontWeight: "400",
	lineHeight: 29.2969,
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Continue_to_app: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 216},
		{translateY: 556},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_image_6_container: {
	width: 383,
	height: 812,
	position: "absolute",
	transform: [
		{translateX: -8},
	],
	},
_image_6: {
	width: "100%",
	height: "100%",
	},
})

