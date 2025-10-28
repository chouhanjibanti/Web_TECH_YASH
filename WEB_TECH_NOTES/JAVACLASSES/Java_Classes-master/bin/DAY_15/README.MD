========== Access specifier ============

Access specifier  :- 

1. Access specifier are the keyword in java which is used to modify the behaviour of the java member[methods/variables].
2. we have 4 access specifier in java that specify visibility of the global member[variable/methods/constructor] to be used within the same class or other class of same package  or other classes of different packages.
3. in java we have following access specifier :- 

 order 
 
 private < default < protected < public
 
 
 private:- 
 1. Any global member declared with private keyword is known as private access specifier.
 2. Private member can be accessible only within the same class.
 3. Note :- we can make constructor private and the class who object can be instantiated only within the same class knows as single ton class.


default :- 
1. Any global member declared without any access specifier keywords known as default access specifier.
2. A default class can not be imported into other package classes.


Protected :- 
1. Any global members declared with protected access specifier can be access within the package classes without any restriction but to access them in other package classes we need inheritance.
2. To access protected member of a class in other package classes we need to follow the below rules:- 
    -> Inheritance is mandatory.
    
 
public :- public member can be access within any programs of any packages.
  
 
 
 
 private :- kabhi aap private access specifier use kr rhe ho to app usko sirf usi class ke andr access kr skte ho , aap usi package ki kisi bhi class ke andr access nhi kr skte or dusre package ki kisi bhi class ke andr nhi kr skte.
 
 default :- default access specifier ko aap same class or usi package ki kisi bhi class ke andr access kr skte or dusre package ki kisi bhi class ke andr bhul kr bhi mat krna .
 
 
 protected :- protected access specifier ko aap same class or usi package ki kisi bhi class ke andr access kr skte  or dusre package ki kisi bhi class ke andr kr skte ho but inheritance mandatory hoga.
 
 
 public :- public access specifier ko aap same class or usi package ki kisi bhi class ke andr access kr skte  or dusre package ki kisi bhi class ke andr kr skte ho but inheritance mandatory hoga .
 
 
 
 
 ==================================================
 
 final keyword :- final is a keyword can be used for a variable , method or class.
 1.final variable can be initialized only once but we can not reinitialize  it.
 2. A final methods can not be overrided.
 3. A final class can not have a subclass.
 
 
 ========================
 
 
 public , private , protected , default 
 
 
 private 
 default
 protected 
 public 
 
 
 - final keyword -> methods , variable , class
 
 ==============================
 
 
 classCastException :- 
 stackOverFlowException :- 
 Diamond problem :- 
 Encapsulation :- 
 Relationship :- 
 HAS-S , IS-A[inheritance] :- 
 C-C , C-I , I-I , I-C
 Inheritance :- 
 polymorphism :- 2 
 Object and class 
 new keyword 
 package :- import , java fully , package packName.
 
 
 
 
 
 
 
 
 
