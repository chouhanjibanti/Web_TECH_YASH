Abstraction :- 

concrete method
concrete class
abstract method
abstract class


concrete method: any method with implementation is know as concrete method.
Example :- 
public void sum(){
   Syso("hy");
}

concrete class :- Any class consist of only concrete methods are known as concrete method.
Example :- 
class p1{
   public void sum(){
   Syso("hy");
  }
}

abstract methods :- Any non static method without implementation specified by abstract keyword and semicolon(;) is knows as abstract methods.
Example :- 
abstract [access specifier] returnType MethodsName;


abstract class:- Any class consist of minimum one  abstract method is known as  abstract class.

abstract public class p2{
    abstract public void sleep();
}

Note:- 
1) only non static method can be abstract because non static methods provided with an implementation through subclass non static method
2) static methods  can not make as abstract method since they have single copy in nature. 
3) we can not create the object of Abstract class.






