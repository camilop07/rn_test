/** Import React **/
import {useEffect, useState} from 'react';

/** Import Libraries **/
import {AxiosResponse} from 'axios';

/** Import Models **/
import {AxiosCall} from './../models';

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;

  useEffect(() => {
    return () => cancelEndpoint();
  }, []);

  /**
   * It takes an axios call, sets the loading state to true, makes the call, sets the loading state to
   * false, and returns the data
   * @param axiosCall - AxiosCall<any>
   * @returns The data from the axios call.
   */
  const callEndpoint = async (axiosCall: AxiosCall<any>) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true);
    let result = {} as AxiosResponse<any>;
    try {
      result = await axiosCall.call;
    } catch (err: any) {
      setLoading(false);
      return err.response?.data;
    }
    setLoading(false);
    return result.data;
  };

  /**
   * It sets the loading state to false and aborts the request if the controller is defined
   */
  const cancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  };

  return {loading, callEndpoint};
};

export default useFetchAndLoad;
