/** Import Styles **/
import {StyleSheet} from 'react-native';
import {colors} from '../../../../constants';

/** Create an object style **/
const style = StyleSheet.create({
  bankItemContainer: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerImage: {marginHorizontal: 5},
  containerInfo: {
    width: '60%',
  },
});

/** Export component style **/
export default style;
