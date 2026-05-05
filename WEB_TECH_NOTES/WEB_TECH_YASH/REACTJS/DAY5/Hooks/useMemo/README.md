useMemo :-
        useMemo is react Hook , used for the performance optimization.
        Memoization the calculation.


Filter :- 

Suppose we have Items :- 
Fruits = ["apple","banana","sapota","mango,"grapes","zems"]

input -> search box 
step :-1    a
 -> re-render 
 -> ["apple","banana","sapota,"mango","grapes"]

 step :-2  ap
 -> re-render
 -> ["apple","sapota,"grapes"]

 step :-3 app
 -> re-render
 -> ["apple"]