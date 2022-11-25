/** Styles to InputTextForm **/
import {Dimensions, Platform, StyleSheet} from 'react-native';

/** Import Assets & Constants **/
import {colors} from '../../constants';

/** Create const to dimension **/
const {height: windowHeight, width: windowWidth} = Dimensions.get('window');

/** Create an object style **/
const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    display: 'flex',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: Platform.OS === 'ios' ? 30 : 10,
    width: windowWidth - 30,
    height: 60,
    backgroundColor: colors.primaryBlue,
    borderRadius: 10,
    marginTop: 30,
  },
  labelText: {
    color: colors.white,
    fontSize: 18,
    letterSpacing: 0,
  },
  flatList: {
    marginTop: 5,
  },
  flatListContentContainer: {
    paddingBottom: 140,
  },
});

/** Export component styles **/
export default style;
