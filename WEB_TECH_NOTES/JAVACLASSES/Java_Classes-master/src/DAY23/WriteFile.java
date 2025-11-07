// write file 
package DAY23;

import java.io.FileWriter;

public class WriteFile {

	public static void main(String[] args) {

		
		try {
			FileWriter f = new FileWriter("D://AllSubjectNotes//WEB_TECH_NOTES//JAVACLASSES//Debug.txt");
                   try {
					f.write("my institue name is debugshala");
				} finally {
					f.close();
				}
                   System.out.println("File wrote SuccessFully..");
		} catch (Exception e) {
			System.out.println(e);
		}
	}
}
