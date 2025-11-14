// without lambda expression
package DAY25;

public class Main {

	public static void main(String[] args) {
		
		Greeting g = new Greeting() {
			
			@Override
			public void sayHello() {
			     System.out.println("hello hy");
			}
		};
		
		g.sayHello();
}
}
