/** Import React **/
import React, {useState} from 'react';
import {Image} from 'react-native';

/** Import Assets & Constants **/
import style from './ProgressiveImage.Style';

interface Props {
  width: number | string;
  height: number | string;
  onLoad: () => void;
  uri?: string;
  borderRadius?: number | undefined;
  styleImage?: any;
}

export const ProgressiveImage = ({
  width,
  height,
  onLoad,
  uri,
  borderRadius,
  styleImage,
}: Props) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Image
        style={[
          styleImage,
          {
            width: width,
            height: height,
            borderRadius: borderRadius ? borderRadius : width,
            marginLeft: 1,
            marginTop: 2,
          },
          loading ? style.displayNone : style.displayFlex,
        ]}
        source={{uri: uri}}
        onLoad={() => {
          setLoading(false);
          onLoad();
        }}
        resizeMethod={'resize'}
        resizeMode={'contain'}
      />
    </>
  );
};
