package DAY27;

public class MyThread1 implements Runnable{

	@Override
	public void run() {
		for(int i=1;i<=10;i++) {
			System.out.println("Run Method");
		}
		
	}
	
	public static void main(String[] args) {
		
		MyThread1 t = new MyThread1();
	    Thread t1=new Thread(t);
	    t1.start();
	    for(int i=1;i<=10;i++) {
			System.out.println("Main Method");
		}
	    
	}
	
	

}
