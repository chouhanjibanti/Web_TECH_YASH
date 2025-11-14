package DAY25;

import java.util.LinkedList;

public class LinkedListExample {

	public static void main(String[] args) {
		
		LinkedList<String> animals = new LinkedList<String>();
		
		// adding the elements to the linkedList
		animals.add("Dog");
		animals.add("cow");
	   animals.add("cat");
	   
	   System.out.println(animals);
		
		// adding the elements at the first position
	   animals.addFirst("Horse");
	   
	   System.out.println(animals);
	   
	   // adding the elements at the last position
	   animals.addLast("Zebra");
	   
	   System.out.println(animals);
	   
	   // removing the first element
	   animals.removeFirst();
	   System.out.println(animals);
	   
	   // removing the last element
	   animals.removeLast();
	   System.out.println(animals);

	   

	}
}
