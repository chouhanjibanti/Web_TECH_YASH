package DAY27;

public class MyThread2 {

	public static void main(String[] args) {
		
		// create the interface object using the lambda expression
		
		Runnable r1 = ()->{
			for(int i=1;i<=10;i++) {
				if(i%2==0) {
					System.out.println(i);
				}
			}
		};
		
		Runnable r2 = ()->{
			for(int i=1;i<=10;i++) {
				if(i%2!=0) {
					System.out.println(i);
				}
			}
		};
		
		Thread t  = new Thread(r1);
		Thread t1  = new Thread(r2);

		t.start();
		t1.start();
	}
}
