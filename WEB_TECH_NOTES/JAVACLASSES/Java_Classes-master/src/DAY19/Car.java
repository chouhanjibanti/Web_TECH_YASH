package DAY19;

import java.util.Objects;

public class Car {

	String bN;
	double tS;
	double price;
	
	public Car(String bN, double tS, double price) {
		super();
		this.bN = bN;
		this.tS = tS;
		this.price = price;
	}
	
	public void drive(){
		System.out.println("zeeeeew.....");
	}

	@Override
	public String toString() {
		return "Car [bN=" + bN + ", tS=" + tS + ", price=" + price + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(bN, price, tS);
	}

	@Override
	public boolean equals(Object obj) {
        Car temp =  ((Car)obj);
        return this.bN == temp.bN && this.tS == temp.tS && this.price == temp.price;
	}
}
