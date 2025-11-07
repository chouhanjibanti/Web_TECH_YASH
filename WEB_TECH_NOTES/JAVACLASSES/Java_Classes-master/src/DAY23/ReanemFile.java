// Rename file 
package DAY23;

import java.io.File;

public class ReanemFile {

	public static void main(String[] args) {
		
		File f = new File("D://AllSubjectNotes//WEB_TECH_NOTES//JAVACLASSES//Debug.txt");
		
		File f1 = new File("D://AllSubjectNotes//WEB_TECH_NOTES//JAVACLASSES//indore.txt");
		
		if(f.exists()) {
			System.out.println(f.renameTo(f1));
			System.out.println("File name Changed");
		}else {
			System.out.println("File doesn't Exist");
		}
	}
}
