package DAY20;

import java.util.Scanner;

public class PrimeProgram {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);

		System.out.println("Enter the size of an array..");
		int size = scan.nextInt();
		int[] a = new int[size];

		for (int i = 0; i < size; i++) {
			System.out.println("Enter the character for the index : " + i);
			a[i] = scan.nextInt();
		}

		System.out.println("Print prime number...");
		for (int i = 0; i < size; i++) {
			int num = a[i];
			if (isPrime(num)) {
				System.out.println(num);
			}
		}
	}

	public static boolean isPrime(int num) {
		int count = 0;
		for (int i = 2; i <= num; i++) {
			if (num % i == 0) {
				count++;// 1// 2
			}
		}
		if (count == 1) {
			return true;
		} else {
			return false;
		}
	}

}
