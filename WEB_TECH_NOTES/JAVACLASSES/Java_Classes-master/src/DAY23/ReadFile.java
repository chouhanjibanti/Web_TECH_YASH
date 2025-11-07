// Read the data from the file
package DAY23;

import java.io.FileReader;

public class ReadFile {

	public static void main(String[] args) {
		
		try {
			FileReader f = new FileReader("D://AllSubjectNotes//WEB_TECH_NOTES//JAVACLASSES//Debug.txt");
			try {
				int i;// hold the integer value
				while((i = f.read()) != -1) {
				    System.out.print((char)i);
				}
			} finally {
				f.close();
			}
		} catch (Exception e) {
			System.out.println(e);
		}
	}
}
