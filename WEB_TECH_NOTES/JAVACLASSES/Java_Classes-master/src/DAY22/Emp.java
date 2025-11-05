package DAY22;

public class Emp {

	// properties/attributes/variable
	String eEname;
	private double sal;
	String job;
	
	public double getSal() {
		return sal;
	}
	public void setSal(double sal) {
		if(sal>10000.0) {
			this.sal = sal;
		}else {
			try {
				throw new SalaryIncorrectException("hy teri sal kam hai");
			} finally {
				System.out.println("Your salary is not correct");
			}
		}
	}
	public Emp(String eEname, double sal, String job) {
		super();
		this.eEname = eEname;
		if(sal>10000.0) {
			this.sal = sal;
		}else {
			try {
				throw new SalaryIncorrectException("hy teri sal kam hai" );
			} finally {
				System.out.println("Your salary is not correct");
			}
		}
		this.job = job;
	}
	
	public void display() {
		System.out.println("Ename "+this.eEname + " having salary "+ this.sal+"and their job is "+this.job);
	}
	
	
	
	
	
	
	
	
	
}
