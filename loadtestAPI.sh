#!/bin/bash
end=$(date -ud "1 minute" +%s)
COUNTER=0
URL="https://www.google.com/search?ei=qpUnYO-eEPO1mgeivKXgBg&q=IU&oq=iu&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEJMCMgIIADICCAAyAggAMgIIADICCAAyAggAMgIILjICCAAyAggAOgUIABCxAzoICAAQsQMQgwFQ8ghY-AlgwAtoAHACeACAAdABiAG8BJIBBTAuMi4xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz&ved=0ahUKEwjvm9WbwObuAhXzmuYKHSJeCWwQ4dUDCA0&uact=5"

while [[ $(date -u +%s) -le $end ]]
do
  echo '========='$COUNTER'========'
  VAR='{''"url"'':"'$URL$(date +%s%N)'"}'
  curl 'http://sh.b3.tnpl.me/link'  -H 'Content-Type: application/json;charset=UTF-8' -H 'Origin: http://sh.b3.tnpl.me' --data-raw "${VAR}"
  COUNTER=$[$COUNTER+1]
  echo '==========================='
done
