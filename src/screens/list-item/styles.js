import {StyleSheet} from 'react-native';
import {colors} from '../../colors';
import {fonts} from '../../fonts';
import {w, h, deviceWidth} from '../../shared/resposive-dimension';

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
  search: {
    flex: 1,
    marginRight: w(10),
    padding: 0,
    ...fonts.font16,
    color: colors.darkGray,
    textTransform: 'capitalize',
  },
  searchIcon: {
    marginHorizontal: w(15),
    color: colors.darkGray,
  },
  searchContainer: {
    height: h(45),
    backgroundColor: colors.white,
    marginHorizontal: w(20),
    borderRadius: h(5),
    marginTop: h(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
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
