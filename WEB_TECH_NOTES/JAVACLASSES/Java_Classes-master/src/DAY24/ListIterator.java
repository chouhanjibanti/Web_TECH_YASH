package DAY24;

import java.util.ArrayList;
//import java.util.ListIterator;

public class ListIterator {

	public static void main(String[] args) {
		
		ArrayList al = new ArrayList();
		al.add("hy");
		al.add("by");
		al.add(3);
		al.add(true);
		al.add(10.10);
		
//		System.out.println("Forward direction ");
//		
//		java.util.ListIterator itr1 =  al.listIterator();
//		while(itr1.hasNext()) {
//			System.out.println(itr1.next());
//		}
//		
////		==========================================
//        System.out.println("Backward direction ");
//		
//		while(itr1.hasPrevious()) {
//			System.out.println(itr1.previous());
//		}
		
//		========================================
		
		// manu reverse the backward
		java.util.ListIterator itr2 =  al.listIterator(al.size());
		
		while(itr2.hasPrevious()) {
			System.out.println(itr2.previous());
		}
	}
}
