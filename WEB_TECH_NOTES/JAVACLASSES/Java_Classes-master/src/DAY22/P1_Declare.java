// Declare the exception
package DAY22;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;

// throws -- declaration
//public class P1_Declare {
//
//	public static void main(String[] args) throws FileNotFoundException {
//		
//		FileOutputStream fout = new FileOutputStream("");
//	}
//}

// Handle By try-catch

public class P1_Declare {

	public static void main(String[] args)  {
		try {
			FileOutputStream fout = new FileOutputStream("");
		} catch (Exception e) {
			
		}
	}
}
