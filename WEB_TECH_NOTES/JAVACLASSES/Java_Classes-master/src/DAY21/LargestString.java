// find the largest word from the String.

package DAY21;

public class LargestString {

public static void main(String[] args) {
	
	String s = "nandini parasar debugshala m padti hai";
	 

	// spllit 

	String [] words = s.split(" ");

	String laregestWord ="";
	int maxLength = 0;

	for(String word:words) {
		if(word.length() > maxLength) {
			maxLength = word.length();
			laregestWord = word;
		}
	}
	System.out.println(maxLength);
	System.out.println(laregestWord);
}


	
}
