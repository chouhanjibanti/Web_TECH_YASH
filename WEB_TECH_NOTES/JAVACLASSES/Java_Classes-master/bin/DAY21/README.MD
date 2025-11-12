String :- String represents combination of character but in java it is consider to be an object.

Note :- 
It is a real time example of multiple inheritance that extends object(superMost class)  and implements serializable , charSquence, Comparable , constable, constantDesc interfaces in the same level.

package :- java.lang.String package


Different ways to creating the String object :- 
1. String Literals
2. New Keyword


1. String Literals :-

Example :- 

String s = "debugshala";

String s1 = new String("debugshala")


Differences between string literals or new Operator 
1. whenever we create the object using the literals string object created in the String constant pool area where we can not create duplicate object having same states.

2. by using this new operator we are creating the object , object created in heap area and even the duplicate object can be created.


===========================================================


# String is immutable.

once we create the String object a slide change in that object will
always result in new object and the address/references of new object is returned.



# Methods of String
1. java.lang.String.length()
2. java.lang.String.toUpperCase()
3. java.lang.String.toLowerCase()
4. java.lang.String.concat(String)
5. java.lang.String.charAt(i);
6. java.lang.String.equalsIgnoreCase(String)
7. java.lang.String.indexOf()
8. java.lang.String.split()
9. java.lang.String.subString()


================================

Questions of String:- 


1. WAP to check the number of alphabet , special character and digits present in the String .
2. WAP to reverse the given String.  
3. WAP to check weather given String is palindrome or not .
4. WAP to find the sum of the digits present in a given String.where String is Debu56g23sha1la.
5. WAP to find the number of occurrence of each and every character in the given String where String is debugshalabugla.
6. WAP to program to remove the duplicate character from the String.
7. I/P  -> "java html css"
   Output -> 
    (I) -> "ssc lmth avaj"
    (II) -> "css html java"
    (III) -> "avaj lmth ssc"








