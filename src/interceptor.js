let requestList = [];
function batchInterceptor(instance) {
instance.interceptors.request.use(
  (request) => requestHandler(request), 
  (error) =>errorHandler(error)
); 
instance.interceptors.response.use(
  (response) => responsehandler(response), 
  (error) =>errorHandler(error)
); 
}
function requestHandler(request) {
  requestList.push(request);
  let requestCall = _.debounce( batchRequest(requestList), 100 );
  return requestCall;
}
function responsehandler(response) {
  if (response.length > 0) {
    return response;
  }
  errorHandler("No records found!");
}
function errorHandler(error) {
 return Promise.reject(error);
}
function batchRequest(requests) {
  return requests;
}
export default batchInterceptor; 
