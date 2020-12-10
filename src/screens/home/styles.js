import {StyleSheet} from 'react-native';
import {colors} from '../../colors';
import {h} from '../../shared/resposive-dimension';

export const styles = StyleSheet.create({
  background: {
    height: h(150),
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
