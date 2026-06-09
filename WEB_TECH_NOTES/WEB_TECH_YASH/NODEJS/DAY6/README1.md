Middlewate :- 

-> it will work b/w request and response.
-> This middleware runs for every request.
-> It acts like a plugin that takes data sent from postman /frontend , converts it into aa javascript object  and attach into the req.body.
-> It Converts incoming json/form data into javascript object.

Types of Middleware
Application-Level Middleware :- Entire application logic
Router-Level Middleware :- Specific Route logic 
Built-in Middleware -> express.json , express.urlencoded , express.static 
Error-Handling Middleware -> Error handing logic 
Third-Party Middleware -> cors 


Inbuilt Middleware :- 

express.json() -> json -> js object 
express.urlencoded({extended:false}) -> form -> js object 
express.static() -> find the folder ( css files , html file)

External Middleware (Mannnual ) :- 
app.use((req,res,next)=>{

})
next is responsible for the call the next middleware.
