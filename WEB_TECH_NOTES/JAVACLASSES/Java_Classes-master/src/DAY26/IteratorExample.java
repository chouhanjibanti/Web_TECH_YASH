package DAY26;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

public class IteratorExample {

	public static void main(String[] args) {
		HashMap<Integer, String> hm = new HashMap<Integer, String>();

		hm.put(1, "raja");
		hm.put(2, "jay");
		hm.put(3, "rani");

		System.out.println(hm);

		Set<Integer> keys = hm.keySet();
		System.out.println("Each each loop");
		for (int i : keys) {
			System.out.println(i + " " + hm.get(i));
		}

//	Using the iterator interface 
		
	  Iterator<Integer> itr = keys.iterator();
	  while(itr.hasNext()) {
		 int i =  itr.next();
			System.out.println(i + " " + hm.get(i));
	  }

	}
}
