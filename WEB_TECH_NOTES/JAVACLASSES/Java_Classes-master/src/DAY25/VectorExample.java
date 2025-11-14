package DAY25;

import java.util.Vector;

public class VectorExample {

	public static void main(String[] args) {
		
		Vector<String> v = new Vector<String>();
		
		// adding element to the vector 
		v.add("banana");
		v.add("mango");
		v.add("sapota");
		
		// displaying the vector
		System.out.println(v);
		
		// Adding the element at a specific index
		v.add(1, "grapes");
		System.out.println(v);
		
		// Remove the element 
		v.remove("banana");
		System.out.println(v);
		
		// accessing an element
	  String v1 = v.get(2);
	  System.out.println("Element at index 2 :"+ v1);
	  
	  // checking the size of the vector
	  System.out.println(v.size());
	  
	  // clearing the vector 
	  v.clear();
	  System.out.println(v);
		
		
		
		
		
		
		
		
		
		
		
	}
}
