# [node-vs-kotlin-k6-benchmark][title]

Small benchmark using [k6][k6] tool. More details in [the article][article].

## Requirements

- node 20 or newer
- java 17 / kotlin 1.9 or newer
- k6 benchmarking tool

For this example we'll test two similar projects:

- [sample-htmx-koa][koa]
- [sample-htmx-javalin][javalin]

## How to run

- install [k6][k6]

Run [one of][koa] [the services][javalin] then run one of the scripts:

```bash
k6s run benchmark-javalin.js
```

Or:

```bash
k6s run benchmark-koa.js
```

## How to check results

- see [output options][k6-options] for k6

## Benchmark Hardware

```bash
[sombriks@thanatos ~]()$ inxi --cpu --memory --disk
Memory:
  System RAM: total: 48 GiB available: 45.88 GiB used: 7.1 GiB (15.5%)
  Array-1: capacity: 64 GiB slots: 2 modules: 2 EC: None
  Device-1: Channel-A DIMM 0 type: DDR4 size: 16 GiB speed: 3200 MT/s
  Device-2: Channel-B DIMM 0 type: DDR4 size: 32 GiB speed: 3200 MT/s
CPU:
  Info: 8-core model: AMD Ryzen 7 PRO 5850U with Radeon Graphics bits: 64
    type: MT MCP cache: L2: 4 MiB
  Speed (MHz): avg: 773 min/max: 400/4507 cores: 1: 400 2: 400 3: 400
    4: 1397 5: 400 6: 1397 7: 1397 8: 1397 9: 400 10: 400 11: 1396 12: 400
    13: 400 14: 400 15: 1397 16: 400
Drives:
  Local Storage: total: 931.51 GiB used: 410.4 GiB (44.1%)
  ID-1: /dev/nvme0n1 vendor: Kingston model: SFYRS1000G size: 931.51 GiB

```

## Sample results

For javalin:

```bash
[sombriks@thanatos node-vs-kotlin-k6-benchmark](main)$ k6 run benchmark-javalin.js 

          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

     execution: local
        script: benchmark-javalin.js
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
              * default: 10 looping VUs for 30s (gracefulStop: 30s)


     ✓ 200 ok

     checks.........................: 100.00% ✓ 145571      ✗ 0     
     data_received..................: 963 MB  32 MB/s
     data_sent......................: 12 MB   388 kB/s
     http_req_blocked...............: avg=3.62µs  min=1.2µs    med=3.07µs  max=4.7ms    p(90)=4.03µs  p(95)=4.85µs 
     http_req_connecting............: avg=19ns    min=0s       med=0s      max=413.19µs p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.92ms  min=792.12µs med=1.37ms  max=457.43ms p(90)=2.61ms  p(95)=4.12ms 
       { expected_response:true }...: avg=1.92ms  min=792.12µs med=1.37ms  max=457.43ms p(90)=2.61ms  p(95)=4.12ms 
     http_req_failed................: 0.00%   ✓ 0           ✗ 145571
     http_req_receiving.............: avg=61.05µs min=21.55µs  med=48.06µs max=11.76ms  p(90)=70.17µs p(95)=89.09µs
     http_req_sending...............: avg=15.87µs min=5.85µs   med=12.94µs max=13.1ms   p(90)=18.07µs p(95)=23.24µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.85ms  min=730.46µs med=1.3ms   max=457.21ms p(90)=2.5ms   p(95)=3.97ms 
     http_reqs......................: 145571  4852.059693/s
     iteration_duration.............: avg=2.04ms  min=883.69µs med=1.47ms  max=459.31ms p(90)=2.76ms  p(95)=4.31ms 
     iterations.....................: 145571  4852.059693/s
     vus............................: 10      min=10        max=10  
     vus_max........................: 10      min=10        max=10  


running (0m30.0s), 00/10 VUs, 145571 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  30s
```

For koa:

```bash
[sombriks@thanatos node-vs-kotlin-k6-benchmark](main)$ k6 run benchmark-koa.js 

          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

     execution: local
        script: benchmark-koa.js
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
              * default: 10 looping VUs for 30s (gracefulStop: 30s)


     ✓ 200 ok

     checks.........................: 100.00% ✓ 30714       ✗ 0    
     data_received..................: 24 MB   796 kB/s
     data_sent......................: 2.5 MB  82 kB/s
     http_req_blocked...............: avg=3µs     min=951ns  med=1.87µs  max=1.49ms   p(90)=4.3µs   p(95)=5.98µs 
     http_req_connecting............: avg=109ns   min=0s     med=0s      max=484.61µs p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=9.66ms  min=6.24ms med=8.06ms  max=43.6ms   p(90)=17.26ms p(95)=20.75ms
       { expected_response:true }...: avg=9.66ms  min=6.24ms med=8.06ms  max=43.6ms   p(90)=17.26ms p(95)=20.75ms
     http_req_failed................: 0.00%   ✓ 0           ✗ 30714
     http_req_receiving.............: avg=38.01µs min=16.7µs med=31.87µs max=376.28µs p(90)=59.85µs p(95)=71.37µs
     http_req_sending...............: avg=11.7µs  min=4.47µs med=8.37µs  max=338.14µs p(90)=20.47µs p(95)=27.15µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=9.61ms  min=6.21ms med=8.02ms  max=43.19ms  p(90)=17.16ms p(95)=20.65ms
     http_reqs......................: 30714   1023.584482/s
     iteration_duration.............: avg=9.75ms  min=6.3ms  med=8.14ms  max=45.35ms  p(90)=17.41ms p(95)=20.93ms
     iterations.....................: 30714   1023.584482/s
     vus............................: 10      min=10        max=10 
     vus_max........................: 10      min=10        max=10 


running (0m30.0s), 00/10 VUs, 30714 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  30s
```

While node/koa ran **30714 iterations**, java/javalin ran **145571 iterations**.

Java outperformed Node in **470%** (approximated value).

Both delivered 100% success for 10 concurrent virtual users during 30 seconds.

## Further reading

- Study ways to improve node performance using [clusters][node-cluster].
- Increase workload until the failure point in each benchmark.

[title]: https://github.com/sombriks/node-vs-kotlin-k6-benchmark
[article]: <to be written>
[koa]: https://github.com/sombriks/sample-htmx-koa
[javalin]: https://github.com/sombriks/sample-htmx-javalin
[k6]: https://grafana.com/docs/k6/latest/get-started/installation/#fedoracentos
[k6-options]: https://grafana.com/docs/k6/latest/results-output/end-of-test/
[node-cluster]: https://nodejs.org/api/cluster.html#cluster
