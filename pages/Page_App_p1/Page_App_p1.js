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
import {image_Ellipse_100_link} from './assets/imageLinks.js'
import {image_image_2_link} from './assets/imageLinks.js'
import {image_image_3_link} from './assets/imageLinks.js'
import {image_image_5_link} from './assets/imageLinks.js'
const Page_App_p1  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page5}    >
			<View style = {noneModeStyles._Group_887}    >
				<View style = {noneModeStyles._Rectangle_3}    >
				</View>
				<View style = {noneModeStyles._Rectangle_11}    >
				</View>
				<View style = {noneModeStyles._Ellipse_108}    >
				</View>
				<View style = {noneModeStyles._Ellipse_109}    >
				</View>
				<View style = {noneModeStyles._Ellipse_107}    >
				</View>
			</View>
			<View style = {noneModeStyles._Status_Bar}    >
				<View style = {noneModeStyles._UI}    >
					<View style = {noneModeStyles._Battery}    >
						<View style = {noneModeStyles._Border}    >
						</View>
						<View style = {noneModeStyles.style11}    >
							<View style = {noneModeStyles.style12}   >
								<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
									<Path fill = {"white"}     d = "M0 0V4C0.80794 3.66122 1.33333 2.87313 1.33333 2C1.33333 1.12687 0.80794 0.338777 0 0Z"/>
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
			<View style = {noneModeStyles._Ellipse_100_container}    >
				<View style = {noneModeStyles._Ellipse_100}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_100_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._5_December_2021}   >
				5 December 2021
			</Text>
			<Text style = {noneModeStyles._20_December_2021}   >
				20 December 2021
			</Text>
			<Text style = {noneModeStyles._View_all_medical_Camps}   >
				View all medical Camps
			</Text>
			<View style = {noneModeStyles._Group_98}    >
				<View style = {noneModeStyles._Group_46}    >
					<Text style = {noneModeStyles._Medical_Camp__Allama_Iqbal_Town__Lahore_1_00_pm___5_00_pm}   >
						Medical Camp, Allama Iqbal {'\n'}Town, Lahore{'\n'}{'\n'}1:00 pm - 5:00 pm{'\n'}
					</Text>
					<View style = {noneModeStyles._image_2_container}    >
						<View style = {noneModeStyles._image_2}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_2_link}}/>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_932}    >
				<View style = {noneModeStyles._Group_46_2}    >
					<Text style = {noneModeStyles._Medical_Camp__Mohalla_Qasaian__Nankana_8_00_am___1_00_pm}   >
						Medical Camp, Mohalla Qasaian, Nankana{'\n'}{'\n'}8:00 am - 1:00 pm
					</Text>
				</View>
			</View>
			<Text style = {noneModeStyles._Contact_Us___03___________}   >
				Contact Us : 03***********
			</Text>
			<Text style = {noneModeStyles._Welcome_to_MedCaS_}   >
				Welcome to MedCaS!
			</Text>
			<Text style = {noneModeStyles._Medical_Camps_nearby_}   >
				Medical Camps nearby.
			</Text>
			<View style = {noneModeStyles._system___light___home_indicator}    >
				<View style = {noneModeStyles._Home_Indicator}    >
				</View>
			</View>
			<View style = {noneModeStyles._image_3_container}    >
				<View style = {noneModeStyles._image_3}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_3_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Upcoming_Medical_Camps}   >
				Upcoming Medical Camps
			</Text>
			<Text style = {noneModeStyles._Sign_in_to_another_account_}   >
				Sign in to another account?
			</Text>
			<View style = {noneModeStyles._image_5_container}    >
				<View style = {noneModeStyles._image_5}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_5_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_App_p1

