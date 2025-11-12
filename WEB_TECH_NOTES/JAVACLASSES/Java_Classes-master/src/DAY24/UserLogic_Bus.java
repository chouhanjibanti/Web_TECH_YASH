package DAY24;

import java.util.ArrayList;
import java.util.Collections;

public class UserLogic_Bus {

	public static void main(String[] args) {
		
		ArrayList al = new ArrayList();
		al.add(new Bus("shukla", 55));
		al.add(new Bus("Prabhat", 50));
		al.add(new Bus("Hans", 65));
		
	   Collections.sort(al);
	   System.out.println(al);


	}
}
