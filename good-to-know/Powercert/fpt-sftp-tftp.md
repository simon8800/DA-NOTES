# FTP (File Transfer Protocol), SFTP, TFTP Explained

Notes from [Powercert](https://www.youtube.com/watch?v=tOj8MSEIbfA)

## FTP 

FTP stands for **file transfer protocol**. The standard protocol that is used to transfer files between computers and servers over a network.

FTP is the langauge that computers use to transfer files over a TCP/IP network. 

You can also configure your own computer to act as an FTP server.

There are a couple of ways to transfer files using FTP. Internet browser and FTP Client.

On the browser, we'll have an FTP server. FTP servers are prefixed by `ftp`. Example: ftp.example.com

Sometimes FTP servers will require an account with a username and password. And sometimes you can just log in anonymously.

A popular FTP client is Filezilla. It browsers a GUI  for users. You have to enter the FTP server in the client and account information. It will display the files.

## FTP COMMON USES

- Transferring files between computers
- Gives the ability of website designers to upload files to their web servers

---

FTP is **NOT** a secure protocol. Data being transferred is not encrypted. Data is sent in clear text. Should only be used on a limited basis.

## SFTP

SFTP stands for secure file transfer protocol. It adds a layer of security by encrypting data using secure shell.

It authenticates the user and the server.

FTP and SFTP are connection oriented protocols. They both use TCP for file transfer which means guaranteed delivery.

## TFTP

TFTP stands for trivial file transfer protocol. It is a very simple protocol. Not used to transfer files over the internet. It is mainly used for transferring files within a local area network.

TFTP is a connectionless protocol. It uses UDP instead of TCP which means it is unreliable.