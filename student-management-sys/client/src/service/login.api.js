

import { request, requestLogin } from "./common.service";
export function loginReq(formData) {
  const req = requestLogin({ url: "login", method: "POST", body: formData });
  return req;
}


