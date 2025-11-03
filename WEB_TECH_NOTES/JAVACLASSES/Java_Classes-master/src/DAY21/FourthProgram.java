//4. WAP to find the sum of the digits present in a given String.where String is Debu56g23sha1la.
package DAY21;

public class FourthProgram {

	public static void main(String[] args) {
		
		String s1 = "ja1va23a";
	    int sum =0; 
	    char ch;
	    
	    for(int i=0;i<s1.length();i++) {
	    	ch = s1.charAt(i);
	    	
	    	if((ch>='0'&& ch<='9')) {
	    		sum  = sum + (ch - '0');// 1+2+3
//	    		sum = sum + (int)ch;
	    		
	    	}
	    }
	    System.out.println(sum);
	}
}
