Props Drillig :- 

if i want to pass the data to nested child is known as props drilling.


Parent 
  |
Child1
  |  
 Child2
   |
Child3


like i am passing from 
Parent component to Child1
Child1 to Child2 
Child2 to Child3 


======================

context API / useContext

Context API :- we can manage the state global in the entire application.

Like Example :- dark/light mode -> 

Context API three types of things :-
1. createContext   ->      const DataContext =  createContext()
2. Provider         ->  Directly Parent send to child3 with the help of provider
3. Consumer/useContext       ->  who can access