PolyMorphism :- 

1. A real time object can bahave in different forms and the same can also be represented by writing a java program.
2. Static and non static member can exhibit polymorphism.
3. we have two type of PolyMorphism :- 
   -> Compile time PolyMorphism :- The bind b/w the method calling statement     and implementation of the overloaded method occur during the compilataion
    based on the compile time binding.
    Example :- Method overloading , Constructor overloading
   
   
   -> Run time PolyMorphism :- The bind b/w the method calling statement and
   implementation of the overloaded method occur during the run time is known as run time PolyMorphism.
  Example :- Method overriding 
  
  
  Method Overriding :-   
  
   Super class non static method implementation is overrided by the sub class non static method implementation within the object of subclass  is known as method overriding.
   :- to achieve method overriding we need to follow below rules:- 
   1. Inheritance is mandatory.
   2. we need to create always subclass object.
   3. Superclass and subclass non static method declaration must be exactly     
      similar.
   4. The scope or visiblity or subclass non static method declaration must be similar or greater then that of superclass non static methods declaration.
   
   
   scope ordering :- 
   public > protected >default > private 
   
   
   ==============  Packages ====================
   
   
   Package is a keyword that represent collection of class files it is 
              the first statement within the java file / class always.
              
Syntax :-  package packageName;  
              package :-> keyword
              packageName :-> identifier
              
2. In java we have following packages :- 
 -> java.lang.package [default]
 -> java.util.package
 -> java.io.package
               
Note :- import is a keyword which is used for load the class file from specified package to current package.

Syntax :- import packageName.fileName; -> for particular file 
          import packageName.* -> Entire package 
          
          
Note :- import statement we should write outside the class and after the package declaration statement.


Java Fully Qualified name :- className declared with package details is known as java fully qualified name.
 
   
   
   
   
   
   
   
   
   
   