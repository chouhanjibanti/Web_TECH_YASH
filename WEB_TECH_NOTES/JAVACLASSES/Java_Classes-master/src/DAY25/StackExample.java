package DAY25;

import java.util.Stack;

public class StackExample {

	public static void main(String[] args) {
		
		Stack<Character> s = new Stack<Character>();
		
		s.push('A');
		s.push('B');
		s.push('C');
		s.push('D');
		
		System.out.println(s);
		
		// pop methods 
//		System.out.println(s.pop());
//		System.out.println(s);
		
		// peek() methods
//		System.out.println(s.peek());
//		System.out.println(s);
		
		// search()
	    System.out.println(s.search('B'));
	    
	    // empty() -> boolean 
	    System.out.println(s.empty());
	}
}
