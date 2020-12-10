import {StyleSheet} from 'react-native';
import {colors} from '../../colors';
import {h, w} from '../../utils/helpers';

export const styles = StyleSheet.create({
  center: {
    minWidth: w(100),
    textAlign: 'center',
    color: colors.white,
  },
  minimumWidth: {
    width: w(100),
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: h(40),
    marginHorizontal: w(20),
    marginTop: h(20),

    justifyContent: 'space-between',
  },
});
