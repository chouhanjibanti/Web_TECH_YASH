package DAY25;

import java.util.TreeSet;

public class SecondMaximum_Sal_User {

	public static void main(String[] args) {
		
		TreeSet<SecondMaximum_Sal> ts = new TreeSet<SecondMaximum_Sal>();
		
		ts.add(new SecondMaximum_Sal(1, "vedant", 10000));
		ts.add(new SecondMaximum_Sal(3, "nandini", 40000));
		ts.add(new SecondMaximum_Sal(4, "zahheer", 100000));
		ts.add(new SecondMaximum_Sal(2, "khusi", 50000));
		
//		System.out.println(ts);
		
		int c = 0;
		for(SecondMaximum_Sal O :ts) {
			c++;
			if(c==2) {
			   System.out.println(O);
			   break;
			}
		}
	}
}
