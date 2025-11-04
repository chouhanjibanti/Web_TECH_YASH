package DAY22;

import java.util.Scanner;

public class ArithmeticExample {

	
	static int div;
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter the numerator");
		int num = scan.nextInt();
		System.out.println("Enter the denominator");
		int den = scan.nextInt();
		try {
			div = num/den;
		} catch (ArithmeticException e) {
			System.out.println("Do not divide by zero...");
		}
		System.out.println(div);
	}
}
