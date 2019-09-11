# DNS SERVER

Notes from [PowerCert Animated Videos](https://www.youtube.com/watch?v=mpQZVYPuDGU)

## WHAT IS A DNS (DOMAIN NAME SYSTEM) ?
Computers use numbers to identify themselves. DNS resolves domain names to I.P. addresses.

When you type in a web address, DNS will resolve that address to an I.P. address.

DNS basically works like a phonebook.

## HOW A DNS SERVER (DOMAIN NAME SYSTEM) WORKS

1. You type in a web address. Let's say yahoo.com
2. Your web browser checks its cache. If it can't find it, we move to the next step.
3. The web address is sent to the **Resolver server** which is your ISP (internet service provider). The Resolver will look for the address in it's cache. If it can't find it, we move to the next step. 
4. The Resolver will send the query to a **Root Server**. There are 13 *sets* of these root servers strategically placed around the world. They are operated by 12 different organizations. Each set has their own unique I.P. address. The Root Server will not have the I.P. address for the web address, but it does know where to look. The Root Server will then direct the Resolver Server to the **TLD Server** for the '.com' domain.
5. Now the Resolver will ask the TLD Server for the I.P. address for yahoo.com. The TLD Server (Top Level Domain Server) stores the address information for top level domains. Such as .COM, .NET, .ORG, etc. The TLD Server will finally direct the Resolver to the **Authoritative Name Server**.
6. The Resolver will ask the Authoritative Name Server for the I.P. address. The ANS is responsible for knowing everything about the domain, including the I.P. address. The ANS will respond with the I.P. address for yahoo.com and the Resolver will provide your computer with the I.P. address, and finally your computer can retrieve the Yahoo webpage.
7. The Resolver will then store the I.P. address so it won't have to go through all those steps again.