package DAY25;

public class Main_Addable {

	public static void main(String[] args) {
		Addable a1 = (a,b)-> (a+b);
		System.out.println("Sum :"+a1.add(10,20));
	}
}
