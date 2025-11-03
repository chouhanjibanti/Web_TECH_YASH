//7. I/P  -> "java html css"
//   Output -> 
//    (I) -> "ssc lmth avaj"
//    (II) -> "css html java"
//    (III) -> "avaj lmth ssc"

package DAY21;

public class EigthProgram {

	public static void main(String[] args) {
		// second  "css html java"
		
		String s = "java html css";
		String[] s1= s.split(" ");
		String str = " ";
		for(int i=0;i<s1.length;i++) {
			str = str + " " + reverse(s1[i]) ; // css html java 
		}
		System.out.println(str.trim());
	}

	public static String reverse(String s) {
		String str = " ";
		for(int i=0;i<s.length();i++) {
			str = s.charAt(i) + str;
		}
		return str;
	}
}
