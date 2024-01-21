import React from 'react';
import {useSelector} from 'react-redux';
import CientListUnstored from './ClientList';
type Props = {};

const ClientList: React.FC<Props> = props => {
  const clients = useSelector((s: any) => s.clients.clients);
  return <CientListUnstored {...props} clients={clients} />;
};

export default ClientList;
