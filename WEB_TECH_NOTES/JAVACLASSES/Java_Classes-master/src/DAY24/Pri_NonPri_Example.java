package DAY24;

public class Pri_NonPri_Example {

	
	public static void main(String[] args) {
		
		// boxing 
		int i = 10;
		
		// we will convert primitive into non primitive 
		Integer obj = new Integer(i);
		System.out.println(obj);
		
	    //After jdk 1.5 Auto Boxing 
		Integer obj1  = i;
		System.out.println(obj1);
		
		char c = 't';
		Character c1 = c;
		System.out.println(c1);
		
		
		// unBoxing 
		
		int i1 = obj.intValue();
		System.out.println(i1);
		
		
		// Auto unBoxing 
		int i2 = obj;
		System.out.println(i2);
		
		// 
		char c2 = c1;
		System.out.println(c2);

		
	}
}
