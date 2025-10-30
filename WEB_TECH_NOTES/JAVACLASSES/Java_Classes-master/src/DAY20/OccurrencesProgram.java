package DAY20;

import java.util.Scanner;

public class OccurrencesProgram {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);

		System.out.println("Enter the size of an array..");
		int size = scan.nextInt();
		int[] a = new int[size];

		for (int i = 0; i < size; i++) {
			System.out.println("Enter the character for the index : " + i);
			a[i] = scan.nextInt();
		}
		
		
		for(int i=0;i<size;i++) {
			int count=0;
			for(int j=0;j<size;j++) {
				if(a[i]==a[j] && i>j) {// repeat element 
					 break;
				}
				if(a[i]==a[j] ) {
					count++;
				}	
			}
			if(count>0) {
				System.out.println(a[i]+ " occurrence of  element  :"+ count);
			}
		}
		
	}
}
