import { call, fork, take, cancel } from "redux-saga/effects";
import requestSuccess from "./request-success";
import requestFailure from "./request-failure";

function* request({
  type,
  service,
  params = {},
  successAction,
  failureAction,
  formid,
  componentId,
  callback = null,
  onSuccess = null,
  onFailure = null,
  normalizer = null,
}: any) {
  try {
    const componentId = params?.componentId || formid;

    const response = yield call(service, params);

    if (!response) {
      // TODO: Handle server communication error
      console.log(response);
    } else {
      if (!response) {
        // TODO: Handle server communication error
      } else {
        const data = response;
        if (data?.result) {
          const normalizedData = normalizer
            ? normalizer(data.result)
            : data.result;
          yield call(requestSuccess, {
            data: normalizedData,
            // redirect,
            callback,
            onSuccess,
            componentId,
            successAction,
          });
        }

        // if ([200, 201].includes(status)) {
        //   // If request call is successful

        // }
      }
    }
  } catch (error: any) {
    yield call(requestFailure, {
      // type,
      data: {},
      status: error?.response?.status,
      onFailure,
      failureAction,
      callback,
      componentId,
    });
  }
  // TODO: Handle any loader ends
}

/**
 * The request function can be used with redux saga to make async API calls.
 *
 * By passing strategical params, the redux action will contain
 * valuable information to oost the redux/saga process.
 *
 * @type          Action type (Eg. FETCH_DATA).
 * @method        A strig with the type of method used to call the API (GET, POST, PUT, DELETE)
 * @endpoint      Tha actual enpoint called with the API
 * @api           An Axios instace containing the specific API information
 * @params        (optional) An object containing the data that will be sent to the endpoint
 * @path          (optional) A react-router to redirect after the request is succesfull
 * @callback      (optional) A callback function to be called after the request is succesfull with the data processed
 * @onSuccess     (optional) A custom generator function passed to redux saga if the request is successful
 * @onFailure     (optional) A custom generator function passed to redux saga if the request fails
 * @normalizer    (optional) A custom reducer to process API response data before reaching the reducer
 * @cancelId      (optional) A unique id that can be used with cancelable requests. If a cancelId is passed, the request will be canceled next time an identical id is recieved.
 */
function* cancelableRequest({ cancelId, ...rest }) {
  const myRequest = yield fork(request, rest);
  if (cancelId) {
    yield take(`${rest.type}_${cancelId}`);
    yield cancel(myRequest);
  }
}

export default cancelableRequest;
