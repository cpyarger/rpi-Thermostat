#!/bin/bash
tmp4='/tmp/dht'


ctmp1=`cat $tmp4 |cut -d , -s -f -1 |tr -cd '0-9\012'`

re='^[0-9]+$'

if  [[ $ctmp1 =~ $re ]] ; then

echo $ctmp1 

ct=$ctmp1

echo $ct > /var/www/ctemp.txt

fi
