//1. WAP to  create an array of character with the given size by the user and 
// count the number of vowels present in them.

package DAY20;

import java.util.Scanner;

public class FirstProgram {

	public static void main(String[] args) {
		
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Enter the size of an array..");
		int size = scan.nextInt();
		
		char[] ch = new char[size];
		
		for(int i=0;i<size;i++) {
			System.out.println("Enter the character for the index : "+i);
			ch[i] = scan.next().charAt(0);
		     
		}
		int count=0;
		// a e i o u A E I O U
		for(int i=0;i<size;i++){
		
			switch (ch[i]) {
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u':
			case 'A':
			case 'E':
			case 'I':
			case 'O':
			case 'U':
				count++;	
			}
		}
		
		System.out.println("my vowels count are ,"+ count);
		
	}
}
