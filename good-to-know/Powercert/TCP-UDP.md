# TCP VS UDP 

Notes from [Powercert](https://www.youtube.com/watch?v=uwoD5YsGACg)

## TCP

TCP stands for transmission control protocol.

The communication between two computers needs to be "good" and reliable, to guarantee that the data is received correctly.

It is a connection oriented protocol. The first computer will send a *syn* message. The receiving computer will send back a *syn acknowledgement*. Then the first computer will send an *acknowledge received* message. Once this has taken place, data can be delievered.

## UDP

UDP stands for User Diagaram Protocol. It is a connectionless oriented protocol. It is faster but also unreliable.