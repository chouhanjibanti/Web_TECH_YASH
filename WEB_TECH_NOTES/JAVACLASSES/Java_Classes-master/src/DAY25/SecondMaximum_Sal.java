package DAY25;

public class SecondMaximum_Sal implements Comparable<SecondMaximum_Sal>{

	int id;
	String name;
	double sal;
	public SecondMaximum_Sal(int id, String name, double sal) {
		super();
		this.id = id;
		this.name = name;
		this.sal = sal;
	}
	@Override
	public String toString() {
		return "SecondMaximum_Sal [id=" + id + ", name=" + name + ", sal=" + sal + "]";
	}
	@Override
	public int compareTo(SecondMaximum_Sal o) {
		if(this.sal > o.sal) {return -1;}
		else if(this.sal < o.sal) {return 1;}
		return 0;
	}
	
	
}
