useCallBack Hook :- It is a react hook that memoizes a function and returns the same function references between render unlesss its dependecies change.


function-1   # 001
function-2   # 002
function-3   # 003

let multi  = useMemo(function multiply(){

})


const demo = useCallBack(()=>{
  
},[depdencies])



Navbar -> button [Logout]


logout -> logic -> function 

Suppose -> Ecomm 
------------------------------
Navbar              logout 


product1  product2  product3
product4  product4  product6
-----------------------------

Higher order function -> hof which accept function as an argument.


function Parent(cbf){


}
function Child(){

}


React.Memo -> React.Memo is a higher order component (HOC) that memoizea a component and prevents re-rendering if props have not changed.


Example :- 

 const comp1 = React.Memo(Component)




 Suppose if u am changing in the Parent Component 


 -> count button -> count +1 

logoutuser1 -> # 001 
 logoutuser1 -> # 002

 old add== new add  both are diff 

 re-render


 logoutuser1 -> # 001  -> re create    
 



 ============================================================================



 Creare Two Components :- 

 Parent -> change the fruit name and chnage the color name and pass to the chiil component 
 Child -> Display the data here <h1 style={{color:color}}> Hy fruit name is {fruit}


 Routing 
 BrowserUrl 
 BrowserRouter
 Routes
 Route