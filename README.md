# Portfolio of Evidence (PoE) – Part 2
## App Development: Christoffel’s Menu Management App (React Native)
Part 2 — Creating the Basic User Interface and Features
### Objective

In Part 2, we move from the planning stage into the implementation stage of Christoffel’s Menu Management App.
The main focus of this part is to build the basic user interface and implement core functionalities that allow the chef to manage menu items dynamically.
The app will serve as a digital menu and operational tool for Christoffel, the private chef.

Requirements Covered in Part 2

The following features are implemented in this part of the project:

The app allows the chef to enter the following details of menu items:

Dish Name

Description

Course selection

Price

A predefined list of courses is available for selection (e.g., Starters, Mains, Desserts).

The home screen displays all added menu items.

The home screen displays the total number of menu items.

The chef can add new menu items directly from the home page.

Screens in Part 2

Home Screen:
Displays the list of menu items and shows statistics such as the total number of dishes.
The chef can also add new dishes here.

Add Menu Item Section:
A form interface (either a modal pop-up or an embedded section on the home page) where the chef can enter details about each menu item.

Planned Implementation in React Native

The app will use the following key React Native components and features:

View, Text, TextInput — for layout and text entry

FlatList — for displaying a dynamic list of dishes

Picker (or SelectDropdown) — for selecting a course (Starters, Mains, Desserts)

Button or TouchableOpacity — for adding items

React hooks like useState — for managing form and menu data

This ensures that the app is functional and interactive, allowing Christoffel to easily modify his daily menu.

Component Structure

The app will include the following core files and screens:

App.js – The main entry point, managing state and navigation

HomeScreen.js – Displays all menu items and the total number

AddMenuItem.js – Handles the input form for adding dishes




![WhatsApp Image 2025-10-22 at 23 55 13_9844b6ed](https://github.com/user-attachments/assets/aba132db-5dd7-4666-b8cc-7182db3fce31)

/**
 * Title: IIE Module Manual 2025
 * Author: The Independent Institute of Education (Pty) Ltd
 * Version: First Edition (2022)
 * Available at: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true
 * Date accessed: 27/08/2025
 */

