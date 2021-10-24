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
import {image_image_7_link} from './assets/imageLinks.js'
const Page_Sign_up  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page4}    >
			<View style = {noneModeStyles._Rectangle_1}    >
			</View>
			<View style = {noneModeStyles._Registro___Login_4}    >
				<View style = {noneModeStyles._Rectangle_1_2}    >
				</View>
				<Text style = {noneModeStyles._Sign_Up}   >
					Sign Up
				</Text>
				<View style = {noneModeStyles._Status_Bar}    >
					<View style = {noneModeStyles._UI}    >
						<View style = {noneModeStyles._Battery}    >
							<View style = {noneModeStyles._Border}    >
							</View>
							<View style = {noneModeStyles.style9}    >
								<View style = {noneModeStyles.style10}   >
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
				<Text style = {noneModeStyles._Enter_your_Password}   >
					Enter your Password
				</Text>
				<View style = {noneModeStyles._Lock_light}    >
					<View style = {noneModeStyles._Group_8}    >
						<View style = {noneModeStyles.style23}    >
							<View style = {noneModeStyles.style24}   >
								<Svg style={{height: 13, width: 17}} viewBox = "0 0 17 13">
									<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 4.5C0.5 2.61438 0.5 1.67157 1.08579 1.08579C1.67157 0.5 2.61438 0.5 4.5 0.5H12.5C14.3856 0.5 15.3284 0.5 15.9142 1.08579C16.5 1.67157 16.5 2.61438 16.5 4.5V6.5C16.5 9.32843 16.5 10.7426 15.6213 11.6213C14.7426 12.5 13.3284 12.5 10.5 12.5H6.5C3.67157 12.5 2.25736 12.5 1.37868 11.6213C0.5 10.7426 0.5 9.32843 0.5 6.5V4.5Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style25}    >
							<View style = {noneModeStyles.style26}   >
								<Svg style={{height: 6, width: 9}} viewBox = "0 0 9 6">
									<Path fill = {"none"}   stroke = {"white"}  d = "M8.5 5.5V4.5C8.5 2.29086 6.70914 0.5 4.5 0.5V0.5C2.29086 0.5 0.5 2.29086 0.5 4.5V5.5"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._Ellipse_6}    >
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Username}   >
					Username
				</Text>
				<Text style = {noneModeStyles._E_mail_address}   >
					E-mail address
				</Text>
				<Text style = {noneModeStyles._Password}   >
					Password
				</Text>
				<Text style = {noneModeStyles._Phone_No_}   >
					Phone No.
				</Text>
				<Text style = {noneModeStyles._Enter_your_Phone_no_}   >
					Enter your Phone no.
				</Text>
				<View style = {noneModeStyles._Phone_duotone}    >
					<View style = {noneModeStyles.style34}    >
						<View style = {noneModeStyles.style35}   >
							<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
								<Path fill = {"#7E869E"}   stroke = {"white"} strokeWidth = {1.2} d = "M14.2932 11.5252L17.0857 14.3176C17.4612 14.6931 17.4612 15.3019 17.0857 15.6775C15.0555 17.7076 11.8415 17.936 9.54462 16.2134L7.88333 14.9674C6.04476 13.5885 4.41151 11.9552 3.03259 10.1167L1.78662 8.45538C0.0639734 6.15852 0.292387 2.94449 2.32254 0.914335C2.69805 0.538829 3.30687 0.538828 3.68237 0.914334L6.47484 3.7068C6.88665 4.11862 6.88665 4.78629 6.47484 5.1981L5.39803 6.27491C5.2269 6.44604 5.18448 6.70748 5.29271 6.92394C6.54405 9.42663 8.57337 11.4559 11.0761 12.7073C11.2925 12.8155 11.554 12.7731 11.7251 12.602L12.8019 11.5252C13.2137 11.1133 13.8814 11.1133 14.2932 11.5252Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Message_duotone}    >
					<View style = {noneModeStyles._Rectangle_1_3}    >
					</View>
					<View style = {noneModeStyles.style38}    >
						<View style = {noneModeStyles.style39}   >
							<Svg style={{height: 5, width: 17}} viewBox = "0 0 17 5">
								<Path fill = {"none"}   stroke = {"white"} strokeWidth = {1.2} d = "M0.273769 0.547542L7.52348 4.1724C8.09796 4.45964 8.77415 4.45964 9.34862 4.1724L16.5983 0.547542"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style40}    >
						<View style = {noneModeStyles.style41}   >
							<Svg style={{height: 7, width: 16}} viewBox = "0 0 16 7">
								<Path fill = {"#7E869E"}   stroke = {"white"} strokeWidth = {1.2} d = "M7.3739 6.01613L1.29325 2.9758C0.868381 2.76337 0.6 2.32912 0.6 1.8541C0.6 1.16148 1.16148 0.6 1.8541 0.6H14.1459C14.8385 0.6 15.4 1.16148 15.4 1.8541C15.4 2.32912 15.1316 2.76337 14.7067 2.9758L8.6261 6.01613C8.23196 6.2132 7.76804 6.2132 7.3739 6.01613Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Bot_n_Siguiente}    >
				</View>
				<Text style = {noneModeStyles._Sign_Up_2}   >
					Sign Up
				</Text>
				<View style = {noneModeStyles.style44}    >
					<View style = {noneModeStyles.style45}   >
						<Svg style={{height: 100, width: 100}} viewBox = "0 0 100 100">
							<Path fill = {"#C4C4C4"}     d = "M0 0H100V100H0V0Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {noneModeStyles._Enter_your_Email_address}   >
					Enter your Email address
				</Text>
			</View>
			<Text style = {noneModeStyles._Sign_Up_3}   >
				Sign Up
			</Text>
			<View style = {noneModeStyles._Status_Bar_2}    >
				<View style = {noneModeStyles._UI_2}    >
					<View style = {noneModeStyles._Battery_2}    >
						<View style = {noneModeStyles._Border_2}    >
						</View>
						<View style = {noneModeStyles.style52}    >
							<View style = {noneModeStyles.style53}   >
								<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
									<Path fill = {"black"}     d = "M0 0V4C0.80794 3.66122 1.33333 2.87313 1.33333 2C1.33333 1.12687 0.80794 0.338777 0 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._Capacity_2}    >
						</View>
					</View>
					<View style = {noneModeStyles._Wifi_3}    >
						<View style = {noneModeStyles._Wifi_4}    >
						</View>
					</View>
					<View style = {noneModeStyles._Cell_3}    >
						<View style = {noneModeStyles._Cell_4}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Time_3}    >
					<Text style = {noneModeStyles._Time_4}   >
						9:27
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._system___light___home_indicator_2}    >
				<View style = {noneModeStyles._Home_Indicator_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._Lock_light_2}    >
				<View style = {noneModeStyles._Group_8_2}    >
					<View style = {noneModeStyles.style65}    >
						<View style = {noneModeStyles.style66}   >
							<Svg style={{height: 13, width: 17}} viewBox = "0 0 17 13">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 4.5C0.5 2.61438 0.5 1.67157 1.08579 1.08579C1.67157 0.5 2.61438 0.5 4.5 0.5H12.5C14.3856 0.5 15.3284 0.5 15.9142 1.08579C16.5 1.67157 16.5 2.61438 16.5 4.5V6.5C16.5 9.32843 16.5 10.7426 15.6213 11.6213C14.7426 12.5 13.3284 12.5 10.5 12.5H6.5C3.67157 12.5 2.25736 12.5 1.37868 11.6213C0.5 10.7426 0.5 9.32843 0.5 6.5V4.5Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style67}    >
						<View style = {noneModeStyles.style68}   >
							<Svg style={{height: 6, width: 9}} viewBox = "0 0 9 6">
								<Path fill = {"none"}   stroke = {"white"}  d = "M8.5 5.5V4.5C8.5 2.29086 6.70914 0.5 4.5 0.5V0.5C2.29086 0.5 0.5 2.29086 0.5 4.5V5.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._Ellipse_6_2}    >
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Username_2}   >
				Username
			</Text>
			<Text style = {noneModeStyles._E_mail_address_2}   >
				E-mail address
			</Text>
			<Text style = {noneModeStyles._Password_2}   >
				Password
			</Text>
			<Text style = {noneModeStyles._Phone_No__2}   >
				Phone No.
			</Text>
			<View style = {noneModeStyles._Phone_duotone_2}    >
				<View style = {noneModeStyles.style75}    >
					<View style = {noneModeStyles.style76}   >
						<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
							<Path fill = {"#7E869E"}   stroke = {"white"} strokeWidth = {1.2} d = "M14.2932 11.5252L17.0857 14.3176C17.4612 14.6931 17.4612 15.3019 17.0857 15.6775C15.0555 17.7076 11.8415 17.936 9.54462 16.2134L7.88333 14.9674C6.04476 13.5885 4.41151 11.9552 3.03259 10.1167L1.78662 8.45538C0.0639734 6.15852 0.292387 2.94449 2.32254 0.914335C2.69805 0.538829 3.30687 0.538828 3.68237 0.914334L6.47484 3.7068C6.88665 4.11862 6.88665 4.78629 6.47484 5.1981L5.39803 6.27491C5.2269 6.44604 5.18448 6.70748 5.29271 6.92394C6.54405 9.42663 8.57337 11.4559 11.0761 12.7073C11.2925 12.8155 11.554 12.7731 11.7251 12.602L12.8019 11.5252C13.2137 11.1133 13.8814 11.1133 14.2932 11.5252Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Message_duotone_2}    >
				<View style = {noneModeStyles._Rectangle_1_4}    >
				</View>
				<View style = {noneModeStyles.style79}    >
					<View style = {noneModeStyles.style80}   >
						<Svg style={{height: 5, width: 17}} viewBox = "0 0 17 5">
							<Path fill = {"none"}   stroke = {"white"} strokeWidth = {1.2} d = "M0.273769 0.547542L7.52348 4.1724C8.09796 4.45964 8.77415 4.45964 9.34862 4.1724L16.5983 0.547542"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style81}    >
					<View style = {noneModeStyles.style82}   >
						<Svg style={{height: 7, width: 16}} viewBox = "0 0 16 7">
							<Path fill = {"#7E869E"}   stroke = {"white"} strokeWidth = {1.2} d = "M7.3739 6.01613L1.29325 2.9758C0.868381 2.76337 0.6 2.32912 0.6 1.8541C0.6 1.16148 1.16148 0.6 1.8541 0.6H14.1459C14.8385 0.6 15.4 1.16148 15.4 1.8541C15.4 2.32912 15.1316 2.76337 14.7067 2.9758L8.6261 6.01613C8.23196 6.2132 7.76804 6.2132 7.3739 6.01613Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Bot_n_Siguiente_2}    >
			</View>
			<Text style = {noneModeStyles._Sign_Up_4}   >
				Sign Up
			</Text>
			<Text style = {noneModeStyles._Type_your_Username}   >
				Type your Username
			</Text>
			<View style = {noneModeStyles._User_duotone}    >
				<View style = {noneModeStyles._Ellipse_45}    >
				</View>
				<View style = {noneModeStyles._Ellipse_46}    >
				</View>
			</View>
			<View style = {noneModeStyles._image_7_container}    >
				<View style = {noneModeStyles._image_7}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_7_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Sign_up

