import {StyleSheet} from 'react-native';
import {w, h} from '../../shared/resposive-dimension';

export const styles = StyleSheet.create({
  initialsContainer: {
    width: w(40),
    height: h(40),
  },
  container: {
    // flex: 1,
    // backgroundColor: 'grey',
    height: h(50),
    marginLeft: w(20),
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
