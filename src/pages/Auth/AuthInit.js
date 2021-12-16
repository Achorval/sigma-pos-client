import React, {useRef, useEffect, useState} from 'react';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import * as actions from '../../redux/actions/UserActions';
import {FallbackView} from '../../core/utils/FallbackView';

const AuthInit = (props) => {
  const didRequest = useRef(false);
  const dispatch = useDispatch();
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const token = useSelector(({UserReducer}) => UserReducer.token != null, shallowEqual);
  
  // We should request user by authToken before rendering the application
  useEffect(() => {
    const requestUser = async () => {
      try {
        if (!didRequest.current) {
          const {data: user} = await actions.fetchUserByToken();
          dispatch(actions.fulfillUser(user.data));
          // dispatch(actions.fetchServices());
          // dispatch(actions.fetchDashboard());
        }
      } catch (error) {
        if (!didRequest.current) {
          dispatch(actions.logout());
        }
      } finally {
        setShowSplashScreen(false);
      }

      return () => (didRequest.current = true);
    }
    
    if (token) {
      requestUser()
    } else {
      dispatch(actions.logout());
      setShowSplashScreen(false);
    }
  }, [token])

  return showSplashScreen ? <FallbackView /> : <>{props.children}</>
}

export default AuthInit;
