function runTest() { 
const batchUrl = “/file-batch-api”; 

// Should return [{id:”fileid1”},{id:”fileid2”}] 
let request1 = apiClient.get(batchUrl, {params: {ids: [“fileid1”,”fileid2”]}}); 
// Should return [{id:”fileid2”}] 
let request2 = apiClient.get(batchUrl, {params: {ids: [“fileid2”]}}); 
// Should reject as the fileid3 is missing from the response apiClient.get(batchUrl, {params: {ids: [“fileid3”]}}); 
let request3 = apiClient.get(batchUrl, {params: {ids: [“fileid3”]}}); 
} 
runTest();
