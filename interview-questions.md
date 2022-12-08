# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: In a class, super inputs an argument that is organic or inherited from the parent class to the child class. 

Researched answer: In a class, the super method is utilized in the subclass to use instance variables from the superclass, or the parent. Instance variables cannot be inherited from the parent because instance variables are "local" to a speicfic object. After calling on super, the child will then have permissions to the instance variables nested inside that method.

2. What is a gem?

Your answer: Gems are installed for Ruby. Similar to node modules in Jest for testing JavaScript. 

Researched answer: A gem in Ruby is a conglomoration of code snippet functionality. The Ruby package manger, RubyGems, manages gems, similar to the yarn package manager for JavaScript testing. Gems allows programmers to add features without creating the same code over and over again on an application. Gems ensures functionality and easy dissemination between programmers. 

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a one-stop-shop that holds attributes and data that correlate in at least one way or another to each other. Relational databases are very useful when trying to return a very specific amount or type of data required, instead of looking at big data without any goal or task. Relational databases help with organization and flow and remove the clusstered mess of unassociated and unneccessary data from an environment. 

Researched answer: A relational database depicts information in rows and columns, similar to an Excel spreadsheet. This type of database holds organized data in a predefined relationship, which allows for easier visibility on the relationship between different types of data. SQL is a common type of relational databases. Objects written in Ruby almost mirror data stored in the columns and rows in relational databases. Ruby's objects conists of key value pairs, which can be reflected in relational databases. PostgreSQL is also another type of relational database, as it is an object-oreinted database. PostgreSQL is very similar to sQL, just an advanced version, with more functionality and relations between objects.

4. What are primary keys? Why are they important?

Your answer: Primary keys are unique identifiers in the first column that are given to each instance in a relational database. This is especially helpful to confirm an instance is either a duplicate or a legitimate entry, just with similar attributes to another instance. 

Researched answer: Primary keys are unique identifiers given to every row in Rails. The primary key is given the name "ID", which helps ensure no duplicate entries. Primary keys allow programmers to understand the fidelity of their entries, simply because of the "ID". Primary keys determine each and every row, as well.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: HTTP verbs are get, post, put, patch, delete and their corresponding CRUD actions are read, create, update, update, delete, respectively. HTTP is protocol and CRUD works off of philosophy. 

Researched answer: HTTP verbs are properly referred to as methods. The HTTP verbs are get, post, put, patch, and delete. These verbs describe the desired request for a certain resource performed at a certain time. Their corresponding CRUD actions are as follows: get:read, post:create, put/patch:update, delete:delete. Get retrieves data. Post changes the state of a server as it sends something to a resource. Put replaces current representations with the requested payload. Patch modifies a certain portion of a resouce. Delete removes the certain resource.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: RESTful routes is a set of procedures that enhances methodical and reusable routes. Many programming languages like Ruby, JavaScript, Python, C#, and PHP use RESTful routes. RESTful routes allows programmers to be able to understand and comb through an application in clear URL paths. RESTful routing names specific routes that create specific actions, like CRUD. 

2. Ruby on Rails: Ruby on Rails is a server-side web application framework, which makes the framework more of a back-end feature, instead of a front-end if it were client-side. Ruby on Rails is written in Ruby, of course, and provides blue prints for databases, applications, and web services. 

3. Database migrations: Database migration moves data from source databases to target databases via a migration service, like the Cloud. Database migration allows for data storage to be on different servers, typically not on physical ones anymore. Data centers migrate to online services, and physical storage is removed, while maintaining data security and integrity. 

4. Params: Params are short for parameters. Params are a variable passed to a fucntion during it's creation. Parameters tell the function the argument it will take when the function is called. Params make programming dynamic, as multiple arguments and types of arguments can be passed to the function.

5. ERB: Embedded Ruby, or EMB, is a template engine that allows Ruby to embed HTML and showcase both languages together. ERB is the default engine of Ruby on Rails, which enables it render views. ERB is denoted in a file by .html.erb or .erb. 
