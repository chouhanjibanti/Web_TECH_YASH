package DAY20;

public class Bus {

	String bN;
	int nOS;
	
	public Bus(String bN, int nOS) {
		super();
		this.bN = bN;
		this.nOS = nOS;
	}

	@Override
	public String toString() {
		return "Bus [bN=" + bN + ", nOS=" + nOS + "]";
	}
	
}
