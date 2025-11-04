package DAY22;

public class UnCheckedExample {
	int i = 10;
	static UnCheckedExample obj;

	public static void main(String[] args) {
//		 1. Arithmetic Exception :- When we divide any number by zero we got arithmetic exception 
//		 2. NullPointerException :- when we try to access the non static member of a class using the null refrerences we got NullPointerxception
//		 3. ArrayIndexOutOfBoundException :- whenever we try to access index of an array object which is not present ArrayIndexOutOfBoundException.
//		 4. StringIndexOutOfBoundException :- whenever we try to access index of the String object which is not present StringIndexOutOfBoundException.
//		 5. NumberFormatException :- when we try to parse String into integer using the parseInt() where string do not contains only digits we get NumberFormatException.
		
		// Arithmetic Exception
//		System.out.println(10/0);
		
		// example of NullPointerException
//		System.out.println(obj.i);
		
		// ArrayIndexOutOfBoundException
//		int[] arr = new int[5];
//		System.out.println(arr[5]);
		
		// StringIndexOutOfBoundException
//		String s = "java";
//		System.out.println(s.charAt(6));
		
//		NumberFormatException
//		int i = Integer.parseInt("1def13");
//		System.out.println(i);
		
	}
}
