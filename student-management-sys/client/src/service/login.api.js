// import { request, requestForm } from './common.service';
// export function createComplaint(formData) {
//   return requestForm({
//     url: '/complaint/member/create-complaint',
//     method: 'POST',
//     body: formData
//   });
// }

// export function viewComplaint(page_number, items_per_page) {
//   return request({
//     url: `/complaint/admin/get-all-complaints?page_number=${page_number}&items_per_page=${items_per_page}`,
//     method: 'GET'
//   });
// }

// export function updateComplaint(values) {
//   return request({
//     url: 'complaint/admin/update-complaint/',
//     method: 'PUT',
//     body: values
//   });
// }

// export function searchComplaint(searching_data) {
//   return request({
//     url: `/complaint/search-complaint?searching_data=${searching_data}`,
//     method: 'GET'
//   });
// }
//for image use requestForm

import { request, requestLogin } from "./common.service";
export function loginReq(formData) {
  const req = requestLogin({ url: "login", method: "POST", body: formData });
  return req;
}

export function viewComplaint(page_number, items_per_page) {
  return request({
    url: `/complaint/admin/get-all-complaints?page_number=${page_number}&items_per_page=${items_per_page}`,
    method: "GET",
  });
}

export function updateComplaint(values) {
  return request({
    url: "complaint/admin/update-complaint/",
    method: "PUT",
    body: values,
  });
}

export function searchComplaint(searching_data) {
  return request({
    url: `/complaint/search-complaint?searching_data=${searching_data}`,
    method: "GET",
  });
}
