// Iterator interface :- hasNext(),next(), remove()
package DAY24;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.ListIterator;

public class IteratorInterface {

	public static void main(String[] args) {
//		ArrayList al = new ArrayList();
//		al.add("hy");
//		al.add("by");
//		al.add(3);
//		al.add(true);
//		al.add(10.10);
//		
//		System.out.println("Iterator interface");
//	  Iterator itr =al.iterator();
//	  while(itr.hasNext()) {
//		  System.out.println(itr.next());
//	  }
//		
//		[java,C#,javascript,python, 10,Golang]
//
//				Output :- [java,C#,c,php,python,Golang]
		
//		Iterator Task 
		ArrayList al = new ArrayList();
		al.add("java");
		al.add("c#");
		al.add("javascript");
		al.add("python");
		al.add("Golang");
		
		
	  ListIterator itr = al.listIterator();
	 int c = 0;
	 while(itr.hasNext()) {
		Object o =  itr.next();
		c++;
		if(c==2) {
		    itr.add('c');
		}
		else if(o.equals("javascript")) {
			itr.set("php");
		}else if(o.equals(10)) {
			 itr.remove();
		}
	 }
	 System.out.println(al);
	}
}
