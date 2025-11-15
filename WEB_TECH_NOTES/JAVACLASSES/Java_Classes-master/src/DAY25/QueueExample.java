package DAY25;

import java.util.PriorityQueue;

public class QueueExample {

	public static void main(String[] args) {
		
		PriorityQueue<Character> pq = new PriorityQueue<Character>();
		
		pq.offer('A');
		pq.offer('B');
		pq.offer('C');
		pq.offer('D');
		
		System.out.println(pq);
		
		// return the first element who entered first
//		System.out.println(pq.peek());
//		System.out.println(pq);
		
		// remove the first element who entered first 
		System.out.println(pq.poll());
		System.out.println(pq);
		
		// size
		 System.out.println(pq.size());
	}
}
