package DAY27;

public class MethodsThread {

	public static void main(String[] args) throws InterruptedException {

		Runnable r1 = () -> {
			for (int i = 0; i <= 10; i++) {
				System.out.println("1T");
				Thread.yield();
//				try {
//					Thread.sleep(2000);
//				} catch (InterruptedException e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
			}
		};
		Runnable r2 = () -> {
			for (int i = 0; i <= 10; i++) {
				System.out.println("2T");
//				Thread.yield();
			}
		};

		Thread t1 = new Thread(r1);
		Thread t2 = new Thread(r2);

		t1.start();
		t2.start();
		
		// suspend() 
//		t1.suspend();
		
		// resume
//		t1.resume();
		
		// yield
//		t1.yield();
		
		// sleep()
//		t1.sleep(3000);
		
		// getState
//		System.out.println(t1.getState());
//		System.out.println(t1.getName());
//		System.out.println(t2.getName());
		
		// setName()
//		t1.setName("vedant");
//		System.out.println(t1.getName());
		
		// setPriority
//		t1.setPriority(2);
//		t2.setPriority(6);
		
		// getPriority
//		System.out.println(t1.getPriority());
//		System.out.println(t2.getPriority());
		
		// stop 
//		t1.stop();
		
		// isAlive
//		System.out.println(t1.isAlive());
//		System.out.println(t2.isAlive());
		
		// currentThread - returns references details 
		System.out.println(t1.currentThread());
		System.out.println(t2.currentThread());

		
		
		

	}
}
