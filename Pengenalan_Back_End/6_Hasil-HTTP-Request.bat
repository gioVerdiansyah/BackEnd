@REM didapatka dari curl -X GET https://coffee-api.dicoding.dev/coffees -i > 6_informasi-HTTP-Request.bat

HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Sat, 18 Feb 2023 11:53:14 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 188
Connection: keep-alive
content-security-policy: upgrade-insecure-requests
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
vary: origin
access-control-expose-headers: WWW-Authenticate,Server-Authorization
cache-control: no-cache
accept-ranges: bytes

{"message":"Berikut daftar kopi yang tersedia","coffees":[{"id":1,"name":"Kopi Tubruk","price":12000},{"id":2,"name":"Kopi Tarik","price":15000},{"id":3,"name":"Kopi Jawa","price":18000}]}


@REM didapatka dari curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Tubruk\"}" https://coffee-api.dicoding.dev/transactions -i >> 6_Informasi-HTTP-Request.bat

HTTP/1.1 201 Created
Server: nginx/1.18.0 (Ubuntu)
Date: Sat, 18 Feb 2023 12:01:55 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 46
Connection: keep-alive
content-security-policy: upgrade-insecure-requests
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
vary: origin
access-control-expose-headers: WWW-Authenticate,Server-Authorization
cache-control: no-cache

{"message":"Pesanan berhasil!","success":true}


@REM curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Luwak\"}" https://coffee-api.dicoding.dev/transactions -i >> 6_Informasi-HTTP-Request.bat

HTTP/1.1 404 Not Found
Server: nginx/1.18.0 (Ubuntu)
Date: Sat, 18 Feb 2023 12:14:50 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 66
Connection: keep-alive
content-security-policy: upgrade-insecure-requests
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
vary: origin
access-control-expose-headers: WWW-Authenticate,Server-Authorization
cache-control: no-cache

{"message":"Pesanan gagal, kopi tidak ditemukan!","success":false}