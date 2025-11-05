package DAY22;

public class SalaryIncorrectException  extends RuntimeException{

	// for the default message
	public SalaryIncorrectException() {
        super("Salary must be greater than 10000.0");
    }

//	for  this custom message
    public SalaryIncorrectException(String message) {
        super(message);
    }
	
}