const noneModeStyles = StyleSheet.create({
_page4: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Rectangle_1: {
	width: 375,
	height: 812,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Registro___Login_4: {
	width: 375,
	height: 812,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_1_2: {
	width: 375,
	height: 812,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Sign_Up: {
	width: 111,
	height: 74,
	position: "absolute",
	left: 134,
	top: 111,
	color: "rgb(0, 0, 0)",
	fontSize: 30,
	fontWeight: "600",
	lineHeight: 35.1562,
	fontFamily: "Open Sans",
	textAlign: "center",
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
style9: {
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 4},
	],
	},
style10: {
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
	right: 0.333333,
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
	left: 0.333344,
	top: "50%",
	right: 1.66666,
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
_Enter_your_Password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 91,
	top: 515,
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
	left: 49,
	top: 515,
	},
_Group_8: {
	width: 16,
	height: 18,
	position: "absolute",
	left: 4,
	top: 3,
	},
style23: {
	position: "absolute",
	transform: [
		{translateY: 6},
	],
	},
style24: {
	},
style25: {
	position: "absolute",
	transform: [
		{translateX: 4},
	],
	},
style26: {
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
_Username: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 23,
	top: 205,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_E_mail_address: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 23,
	top: 292,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 26,
	top: 466,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Phone_No_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 26,
	top: 379,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Enter_your_Phone_no_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 91,
	top: 426,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Phone_duotone: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 48,
	top: 426,
	},
style34: {
	width: 18,
	height: 18,
	position: "absolute",
	left: 3,
	top: 3,
	},
style35: {
	},
_Message_duotone: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 51,
	top: 342,
	},
_Rectangle_1_3: {
	width: 16,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 6},
	],
	borderTopWidth: 1.2,
	borderRightWidth: 1.2,
	borderBottomWidth: 1.2,
	borderLeftWidth: 1.2,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 2,
	},
style38: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 9},
	],
	},
