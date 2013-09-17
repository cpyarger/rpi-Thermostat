DHT='/tmp/dht'
Adafruit_DHT 11 24 > $DHT
cat $DHT
hum=`cat $DHT |cut -d , -s -f 2- |tr -cd '0-9\012'`
echo $hum
tmp=`cat $DHT |cut -d , -s -f -1 |tr -cd '0-9\012'`
echo $tmp
/usr/bin/rrdtool update  /var/www/dht11.rrd N:`echo $hum`:`echo $tmp`
/var/www/sh/tcontrol.sh
/var/www/sh/gpio.sh
/var/www/sh/frun.sh
