# tshark notes

- tshark is cli for wireshark
- `"tcp.flags.syn==1 or (tcp.flags.syn==1 and tcp.flags.ack==1)"` = display filter for syn, syn ack packets
- useful flags: 
  - `-l` flushes STDOUT after every packcet
  - `-Y` display filter
  - `-n` disables name resolution

## monitoring logs
- `tail -f <file name>`
- `less +F <file name>`
