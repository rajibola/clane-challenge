import {StyleSheet} from 'react-native';
import {colors} from '../../colors';
import {h} from '../../utils/helpers';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const styles = StyleSheet.create({
  background: {
    height: h(150) + getStatusBarHeight(true),
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
