// Fetching the data from the collection object
// for loop
// for each 
// Iterator 
// ListIterator
package DAY24;

import java.util.ArrayList;

public class FetchCollectionObject {

	public static void main(String[] args) {
		ArrayList al = new ArrayList();
		al.add("hy");
		al.add("by");
		al.add(3);
		al.add(true);
		al.add(10.10);
		
		System.out.println("for loop");
		for(int i=0;i<al.size();i++) {
			System.out.println(al.get(i));
		}
		
		System.out.println("For Each loop");
		for (Object o1 : al) {
			 System.out.println(o1);
		}
	}
	

	
}
