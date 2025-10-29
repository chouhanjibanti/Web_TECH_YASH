
package DAY20;

import java.util.Scanner;

public class SecondProgram {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);

		System.out.println("Enter the size of an array..");
		int size = scan.nextInt();

		char[] ch = new char[size];

		for (int i = 0; i < size; i++) {
			System.out.println("Enter the character for the index : " + i);
			ch[i] = scan.next().charAt(0);

		}
		int countA = 0, countD = 0, countS = 0;
		// a e i o u A E I O U
		for (int i = 0; i < size; i++) {

			char ch1 = ch[i];
			if ((ch1 >= 'a' && ch1 <= 'z') || (ch1 >= 'A' && ch1 <= 'Z')) {
				countA++;
			} else if (ch1 >= '0' && ch1 <= '9') {
				countD++;
			} else {
				countS++;
			}
		}
		System.out.println("Number of Alphabet " + countA);
		System.out.println("Number of Digits " + countD);
		System.out.println("Number of Special character " + countS);

	}
}
