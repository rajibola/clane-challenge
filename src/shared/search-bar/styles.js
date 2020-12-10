import {StyleSheet} from 'react-native';
import {colors} from '../../colors';
import {h, w} from '../../utils/helpers';

export const styles = StyleSheet.create({
  search: {
    flex: 1,
    marginRight: w(10),
    padding: 0,
    color: colors.darkGray,
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
});
