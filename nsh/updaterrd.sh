DHT='/tmp/dht'
Adafruit_DHT 11 24 > $DHT
cat $DHT
hum=`cat $DHT |cut -d , -s -f 2- |tr -cd '0-9\012'`
echo $hum
tmp=`cat $DHT |cut -d , -s -f -1 |tr -cd '0-9\012'`
echo $tmp
/usr/bin/rrdtool update  /var/www/dht11.rrd N:`echo $hum`:`echo $tmp`
/var/www/tcontrol.sh
/var/www/gpio.sh
/var/www/frun.sh
