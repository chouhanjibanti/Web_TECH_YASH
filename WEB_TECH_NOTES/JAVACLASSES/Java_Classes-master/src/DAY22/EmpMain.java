package DAY22;

public class EmpMain {

    public static void main(String[] args) {

//        try {
//            // creating an employee with invalid salary
//            Emp e1 = new Emp("Rohit", 9000, "Developer");
//            e1.display();
//
//        } catch (SalaryIncorrectException e) {
//            System.out.println("Exception Caught: " + e.getMessage());
//        }

        System.out.println("----------------------------");

        // Create valid employee
        Emp e2 = new Emp("Ankit", 50000, "Manager");
        e2.display();

        // Reinitialize employee details with new data
//        e2.setSal(18000);
//        e2.display();

        // Reinitialize with invalid salary
        try {
            e2.setSal(1100);
        } catch (SalaryIncorrectException e) {
            System.out.println("Exception while reinitializing: " + e.getMessage());
        }
    }
}
