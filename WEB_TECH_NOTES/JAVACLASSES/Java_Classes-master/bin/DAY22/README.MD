// Exception
// File Handling 
// Collection 
// MultiThreading


// Exception :- 

 Error :- Syntax , CT
 Exception :- Run time 
 
 
 Exception :- Exception is a problem encounterd by JVM during the run time that stop the normal flow of the program.
 
 
Note :- 
1) The statement that could not be executable by JVM is technically known as problematic statement or dangerous statement.

2) In java normal SuperMost class (Object Class).

3) Throwable is supermost class of all the exception classes and these exception classes are categorized into two ways :- 
 -> Checked Exception
 -> UnChecked Exception
 
 
 
 1. Arithmetic Exception
 2. NullPointException
 3. ArrayIndexOutOfBoundException
 4. StringIndexOutOfBoundException
 5. NumberFormatException
 
 
 Exception Handling MEchanism :- 
 Note :- 
 1) The process of handling the exception by using try catch block such that the normal flow of the program is never interupted.
 2) It is possible by keeping the dangerous statement within the try block and
 suitable catch block. 
 
 
 we have five types of try catch blocks
 1. try-catch block
 2. try with multiple catch block
 3. try catch finally
 4. try with multiple catch finally block
 5  try finally
 
 
 
 finally block :-  finally block must written immediately after try catch block and then statement written within it will always irrespective of exceptions is handled or not  or exception is created or not.
 
 Logic :- finally  block (connection close)


Types of Exception:- 
1. unChecked Exception :- Errors and its sub classes and runtime exception and it's subclasses are considered under the unchecked exception since problematic statement can not be recognized by the compiler hence they are known as unChecked Exception.

2. Checked Exception :Apart from errors and its subclasses and runtime exception and its subclasses remaining classes are considered under checked exception since there problematic statement are automatically recognized by the compiler and forces the developer to either declare or handle the exception.


1. declare the exception :- throws
2. try catch :- handle


(I). Declaring the exception :- we can declare the exception using throws keyword in method declaration or constructor
declaration .If we declare the exception we can avoid only compiler time error but during the runtime we may expect aburst stop in the program execution due to exception.

(II) Handing the Exception :- We can handle the problematic statements of checked Exception by using the try catch block and by which we can avoid compile time error and even the exception during the run time. 


==================================

throw keyword :- 

1. throw is a keyword use to rise an exception.

Example :-
public class ExampleThrow {

	public static void main(String[] args) {
		
		System.out.println("1");
		
		throw new NullPointerException();
	}
}

=======================================================

Custom and UserDefined Exception :- 

-> Exception classes created by the developer according to the requirement 
by extending any of the Throwable type classes are known as custom exception.

















 
 
 throws use
 throw keyword
 custom exception
 
 
 
 
 
 