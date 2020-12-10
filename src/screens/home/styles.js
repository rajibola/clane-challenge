import {StyleSheet} from 'react-native';
import {colors} from '../../colors';
import {w, h, deviceWidth} from '../../shared/resposive-dimension';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: h(40),
    marginHorizontal: w(20),
    marginTop: h(20),

    justifyContent: 'space-between',
  },
  background: {
    width: deviceWidth,
    height: h(150),
  },
  name: {
    fontSize: h(20),
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
