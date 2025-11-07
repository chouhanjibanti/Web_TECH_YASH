// Display information
package DAY23;

import java.io.File;

public class DisplayInformation {

public static void main(String[] args) {
		
		File f = new File("D://AllSubjectNotes//WEB_TECH_NOTES//JAVACLASSES//indore.txt");
		
		
		if(f.exists()) {
			System.out.println("name of the file :"+f.getName());
			System.out.println("Location of the file :"+f.getAbsolutePath());
			System.out.println("File is writable or not :"+f.canWrite());
			System.out.println("File is Readable or not :"+f.canRead());
			System.out.println("Length of the data :"+f.length());
			System.out.println("File Removed :"+f.delete());
		}else {
			System.out.println("File doesn't Exist");
		}
	}
}
