interface :- interface is a keyword that represents non primitive dataType or used defined dataType used mainly used to achieve 100% abstraction since it is allowed only abstract non static method in it.


Syntax :- 

public interface InterfaceName{
 // members
 }
 
 Note :- 
 1. we don't have the concept of constructor within the interface hence there is no diamond problem.
2. we can use static members of an interface by using interface name.


Example :- 
1.) 
 I1
 |  -> extends
 I2
 
2.)
I1--I2--I3
  \ | /   
   I4
 
   
3.) 
I1
|  -> implementation
C

4) 
c
|   -> implementation  -> not possible 
I1


5) 
C1---I1----I2
  \ | /
   C
 
 
 
============ Abstraction ==============

The process of providing the external functionality of an application through the methods of interface by hiding the concrete implementing subclass from the userLogic class known as abstraction.


helper method :- public  , 









 
 
 
 