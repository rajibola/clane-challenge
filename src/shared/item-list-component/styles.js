import {StyleSheet} from 'react-native';
import {colors} from '../../../colors';
import {fonts} from '../../../fonts';
import {w, h} from '../../shared/resposive-dimension';

export const styles = StyleSheet.create({
  name: {
    ...fonts.font16,
  },
  initials: {
    ...fonts.font16,
    color: colors.darkGray,
  },
  initialsContainer: {
    width: h(40),
    height: h(40),
    borderRadius: h(20),
    backgroundColor: colors.gray,
    marginRight: w(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: h(75),
    marginLeft: w(20),
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