style39: {
	},
style40: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 6},
	],
	},
style41: {
	},
_Bot_n_Siguiente: {
	width: 343,
	height: 50,
	backgroundColor: "rgb(93, 95, 239)",
	position: "absolute",
	left: 21,
	top: 602,
	borderRadius: 100,
	},
_Sign_Up_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 157,
	top: 613,
	color: "rgb(255, 255, 255)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
style44: {
	width: 100,
	height: 100,
	position: "absolute",
	left: 18,
	top: 302,
	},
style45: {
	},
_Enter_your_Email_address: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 93,
	top: 339,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Sign_Up_3: {
	width: 111,
	height: 74,
	position: "absolute",
	left: 134,
	top: 111,
	color: "rgb(0, 0, 0)",
	fontSize: 30,
	fontWeight: "600",
	lineHeight: 35.1562,
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Status_Bar_2: {
	width: 375,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_UI_2: {
	width: 68,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	top: 15,
	right: 14,
	},
_Battery_2: {
	width: 25,
	height: 12,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	top: 2,
	right: 0,
	},
_Border_2: {
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
style52: {
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 4},
	],
	},
style53: {
	},
_Capacity_2: {
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
_Wifi_3: {
	width: 21,
	height: 15,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 20},
		{translateY: 1},
	],
	},
