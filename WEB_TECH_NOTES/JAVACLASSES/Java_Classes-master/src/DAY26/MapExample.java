package DAY26;

import java.util.Collection;
import java.util.HashMap;
import java.util.Set;

public class MapExample {

	public static void main(String[] args) {
		HashMap<Integer, String> hm = new HashMap<Integer, String>();

		hm.put(1, "raja");
		hm.put(2, "jay");
		hm.put(3, "rani");

		System.out.println(hm);

		HashMap<Integer, String> hm1 = new HashMap<Integer, String>();

		hm1.put(4, "vedant");
		
		// putAll methods
		hm.putAll(hm1);
		System.out.println(hm);
		
		// remove using the key
		hm.remove(1);
		System.out.println(hm);
		
		// remove using the key and value 
		hm.remove(2, "jay");
		System.out.println(hm);
		
		// replace 
		hm.replace(3, "vedant1");
		System.out.println(hm);
		
		// containesKey
		System.out.println(hm.containsKey(2));
		
		// containesValue
		System.out.println(hm.containsValue("rani"));
		
		// size
		System.out.println(hm.size());
		
		// clear 
//		hm.clear();
//		System.out.println(hm);
		
		// get value using the key
		System.out.println(hm.get(4));
		
		// isEmpty()
		System.out.println(hm.isEmpty());
		
		// keySet()
		Set<Integer> keys = hm.keySet();
		System.out.println(keys);
		
		// values()
		Collection<String> values = hm.values();
		System.out.println(values);
		
		
		// entrySet
	 Set<java.util.Map.Entry<Integer,String>>  r=	hm.entrySet();
	 System.out.println(r);
		
	}
}
