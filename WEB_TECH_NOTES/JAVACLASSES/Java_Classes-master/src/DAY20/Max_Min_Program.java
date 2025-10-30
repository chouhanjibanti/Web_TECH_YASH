package DAY20;

import java.util.Scanner;

public class Max_Min_Program {

	
	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);

		System.out.println("Enter the size of an array..");
		int size = scan.nextInt();
		int[] a = new int[size];

		for (int i = 0; i < size; i++) {
			System.out.println("Enter the character for the index : " + i);
			a[i] = scan.nextInt();
		}
		
	    int min = a[0]; // 2 3 4 5 6
		int max = a[0]; // 2 3 4 5 6
	    for(int i=1;i<size;i++) {
	    	if(max<a[i]) {
	    		  max = a[i];
	    	}
	    	if(min>a[i]) {
	    		  min = a[i];
	    	}
	    }
	    System.out.println("maximum element :" + max);
	    System.out.println("Minimum element :" + min);
	}
}






