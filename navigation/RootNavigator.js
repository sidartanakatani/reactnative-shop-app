import React from 'react';
import { useSelector } from 'react-redux';
import ShopNavigator from './ShopNavigator';
import AuthNavigator from './AuthNavigator';

export default () => {
  const isAuth = useSelector((state) => !!state.auth.token);

  return <>{isAuth ? <ShopNavigator /> : <AuthNavigator />}</>;
};
