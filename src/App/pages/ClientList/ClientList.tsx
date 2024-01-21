import {
  ScrollView,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IClient} from '../../interfaces/client';
import ClientPreview from '../../components/ui/ClientPreview/ClientPreview';

type TProps = {
  clients: Array<IClient>;
};

const ClientList: React.FC<TProps> = props => {
  const [textFilter, setTextFilter] = useState('');
  return (
    <View>
      <View>
        <TextInput
          placeholder="Filtrer list"
          value={textFilter}
          onChangeText={str => setTextFilter(str)}
        />
      </View>
      <View>
        <ScrollView>
          {props.clients
            .filter(c => {
              return (
                c.name.includes(textFilter) ||
                c.firstName.includes(textFilter) ||
                c.RS?.includes(textFilter)
              );
            })
            .map((c, i) => (
              <TouchableOpacity
                key={'c' + i}
                onLongPress={e => {
                  ToastAndroid.show('Edit user : ' + c.id, ToastAndroid.LONG);
                }}>
                <ClientPreview client={c} />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ClientList;
