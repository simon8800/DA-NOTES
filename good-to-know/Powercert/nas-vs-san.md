# NAS VS SAN - NETWORK ATTACHED STORAGE VS STORAGE AREA NETWORK

Notes from [Powercert](https://www.youtube.com/watch?v=3yZDDr0JKVc)

## NAS

NAS stands for Network Attached Storage. It is a centralized storage device for storing data on a network. It doesn't do anything else besides storing data.

It will have multiple hard drives in a RAID configuration for redundancy (intensity of backup and restoring capabilities).

Ther are used in homes and small to medium-size businesses. The disadvantage is that it is a Single Point of Failure. 

## SAN 

SAN stands for Storage Area Network. It is a special, high speed network that stores and provides access to large amounts of data. This network consists of multiple disk arrays and switches. SANs are fault tolerant and data is shared among several disk arrays. Servers acces this data as if it was a local hard drive. That is how computers recognize SANs. 

These devices that make up a SAN are interconnected using Fibre Channels. Speeds are between 2Gbit/s - 128 Gbit/s.

There is also iSCSI (Internet Small Computer System Interface) - which is a cheaper alternative to using Fibre Channel. The downside is that it's not as fast as Fibre Channel.

The main reason to use SANs is that they are not affected by network traffic, such as bottlenecks in a local area network. It is essential a network all by itself. They are highly scalable and also very redundant. They are super expensive and that's why they are mainly used by large companies.