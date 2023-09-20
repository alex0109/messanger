import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import CustomDrawerContent from "./CustomDrawerContent";
import { InitialStackNavigator } from "./StackNavigator";

import type { RootStackParamList } from "./StackNavigator";

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={CustomDrawerContent}>
    <Drawer.Screen name="DrawerStack" component={InitialStackNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
