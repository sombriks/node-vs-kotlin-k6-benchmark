import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10, // 10 virtual users
  duration: '30s',
};

// The function that defines VU logic.
//
// See https://grafana.com/docs/k6/latest/examples/get-started-with-k6/ to learn more
// about authoring k6 scripts.
//
export default function () {
  const result1 = http.get('http://localhost:8080/'); // renders the index
  check(result1, {
    '200 ok': (r) => 200 === r.status
  })
}
