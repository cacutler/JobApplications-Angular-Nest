# Job Applications Dashboard

This is a NestJS and AngularJS project focused on helping users keep track of job applications.  

## Features

- Users can see, edit, create, and delete their own job applications.
- Users can't see other users' job applications.
- Users need to login/register to use the tool.

## Database

**User Table**

- id
- name
- username
- password
- created at
- applications

**Application Table**

- id
- user id
- title
- company
- description
- qualifications
- status
- stage
- notes
- url
- submission date
- updated at