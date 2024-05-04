#!/bin/bash

for i in {1..4}
do
    output=$(curl 'http://localhost:3000/api/234' \
    -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
    -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8' \
    -H 'Cache-Control: max-age=0' \
    -H 'Connection: keep-alive' \
    -H 'Cookie: next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..GjsXAOrBjXh5AGVO.BnovXfCV-h8lN_liJMttdVMlw2n5rvEnsi3V8hfyB34Dx9dc2v00T8e8ecxs6qpwoSk7KM445zNVwQT_jQ1fHqyIyxqi5b4SoBZfhoHZ1Ob1uJFhdWRzBdryTogjJZtffxP6TeeqaXhRwNkjfgEK2OIp6VtnxrzgSTJDJi5q.za5F9-zWRUEj6ZVxWDTH1Q' \
    -H 'If-None-Match: W/"1a-phK7YgkTcuaTfUuOymmRYvxuCJM"' \
    -H 'Sec-Fetch-Dest: document' \
    -H 'Sec-Fetch-Mode: navigate' \
    -H 'Sec-Fetch-Site: none' \
    -H 'Sec-Fetch-User: ?1' \
    -H 'Upgrade-Insecure-Requests: 1' \
    -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36' \
    -H 'sec-ch-ua: "Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"' \
    -H 'sec-ch-ua-mobile: ?0' \
    -H 'sec-ch-ua-platform: "Linux"')
    echo "Request $i: $output" >> out.txt
    sleep 2
done