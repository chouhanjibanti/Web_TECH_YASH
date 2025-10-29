package DAY20;

import java.util.Scanner;

public class AICTSL {

	public static void main(String[] args) {
		
		 Scanner scan = new Scanner(System.in);
		 
		 System.out.println("Enter size of an array...");
		 int size = scan.nextInt();
		 Bus[] b = new Bus[size];
		 
		for(int i=0;i<size;i++) {
			System.out.println("Enter the properties for Bus :"+ (i+1));
			System.out.println("Enter the BN : ");
		      String bN=scan.next();
		      System.out.println("Enter the NumberoFSeats : ");
		      int nOS=scan.nextInt();
		      
		      b[i] = new Bus(bN, nOS);
		      System.out.println("End of adding the properties for bus ");
		      
		}
		
		System.out.println("Entered Buses are.....");
		for(Bus b1:b) {
			System.out.println(b1.toString());
		}
	}
}








