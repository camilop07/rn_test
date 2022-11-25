/** Import React **/
import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

/** Import Styles and constants */
import style from './BankList.Style';
import {colors} from '../../constants';

/** Import Hooks **/
import {useFetchAndLoad} from '../../hooks';

/** Import services */
import {getBanksList} from '../../services/bank.service';

/** Import slices */
import {setBanks} from '../../redux/states/bankSlice';
import {selectBanks} from '../../redux/selectors/banks.selector';

/** Import components */
import {BankItem} from './../components';

const BankList = () => {
  const dispatch = useDispatch();

  const dataBanks = useSelector(selectBanks);
  const {callEndpoint} = useFetchAndLoad();

  /*
   * A functional component that receives an item and an onPress function as props.
   */
  const Item = ({item}: any) => <BankItem data={item} />;

  /**
   * It renders the item component and passes the item as a prop to the component.
   * @param {any}  - `item` is the item that is being rendered.
   */
  const renderItem = ({item}: any) => {
    return <Item item={item} />;
  };

  /**
   * It calls the endpoint to get the list of banks and sets the state.
   */
  const handleOnPress = async () => {
    if (dataBanks.length === 0) {
      const response = await callEndpoint(getBanksList());
      dispatch(setBanks(response));
    }
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={handleOnPress} style={style.button}>
        <Text style={[style.labelText, {color: colors.white}]}>
          {'Consultar bancos'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={dataBanks}
        renderItem={renderItem}
        style={style.flatList}
        contentContainerStyle={style.flatListContentContainer}
      />
    </View>
  );
};

export default BankList;
