import {StyleSheet} from 'react-native';
import {colors} from '../../../colors';
import {w, h} from '../../shared/resposive-dimension';

export const styles = StyleSheet.create({
  name: {
    fontSize: h(20),
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
