import React, {useEffect} from 'react';
import {Animated, Easing, ViewProps} from 'react-native';

/**
 * SlideUpView
 * Animated Component that will Slide Up on mount.
 */
export const SlideUpView: React.FC<ViewProps> = ({children, style}) => {
  const appear = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(appear, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={[
        {
          opacity: appear,
          transform: [
            {
              translateY: appear.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
              }),
            },
          ],
        },
        style,
      ]}>
      {children}
    </Animated.View>
  );
};
