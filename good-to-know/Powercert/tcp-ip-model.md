# TCP/IP FIVE-LAYER NETWORK MODEL

Notes from [Geek's Lesson](https://www.youtube.com/watch?v=QKfk7YFILws&t=187s)

The fives layers of the TCP/IP model are **application**, **transport**, **network**, **data link**, and **physical**.

## PHYSICAL

The bottom layer - physical layer represents that physical devices that interconnect computers.

This includes the specs for the networking cables and the connectors that join devices. Also specs on how data is sent over these cables.

## DATA LINK

The data link layer is responsible for defining a common way of interpretting these signals so network devices can communicate.

The most common protocol on this layer is ethernet.

The **Ethernet** standards also define a protocol responsible for getting data to nodes on the same network or link.

## NETWORK 

The network layer allows different networks to communicate with each other through devices known as routers.

A collection of networks connected together through routers is called an **Internetwork**. The most famous of these being the **Internet**.

The network layer is responsibile for getting data across the internet in a secure and reliable fashion. One common protocol uses IP. **IP** is the heart of the Internet and most smaller networks around the world.

## TRANSPORT

The Transport layer sorts out which client and server programs are supposed to get that data.

TCP/IP is the most commonly used protocol.

UDP (User Datagram Protocol).

TCP guarantees data delivery while UDP does not.

## APPLICATION

The top layer is the application layer. This layer is the one you interact with the most. This is SFTP, SMFTP, FTP, HTTP, HTTPS, etc.

## ANALOGY

The physical layer is a delivery truck and the roads.

The data link layer is how the delivery trucks gets from one intersection from the next.

The network layer defines what roads the truck needs to take to make the delivery.

The transport layer is the delivery man knocking on your door to delivery the package.

The application layer is the package itself.