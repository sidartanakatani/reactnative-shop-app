import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import Colors from '../constants/Colors';
import EditProductScreen from '../screens/user/EditProductScreen';

enableScreens();

const ProductsNavigator = createStackNavigator();
const OrdersNavigator = createStackNavigator();
const AdminNavigator = createStackNavigator();
const ShopNavigator = createDrawerNavigator();

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

function Products() {
  return (
    <ProductsNavigator.Navigator
      initialRouteName="ProductsOverview"
      screenOptions={defaultNavigationOptions}
    >
      <ProductsNavigator.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
      />
      <ProductsNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.productTitle
        })}
      />
      <ProductsNavigator.Screen name="Cart" component={CartScreen} />
    </ProductsNavigator.Navigator>
  );
}

function Orders() {
  return (
    <OrdersNavigator.Navigator
      initialRouteName="Orders"
      screenOptions={defaultNavigationOptions}
    >
      <OrdersNavigator.Screen name="Orders" component={OrdersScreen} />
    </OrdersNavigator.Navigator>
  );
}

function Admin() {
  return (
    <AdminNavigator.Navigator
      initialRouteName="UserProducts"
      screenOptions={defaultNavigationOptions}
    >
      <AdminNavigator.Screen name="UserProducts" component={UserProductsScreen} />
      <AdminNavigator.Screen name="EditProduct" component={EditProductScreen} />
    </AdminNavigator.Navigator>
  );
}

export default () => {
  return (
    <ShopNavigator.Navigator
      initialRouteName={Products}
      drawerContentOptions={{
        activeTintColor: Colors.primary,
        labelStyle: {
          fontFamily: 'open-sans-bold'
        }
      }}
    >
      <ShopNavigator.Screen
        name="Products"
        component={Products}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={23}
              color={drawerConfig.color}
            />
          )
        }}
      />
      <ShopNavigator.Screen
        name="Orders"
        component={Orders}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
              size={23}
              color={drawerConfig.color}
            />
          )
        }}
      />
      <ShopNavigator.Screen
        name="Admin"
        component={Admin}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              size={23}
              color={drawerConfig.color}
            />
          )
        }}
      />
    </ShopNavigator.Navigator>
  );
};
