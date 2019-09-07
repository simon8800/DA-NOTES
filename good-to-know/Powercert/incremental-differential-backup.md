# INCREMENTAL VS DEIFFERNTIAL BACKUP

Notes from [Powercert](https://www.youtube.com/watch?v=o-83E6levzM)

## BACKUP TYPES

**Fault tolerance** is the prevention of data loss if a component fails.

**Disaster recovery** is the process ofrebuilding an organization's data fater a disaster.

There are three types of backup types.

- Full
- Incremental
- Differential

## FULL BACKUP

A full backup is exactly what it sounds like. All data is backed up on a tape, disc, or whatever is being used nowadays. 

- Backs up all data
- Not efficient
- Longest to perform

The pros of full backup is its recovery. Data can be recovered in one session.

## INCREMENTAL BACKUP

It backs up the data that has been changed since the last full or incremental backup. It is the fastest backup.

It does take the longest for restoration. It has to be done in multiple sessions and be done in the correct order. First the full backup, then the incremental backups in correct order. 

## DIFFERENTIAL BACKUP

It backs up the data that has been changed since the last full backup. Each backup tape not only backs up that day's data, but also the previous days'.

For restoration you would just need the Full and Last differential backup. Medium backup, and medium restoration.