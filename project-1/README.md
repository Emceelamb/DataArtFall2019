# Listen to TCP
[Write up](https://sandbox.markofthelam.com/data-art/listentcp/ "Mark lam sandbox writeup")

## How to run

__Your listening devices and monitored device should be on the same network.__

**On your router:**
Apply the iptable rules in `iptables` to forward traffic from your monitoring device to your listening device.

__On your listening device:__
First run tshark to capture your web traffic. 
Then run `logger.py` to parse through the data capture. 
The logger will parse through packets as they are captured and trigger the motors. When there is no traffic the logger will wait. Under the hood it is an implementation of `tail -f`.

__On your monitoring device:__
Browse your internet as normally and hear the TCP connections being made. 

### ACKs
- Anthony Bui 
- Genevieve Hoffman
- Sid Chou





