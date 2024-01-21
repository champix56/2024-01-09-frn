import {View, Text, Image} from 'react-native';
import React from 'react';
import {IClient} from '../../../interfaces/client';
import style from './ClientPreview.style';
interface IClientPreviewProps {
  navigation?: any;
  route?: any;
  client: IClient;
}
const ClientPreview: React.FC<IClientPreviewProps> = props => {
  const image =
    props.client.img ?? require('../../../../../assets/defaultClient.png');
  return (
    <View style={style.container}>
      <View style={style.containedLeft}>
        <Image style={style.image} source={image} />
        <Text style={style.id}>ID:{props.client.id}</Text>
      </View>
      <View style={style.containedRight}>
        {props.client.RS && (
          <Text style={{...style.rs, ...style.bold}}>{props.client.RS}</Text>
        )}
        <Text
          style={
            style.bold
          }>{`${props.client.name} ${props.client.firstname}`}</Text>
      </View>
    </View>
  );
};
ClientPreview.defaultProps = {};
export default ClientPreview;
