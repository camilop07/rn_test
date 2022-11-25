/** Import Axios **/
import axios from 'axios';

/** Import Assets & Constants **/
import {baseUrl, challengeUrl} from '../constants';

/** Import Utilities **/
import {loadAbort} from './../utilities/load-abort.utility';

export const getBanksList = () => {
  const controller = loadAbort();
  const url = `${baseUrl}/${challengeUrl}`;
  return {
    call: axios.get(url),
    controller,
  };
};
