Expressjs :- 

ExpressJs is a backend framework for the nodejs.
It helps you create server easily , handle routes easily , and manage the request like GET , POST , PUT , PATCH , DELETE without writing the complex code .

-> expressjs is not a language.
-> expressjs is not a library.
-> Expressjs is a framework ( pre-built structure).

why do we use expressJs:- 
1. To avoid complex nodejs code :- 

without express -> server create , routes 

if
mannual routing 
switch 
else if 

-> Code become to messy , hard to maintain.

===========================================================

2. expressjs makes routing in easy way :- 

without express :- 
if(req.url === '/About' && req.method ==='GET')

with Express
app.get("/about", (req,res)=>{

})

=======================================

3. Easy to read and maintain

Routes
Middleware 

=================================================

4. Built Middleware :- 
app.use(express.json()) -> postman -> json data -> js object 
app.use(express.urlencoded({extended:true})); -> html form -> js object 

===================================================

5. Easy to create APU :- 
GET      / get 
POST      / save data 
PUT       / update the data 
PATCH    / update 
DELETE 