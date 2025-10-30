package DAY20;

import java.util.Scanner;

public class DistinctElementProgram {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);

		System.out.println("Enter the size of an array..");
		int size = scan.nextInt();
		int[] a = new int[size];

		for (int i = 0; i < size; i++) {
			System.out.println("Enter the character for the index : " + i);
			a[i] = scan.nextInt();
		}
		
		int count=0;
		for(int i=0;i<size;i++) {
			for(int j=0;j<size;j++) {
				if(a[i]==a[j] && i==j) {
					count++;
					break;
				}
				if(a[i]==a[j] && i>j) {// repeat element 
					 break;
				}
			}
		}
		System.out.println(count);
		
		int[] b = new int[count];
		int index = 0;
		for(int i=0;i<size;i++) {
			for(int j=0;j<size;j++) {
				if(a[i]==a[j] && i==j) {
					b[index] = a[i];
					index++; // 0 1 2 3
					break;
				}
				if(a[i]==a[j] && i>j) {// repeat element 
					 break;
				}
			}
		}
		
		for(int b1 : b) {
			System.out.println(b1+" ");
		}
		
		
	}

	private static boolean isOdd() {
		// TODO Auto-generated method stub
		return false;
	}
}
// [5,6,5,7,6,3] - [5,6,7,3]
