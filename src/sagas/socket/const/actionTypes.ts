import { ActionCreator, AnyAction } from 'redux';

interface ActionsBasicType {
  [k: string]: ActionCreator<AnyAction>;
}

export type ActionsType<actions extends ActionsBasicType> = {
  [k in keyof actions]: ReturnType<actions[k]>;
};

export type Keys<Actions> = keyof Actions;
export type ActionFromMapping<Actions> = Actions[Keys<Actions>];

export enum SocketActionTypes {
  CONNECT_TO_WEBSOCKET_SERVER = 'connectToWebsocketServer',
  GET_PUBLIC_CHANNELS = 'getPublicChannels',
  RESPONSE_GET_PUBLIC_CHANNELS = 'responseGetPublicChannels',
  REQUEST_PEER_ID = 'requestPeerId',
  SEND_PEER_ID = 'sendPeerId',
  SEND_MESSAGES_IDS = 'sendIds',
  ASK_FOR_MESSAGES = 'askForMessages',
  RESPONSE_ASK_FOR_MESSAGES = 'responseFetchAllMessages',
  SUBSCRIBE_FOR_TOPIC = 'subscribeForTopic',
  REGISTER_USER_CERTIFICATE = 'registerUserCertificate',
  REGISTER_OWNER_CERTIFICATE = 'registerOwnerCertificate',
  SEND_USER_CERTIFICATE = 'sendUserCertificate',
  CERTIFICATE_REGISTRATION_ERROR = 'certificateRegistrationError',
  SAVE_CERTIFICATE = 'saveCertificate',
  RESPONSE_GET_CERTIFICATES = 'responseGetCertificates',
  SEND_MESSAGE = 'sendMessage',
  MESSAGE = 'message',
  CREATE_NETWORK = 'createNetwork',
  NETWORK = 'network',
  NEW_COMMUNITY = 'newCommunity',
  CREATE_COMMUNITY = 'createCommunity',
  COMMUNITY = 'community',
  REGISTRAR = 'registrar',
  REGISTRAR_ERROR = 'registrarError',
  LAUNCH_COMMUNITY = 'launchCommunity',
  LAUNCH_REGISTRAR = 'launchRegistrar',
  SAVE_OWNER_CERTIFICATE = 'saveOwnerCertificate',
  SAVED_OWNER_CERTIFICATE = 'savedOwnerCertificate',
  CLOSE = 'close'
}
