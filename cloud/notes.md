# CLOUD COMPUTING

Notes from [edureka!](https://www.youtube.com/watch?v=kQnNd-DyrpA&)

## WHY CLOUD COMPUTING?

Let's say you don't use cloud computing. If you want to host a website, you need to do the following things:

1. Buy a stack of servers
2. Keeping the peak traffic in mind, buy more servers
3. Monitoring and Maintenence of your servers.

The downsides are:

1. The setup is expensive
2. Troubleshooting problems can be tedious and may conflict with your business goals
  - You have to worry more about getting your application being run properly instead of working on your business and growing it.
3. Since the traffic is varying, your servers will be idle most of the time
  - Not cost-efficient

Now let's say you decide to venture into using cloud computing.

1. You put your data on a remote server. No more buying expensive servers
  - Buy as you need
2. Scalability: your server capacity will vary according to traffic.
  - No more paying for idle servers
3. Your cloud provider will manage your servers, hence no worries about the underlying infrastructure

## WHAT IS CLOUD COMPUTING?

It is the use of remote servers on the internet to store, manage, and process data rather than a local server or your personal computer.

## CLOUD MODELS

There are two general models: Service Models and Deployment Models.

Each of them have their own sub-categories.

## SERVICE MODELS

### INFRASTRUCTURE AS A SERVICE (IaaS)

- Provides virtualized computing resources over the internet
- No worries about the underlying physical machine
- Abstract the user form the physical machine

For example: you need a Linux system. You can get a virtual Linux system that is fresh and you have access to. You can start a server on that system, whether it is a web server or a database server, and more. 

On AWS, this is EC2. After setting it up, you have access to the virtual system through a terminal.

### PLATFORM AS A SERVICE (PaaS)

- No control over the underlying architecture including operating systems, storage, servers, etc
- The Cloud Provider gives the ability to the customer to deploy customer created application using programming languages, tools etc that are provided by the Cloud Provider. 

They launch a server for you, you just have a user interface that allows you to upload files and they manage the operating system for you. For example on AWS, it's PaaS is Elastic Beanstalk. You can configure the environment.

### SOFTWARE AS A SERVICE (SaaS)

- Cloud Provider leases applications or softwares which are owned by them to its client
- Example: salesforce.com provides the CRM(Customer Relation Manager) on a cloud infrastructure to its client and charges them for it, but the software is owned by the salesforce company only

---

If you have your own computer doing everything you have to manage:

- applications
- data
- runtime
- middleware
- O/S
- virtualization
- servers
- storage
- networking

As you move from IaaS -> PaaS -> SaaS you remove more responsibilites from yourself and the cloud provider takes care of it.

## DEPLOYMENT MODELS

There are Private Cloud, Public Cloud, and Hybrid Cloud.

## HOW DO YOU GET STARTED? 

You have to pick a Cloud Provider

- AWS
- Microsoft Azure
- Google Cloud Platform
- IMB Cloud
- DigitalOcean
- Joyent
- rackspace
- vmware
- terrmark

