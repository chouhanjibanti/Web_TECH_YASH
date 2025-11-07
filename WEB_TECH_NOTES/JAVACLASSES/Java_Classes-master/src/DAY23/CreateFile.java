// we will create the new file 
package DAY23;

import java.io.File;
import java.io.IOException;

public class CreateFile {

	
	public static void main(String[] args) throws IOException {
		
		// destination 
		File f = new File("D://AllSubjectNotes//WEB_TECH_NOTES//JAVACLASSES//Debug.txt");
		if(f.createNewFile()) {
			System.out.println("File Created SuccessFully...");
		}else {
			System.out.println("File Exists");
		}
	}
}
