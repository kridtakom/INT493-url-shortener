import http from "k6/http";
import { check } from "k6";
export let options = {
  vus: 10,
  duration: "60s",
};
export default function () {
  const url =
    "https://www.youtube.com/watch?v=XXYlFuWEuKI&list=RDXXYlFuWEuKI&start_radio=1&ab_channel=TheWeekndVEVO/";
  let time = Date.now();
  let data = { url: url + time };
  let res = http.post("http://sh.b3.tnpl.me/link", data);
  check(res, { "status was 200": (r) => r.status == 200 });
}