_Wifi_4: {
	width: 15.3333,
	height: 11,
	position: "absolute",
	top: 1.33334,
	right: 3,
	},
_Cell_3: {
	width: 18,
	height: 12,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	top: 2,
	right: 50,
	},
_Cell_4: {
	width: 17,
	height: 10.6667,
	position: "absolute",
	top: 0.666656,
	right: 0.333333,
	},
_Time_3: {
	width: 56,
	height: 23,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 21,
	top: 8,
	},
_Time_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0.333344,
	top: "50%",
	right: 1.66666,
	transform: [
		{translateY: -5.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_system___light___home_indicator_2: {
	width: "auto",
	height: 34,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 0,
	bottom: 0,
	right: 0,
	},
_Home_Indicator_2: {
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
_Lock_light_2: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 49,
	top: 515,
	},
_Group_8_2: {
	width: 16,
	height: 18,
	position: "absolute",
	left: 4,
	top: 3,
	},
style65: {
	position: "absolute",
	transform: [
		{translateY: 6},
	],
	},
style66: {
	},
style67: {
	position: "absolute",
	transform: [
		{translateX: 4},
	],
	},
style68: {
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
_Username_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 23,
	top: 205,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_E_mail_address_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 23,
	top: 292,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Password_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 26,
	top: 466,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Phone_No__2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 26,
	top: 379,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Phone_duotone_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 48,
	top: 426,
	},
style75: {
	width: 18,
	height: 18,
	position: "absolute",
	left: 3,
	top: 3,
	},
style76: {
	},
_Message_duotone_2: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 51,
	top: 342,
	},
_Rectangle_1_4: {
	width: 16,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 6},
	],
	borderTopWidth: 1.2,
	borderRightWidth: 1.2,
	borderBottomWidth: 1.2,
	borderLeftWidth: 1.2,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 2,
	},
style79: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 9},
	],
	},
style80: {
	},
style81: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 6},
	],
	},
style82: {
	},
_Bot_n_Siguiente_2: {
	width: 343,
	height: 50,
	backgroundColor: "rgb(93, 95, 239)",
	position: "absolute",
	left: 21,
	top: 602,
	borderRadius: 100,
	},
_Sign_Up_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 157,
	top: 613,
	color: "rgb(255, 255, 255)",
	fontSize: 20,
	fontWeight: "600",
	fontFamily: "Open Sans",
	textAlign: "center",
	},
_Type_your_Username: {
	width: 219,
	height: "auto",
	position: "absolute",
	left: 90,
	top: 249,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_User_duotone: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 51,
	top: 250,
	},
_Ellipse_45: {
	width: 16,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 16},
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
		{translateX: 8},
		{translateY: 4},
	],
	borderTopWidth: 1.2,
	borderRightWidth: 1.2,
	borderBottomWidth: 1.2,
	borderLeftWidth: 1.2,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	},
_image_7_container: {
	width: 808,
	height: 812,
	position: "absolute",
	left: -247,
	top: 0,
	},
_image_7: {
	width: "100%",
	height: "100%",
	},
})

