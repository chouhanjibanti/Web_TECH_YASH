Model View Controller:- 
MVC 

-> Model:- Database logic (MongoDB)
where data is stored and fetched.

-> View :- UI / Reponse (HTML /JSON)
what user sees.

Controlled ->Business Logic 
Middlemen between user and database.


Flow :- 
User [Register] -> Controller -> model[schema] -> controller(database)-> view -> User

Mini-mvc-app
 -> index.js 
 -> package.json -> 
 -> package-lock.json -> meta data 
 -> Readme.md -> 

 -> config -> db.js ->  database connetion
 -> model -> user.js -> schema and model 
-> controller -> user.js -> controller logic 
-> views -> register.ejs -> UI  -> ejs -> embeded JAvacsript -> html +js  -> Tags 
-> routes -> userRoutes.js


======================================

Installation :- 
npm install express mongoose ejs


=================================



EJS :- embebded Javascript 

Tags :- 
<% %> -> scriptlet tag -> js code -> if else , for loop 
<%# %> -> comment tag 
<%= %> -> output display on the browser