const noneModeStyles = StyleSheet.create({
_page5: {
	height: 1026,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(179, 180, 184)",
	},
_Group_887: {
	width: 375,
	height: 315,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_3: {
	width: 375,
	height: 315,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_11: {
	width: 375,
	height: 315,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Ellipse_108: {
	width: 80,
	height: 80,
	position: "absolute",
	left: -53,
	top: 279,
	borderTopWidth: 30,
	borderRightWidth: 30,
	borderBottomWidth: 30,
	borderLeftWidth: 30,
	borderStyle: "solid",
	borderColor: "rgb(190, 159, 255)",
	},
_Ellipse_109: {
	width: 180,
	height: 180,
	position: "absolute",
	left: -98,
	top: 224,
	borderTopWidth: 30,
	borderRightWidth: 30,
	borderBottomWidth: 30,
	borderLeftWidth: 30,
	borderStyle: "solid",
	borderColor: "rgb(190, 159, 255)",
	},
_Ellipse_107: {
	width: 100,
	height: 100,
	position: "absolute",
	left: 290,
	top: -51,
	borderTopWidth: 40,
	borderRightWidth: 40,
	borderBottomWidth: 40,
	borderLeftWidth: 40,
	borderStyle: "solid",
	borderColor: "rgb(190, 159, 255)",
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
		{translateY: 0.333313},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 2.66667,
	},
style11: {
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 4},
	],
	},
style12: {
	},
_Capacity: {
	width: 18,
	height: 7.33331,
	backgroundColor: "rgb(255, 255, 255)",
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
	width: 15.3334,
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
	right: 0.333374,
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
	left: 0.333252,
	top: "50%",
	right: 1.66675,
	transform: [
		{translateY: -5.5},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_Ellipse_100_container: {
	width: 53,
	height: 60,
	position: "absolute",
	left: 297,
	top: 80,
	},
_Ellipse_100: {
	width: "100%",
	height: "100%",
	},
_5_December_2021: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 16,
	top: 419,
	color: "rgb(34, 34, 34)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_20_December_2021: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 18,
	top: 662,
	color: "rgb(34, 34, 34)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_View_all_medical_Camps: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 141,
	top: 905,
	color: "rgb(34, 34, 34)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Group_98: {
	width: 357,
	height: 157,
	position: "absolute",
	left: 22,
	top: 454,
	},
_Group_46: {
	width: 357,
	height: 157,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Medical_Camp__Allama_Iqbal_Town__Lahore_1_00_pm___5_00_pm: {
	width: 187,
	height: 157,
	position: "absolute",
	left: 170,
	top: 0,
	color: "rgb(34, 34, 34)",
	fontSize: 20,
	fontWeight: "700",
	lineHeight: 22,
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_image_2_container: {
	width: 160,
	height: 157,
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_2: {
	width: "100%",
	height: "100%",
	},
_Group_932: {
	width: 187,
	height: 151,
	position: "absolute",
	left: 188,
	top: 700,
	},
_Group_46_2: {
	width: 187,
	height: 151,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Medical_Camp__Mohalla_Qasaian__Nankana_8_00_am___1_00_pm: {
	width: 187,
	height: 151,
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(34, 34, 34)",
	fontSize: 20,
	fontWeight: "600",
	lineHeight: 22,
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Contact_Us___03___________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 153,
	top: 209,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Welcome_to_MedCaS_: {
	width: 309,
	height: 27,
	position: "absolute",
	left: 16,
	top: 110,
	color: "rgb(255, 255, 255)",
	fontSize: 20,
	fontWeight: "700",
	lineHeight: 23.4375,
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Medical_Camps_nearby_: {
	width: 315,
	height: "auto",
	position: "absolute",
	left: 16,
	top: 168,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
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
_image_3_container: {
	width: 156,
	height: 151,
	position: "absolute",
	left: 22,
	top: 700,
	},
_image_3: {
	width: "100%",
	height: "100%",
	},
_Upcoming_Medical_Camps: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 22,
	top: 356,
	color: "rgb(0, 0, 0)",
	fontSize: 25,
	fontWeight: "700",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Sign_in_to_another_account_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 151,
	top: 238,
	color: "rgb(255, 255, 255)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_image_5_container: {
	width: 375,
	height: 754,
	position: "absolute",
	left: -1,
	top: 272,
	},
_image_5: {
	width: "100%",
	height: "100%",
	},
})

