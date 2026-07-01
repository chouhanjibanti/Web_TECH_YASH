JWT :- JSON WEB Token 

Authentication And Authorization 

Authentication :- credentials -> login -> email /password || Phone / Password || Username /password

Authorization :- Access -> HR , TRAINER , ADMIN 

Register :- Data store in the database 
           Login :- email / password

Token -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

Website -> 7 days :- trail ->  7 days -> logout -> premium / upgrade


Combination of number + alphabetical.


Token -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

1. header :- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

Combination :- 
{
  "alg": "HS256",
  "typ": "JWT"
}

2. payload :- eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0

combination :- 
{
    email: "ajay@gmail.com"
    password: "ajay@123"
}




3. signature  :- KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

Secret key :- iPokJvzC3KvunkqmH09TagB9sPYX5T2fYkUrVcdHyx



==============================================

npm i express jsonwebtoken bcryptjs dotenv    -> .env 
jsonwebtoken -> sign  , verify 


password :- Ajay@12345
Database pass -> rfbheshbg45bkiu45b645ub65iwl5iudfsgikzdjb




Register :- 
http://localhost:800/register
{
    "username":"ajay",
    "password":"ajay@123"
}



Login 
{
    "username":"ajay",
    "password":"ajay@123"
}

