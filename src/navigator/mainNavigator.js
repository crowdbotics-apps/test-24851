import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile211460Navigator from '../features/UserProfile211460/navigator';
import Settings211459Navigator from '../features/Settings211459/navigator';
import Settings211457Navigator from '../features/Settings211457/navigator';
import SignIn2211455Navigator from '../features/SignIn2211455/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile211460: { screen: UserProfile211460Navigator },
Settings211459: { screen: Settings211459Navigator },
Settings211457: { screen: Settings211457Navigator },
SignIn2211455: { screen: SignIn2211455Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
