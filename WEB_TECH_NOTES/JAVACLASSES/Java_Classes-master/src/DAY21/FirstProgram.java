package DAY21;

import java.util.Scanner;

public class FirstProgram {

	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Enter the String ...");
		
		String s = scan.nextLine();
		int countA =0 , countD =0 , countS=0;
		
		for(int i=0;i<s.length();i++) {
			if((s.charAt(i) >= 'a' && s.charAt(i) <='z' ) || (s.charAt(i) >= 'A' && s.charAt(i) <= 'Z')) {
				countA++;
			}
			else if(s.charAt(i) >= '0' && s.charAt(i) <= '9' ) {
				countD++;
			}else {
				countS++;
			}
		}
		System.out.println("Alphabet "+countA);
		System.out.println("Digits "+countD);
		System.out.println("Special Character"+countS);

	}
}
