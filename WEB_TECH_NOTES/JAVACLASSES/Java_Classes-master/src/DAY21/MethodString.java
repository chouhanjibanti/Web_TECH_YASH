package DAY21;

public class MethodString {

	public static void main(String[] args) {
		
		String s = "debugshaLA";
		
//		System.out.println(s.length());
//		System.out.println(s.toUpperCase());
//		System.out.println(s.toLowerCase());
//		System.out.println(s.concat(" Indore"));
		
		
		// charAt(i)
//		String s1 = "vedant";
////		System.out.println(s1.charAt(0));
//		for(int i=0;i<s1.length();i++) {
//			System.out.println(s1.charAt(i));
//		}
		
		
//		String s5 = "Nandini";
//		String s6 = "naNDiNI";
//		System.out.println(s5.equals(s6));
//		System.out.println(s5.equalsIgnoreCase(s6));
		
		
		// indexOf() :- Example of method overloading
//		java.lang.String.indexOf(char);
//		java.lang.String.indexOf(char,int);
//		java.lang.String.indexOf(String);
//		java.lang.String.indexOf(String,int);
		
		// if char is not exist -> -1
		
		String s100 = "vedant zaheer nandini khusi";
		System.out.println(s100.indexOf('y'));
		System.out.println(s100.indexOf('e'));
		System.out.println(s100.indexOf('e', 2));
		System.out.println(s100.indexOf("zaheer"));
		System.out.println(s100.indexOf("zaheer",0));
		
		
		String s101 = "welcome to debugshala";
		String[] arg = s101.split("e");
		for(String s1:arg) {
			System.out.println(s1);
		}

		
	}
}
