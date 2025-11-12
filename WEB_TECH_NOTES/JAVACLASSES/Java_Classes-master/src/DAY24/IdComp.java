// id sort logic
package DAY24;

import java.util.Comparator;

public class IdComp  implements Comparator<Student>{

	@Override
	public int compare(Student o1, Student o2) {
		if(o1.id>o2.id) {return 1;}
		else if(o1.id<o2.id) {return -1;}
		{return 0;}
		
//		return o1.id-o2.id;

	}

	
}
