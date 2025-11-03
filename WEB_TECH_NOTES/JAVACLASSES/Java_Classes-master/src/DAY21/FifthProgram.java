//5. WAP to find the number of occurrence of each and every character in the given String where String is debugshalabugla.
package DAY21;

public class FifthProgram {

	public static void main(String[] args) {
		
		String s = "debugshalabugla" ;
		
		for(int i=0;i<s.length();i++) {
			int count =0;
			for(int j=0;j<s.length();j++) {
				if(s.charAt(i)== ' ') {
					  continue;
				}
				if(s.charAt(i)==s.charAt(j) && i>j) {
					break;
				}
				if(s.charAt(i)==s.charAt(j)) {
					count++;
				}
				
				}	
			if(count>0) {
				System.out.println("character "+ s.charAt(i)+ "  occurrence number of times "+count);
			}
			}
		}
	}

