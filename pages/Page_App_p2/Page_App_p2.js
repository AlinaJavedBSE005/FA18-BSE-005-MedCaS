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
import {image_image_2_link} from './assets/imageLinks.js'
import {image_image_2_2_link} from './assets/imageLinks.js'
import {image_image_2_3_link} from './assets/imageLinks.js'
import {image_image_4_link} from './assets/imageLinks.js'
const Page_App_p2  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page1}    >
			<View style = {noneModeStyles._Group_933}    >
				<View style = {noneModeStyles._Group_46}    >
					<Text style = {noneModeStyles._Miskeenabad_Kachi_Basti__near_Metro___Islamabad_12_00_pm___4_00_pm}   >
						Miskeenabad Kachi Basti (near Metro), Islamabad{'\n'}{'\n'}12:00 pm - 4:00 pm{'\n'}
					</Text>
					<View style = {noneModeStyles._image_2_container}    >
						<View style = {noneModeStyles._image_2}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_2_link}}/>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_934}    >
				<View style = {noneModeStyles._Group_46_2}    >
					<Text style = {noneModeStyles._Medical_Camp__Hawksbay_Road_Tent_City__Karachi_10__00_am___5_00_pm}   >
						Medical Camp,{'\n'}Hawksbay Road Tent City, Karachi{'\n'}{'\n'}10 :00 am - 5:00 pm{'\n'}
					</Text>
					<View style = {noneModeStyles._image_2_container_2}    >
						<View style = {noneModeStyles._image_2_2}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_2_2_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_933_2}    >
					<View style = {noneModeStyles._Group_46_3}    >
						<Text style = {noneModeStyles._Medical_camp_in_Cholistan_by_army_1_00_pm___5_00_pm}   >
							Medical camp in Cholistan by army{'\n'}{'\n'}1:00 pm - 5:00 pm{'\n'}
						</Text>
						<View style = {noneModeStyles._image_2_container_3}    >
							<View style = {noneModeStyles._image_2_3}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_2_3_link}}/>
							</View>
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._5_January_2022}   >
				5 January 2022
			</Text>
			<Text style = {noneModeStyles._15_January_2022}   >
				15 January 2022
			</Text>
			<Text style = {noneModeStyles._6_January_2022}   >
				6 January 2022
			</Text>
			<Text style = {noneModeStyles._Upcoming_Medical_Camps}   >
				Upcoming Medical Camps
			</Text>
			<View style = {noneModeStyles._image_4_container}    >
				<View style = {noneModeStyles._image_4}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_4_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles.style22}    >
				<View style = {noneModeStyles.style23}   >
					<Svg style={{height: 21, width: 12}} viewBox = "0 0 12 21">
						<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0.292152 11.2128C-0.097384 10.8188 -0.097384 10.1822 0.292152 9.78722L9.53714 0.427512C10.0995 -0.142504 11.0144 -0.142504 11.5777 0.427512C12.14 0.997527 12.14 1.92265 11.5777 2.49267L3.66913 10.5005L11.5777 18.5063C12.14 19.0774 12.14 20.0025 11.5777 20.5725C11.0144 21.1425 10.0995 21.1425 9.53714 20.5725L0.292152 11.2128Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._UI}    >
				<View style = {noneModeStyles._Battery}    >
					<View style = {noneModeStyles._Border}    >
					</View>
					<View style = {noneModeStyles.style27}    >
						<View style = {noneModeStyles.style28}   >
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
			<View style = {noneModeStyles._Status_Bar}    >
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_App_p2

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(196, 196, 196)",
	},
_Group_933: {
	width: 357,
	height: 157,
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 156},
	],
	},
_Group_46: {
	width: 357,
	height: 157,
	position: "absolute",
	},
_Miskeenabad_Kachi_Basti__near_Metro___Islamabad_12_00_pm___4_00_pm: {
	width: 187,
	height: 157,
	position: "absolute",
	transform: [
		{translateX: 170},
	],
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
	},
_image_2: {
	width: "100%",
	height: "100%",
	},
_Group_934: {
	width: 365,
	height: 389,
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 388},
	],
	},
_Group_46_2: {
	width: 365,
	height: 158,
	position: "absolute",
	},
_Medical_Camp__Hawksbay_Road_Tent_City__Karachi_10__00_am___5_00_pm: {
	width: 191.19,
	height: 158,
	position: "absolute",
	transform: [
		{translateX: 173.81},
	],
	color: "rgb(34, 34, 34)",
	fontSize: 20,
	fontWeight: "700",
	lineHeight: 22,
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_image_2_container_2: {
	width: 163.585,
	height: 158,
	position: "absolute",
	},
_image_2_2: {
	width: "100%",
	height: "100%",
	},
_Group_933_2: {
	width: 357,
	height: 157,
	position: "absolute",
	transform: [
		{translateY: 232},
	],
	},
_Group_46_3: {
	width: 357,
	height: 157,
	position: "absolute",
	},
_Medical_camp_in_Cholistan_by_army_1_00_pm___5_00_pm: {
	width: 187,
	height: 157,
	position: "absolute",
	transform: [
		{translateX: 170},
	],
	color: "rgb(34, 34, 34)",
	fontSize: 20,
	fontWeight: "700",
	lineHeight: 22,
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_image_2_container_3: {
	width: 160,
	height: 157,
	position: "absolute",
	},
_image_2_3: {
	width: "100%",
	height: "100%",
	},
_5_January_2022: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 118},
	],
	color: "rgb(34, 34, 34)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_15_January_2022: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 582},
	],
	color: "rgb(34, 34, 34)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_6_January_2022: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 350},
	],
	color: "rgb(34, 34, 34)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Upcoming_Medical_Camps: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 28},
		{translateY: 62},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 25,
	fontWeight: "700",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_image_4_container: {
	width: 375,
	height: 812,
	position: "absolute",
	transform: [
		{translateY: 1},
	],
	},
_image_4: {
	width: "100%",
	height: "100%",
	},
style22: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 35},
	],
	},
style23: {
	},
_UI: {
	width: 68,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 293},
		{translateY: 10},
	],
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
style27: {
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 4},
	],
	},
style28: {
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
	transform: [
		{translateX: 15},
		{translateY: 3},
	],
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
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_Status_Bar: {
	width: 375,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: -3},
		{translateY: 3},
	],
	},
})

