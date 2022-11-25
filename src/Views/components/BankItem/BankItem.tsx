/** Import React **/
import React from 'react';
import {Text, View} from 'react-native';
import {ProgressiveImage} from '..';

/** Import Assets & Constants **/
import style from './BankItem.Style';

interface Props {
  data: any;
}

export const BankItem = ({data}: Props) => {
  return (
    <View style={style.bankItemContainer}>
      <View style={style.containerImage}>
        <ProgressiveImage
          uri={data.url}
          width={100}
          height={100}
          onLoad={() => {}}
          borderRadius={20}
        />
      </View>

      <View style={style.containerInfo}>
        <Text>{data.bankName}</Text>
        <Text>{`${data.age} Años`}</Text>
        <Text numberOfLines={2}>{data.description}</Text>
      </View>
    </View>
  );
};
