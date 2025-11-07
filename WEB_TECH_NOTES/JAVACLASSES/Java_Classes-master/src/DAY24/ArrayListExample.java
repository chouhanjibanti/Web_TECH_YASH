package DAY24;

import java.util.ArrayList;

public class ArrayListExample {

	public static void main(String[] args) {
		
		ArrayList al  = new ArrayList();	
	
		al.add("hy");
		al.add(10);
		al.add(true);
		al.add(67.90);
		
		System.out.println(al);
		
		ArrayList al1  = new ArrayList();
		al1.add(20);
		al1.add(false);
		System.out.println(al1);
		
		System.out.println("The size is "+al.size());
		System.out.println("The size is "+al1.size());
		al.add(1,null);
		System.out.println(al);
		
		// clear all the element 
//		al.clear();
//		System.out.println(al);
		// particular record delete 
		al.remove(1);
		System.out.println(al);
		
		// set the element on the index
		al.set(1, 100);
		System.out.println(al);

		// add , set[reint] , clear , remove(i)
	}
}
