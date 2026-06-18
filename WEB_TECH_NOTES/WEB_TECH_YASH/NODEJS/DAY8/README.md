Mongoose :- it isexternal  module / library 
-> npm install mongoose -> node package manager

It provides mainky three things :- 
1. .connect -> with the help of this method we can connect backend app with the mongoDb database.
 const mongoose=require("mongoose)

 mongoose.connect("database Url")

2. Schema -> collections creation 
     in mysql -> table 
     in mongodb -> collection

    const userSchema = new mongoose.Schema(
        {
            name:{type:string},
            email:{type:string, unique:true}
        }
     )

3. .model -> we will create the model of the schema 
          => why we create the model :- mongodb methods here 

        const userModel =mongoose.model("order",userSchema)

        
====================================================

Rest APIs -> Representational State transfer -> JSON -> JSON 

get All users :- 
get -> http://localhost:8000/api/users

get the user based on the id :- 
get users based on id :- get -> http://localhost:800/api/users/<user-id>

save the data:- 
post -> http://localhost:8000/api/users

update the users :- 
put/patch -> http://localhost:8000/api/users/id
json :- 
{
    "name":"......",
    "email":"......"
}


delete the user 
delete -> http://localhost:8000/api/users/id


==================================

installation :- 
express , mongoose 
npm install express mongoose 


========================================

put and patch 

patch -> Partially

Example :- 
name - raja
email - raja@gmail.com

patch -> data update through the patch 
-> name - sagar


=================================

in the case of PUT :- Entire data / new Data -> delete old delete 

Example :- 
name - raja
email - raja@gmail.com


Put -> change the data through the put 
name :- sagar 






