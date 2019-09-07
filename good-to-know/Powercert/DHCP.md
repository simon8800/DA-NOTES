# DHCP

Notes from [Powercert](https://www.youtube.com/watch?v=e6-TaH5bkjo)

## WHAT IS IT?

DHCP stands for dynamic host configuration protocol. Every computer on a network has to have an I.P. address. 

Two ways a computer can be assigned an IP address. It can be a **static IP** or **dynamic IP**.

A static IP is where a user assigns an IP address manually.

You have to add for each computer an IP address, subnet mask, default gateway, and DNS server address. All IP addresses must be unique. This is troublesome for a network with many computers.

A dynamic IP is where a computer gets an IP address from a DHCP server. A DHCP server automatically assigns a computer an IP address, Subnet mask, Default gateway, and DNS Server.

A DHCP has a scope where it defines the range of IP addresses that it can hand out.

When a computer obtains an IP address from the DHCP server, the IP address is assigned as a lease.

A **lease** is the amount of time an IP address is assigned to a computer. The lease is to help make sure the DHCP server does not run out of IP addresses.

A lease will be either renewed or expired. 

**Reservations** can be made. The DHCP will recognize a MAC address and give the same IP address to that device. Reserverations are typically given to special devices or computers, such as network printers, servers, routers, etc. These devices need a network connection constantly.

DHCP is a server that runs on a server, such as a Microsoft server or a Linux server. It's also a service that runs on routers. 