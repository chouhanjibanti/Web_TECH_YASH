// userlogic class of the Students , comparator interface 
package DAY24;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class UserLogic_Student {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter your choice id/name/marks");
		String s = scan.next();
		Comparator<Student> c= new IdComp();
		if(s.equalsIgnoreCase("marks")) {
			c = new MarksComp();
		}
		else if(s.equalsIgnoreCase("name")) {
		   c =new NameComp();
		}
		
		ArrayList<Student> al = new ArrayList<Student>();
		al.add(new Student(3, "vedant", 33.10));
		al.add(new Student(4, "zaheer", 53.10));
		al.add(new Student(1, "nandini", 78.10));
		al.add(new Student(2, "khusi", 68.90));
		
		Collections.sort(al,c);
		System.out.println(al);


		
	}
}
