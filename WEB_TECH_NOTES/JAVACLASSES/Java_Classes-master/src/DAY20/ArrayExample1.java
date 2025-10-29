package DAY20;

import java.util.Scanner;

public class ArrayExample1 {

	static Scanner scan = new Scanner(System.in);
	
	public static void main(String[] args) {
		
		System.out.println("Enter the size of an Array..");
		int size = scan.nextInt();
		
		double[] d = new double[size];
		
		// to insert the elements 
		for(int i=0;i<d.length;i++) {
			System.out.println("Enter the element for index ,"+i);
			d[i]=scan.nextDouble();
		}
		
		System.out.println("The Entered element are....");
		System.out.print("[");
//		for(int i=0;i<size;i++) {
//			System.out.print(d[i] + " ");
//		}
		
		for(double d1:d) {
			System.out.print(d1+" ");
		}
		System.out.print("]");
	}
}
