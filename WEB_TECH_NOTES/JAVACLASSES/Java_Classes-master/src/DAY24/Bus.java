package DAY24;

public class Bus implements Comparable<Bus> {

	// attributes
	String bN;
	int nOS;
	
	// initialization
	public Bus(String bN, int nOS) {
		super();
		this.bN = bN;
		this.nOS = nOS;
	}

	// toString
	@Override
	public String toString() {
		return "Bus [bN=" + bN + ", nOS=" + nOS + "]";
	}

	// sort the collection object based on the brand name.
	@Override
	public int compareTo(Bus o) {
		return this.bN.compareTo(o.bN);
	}
	
	// sort the collection object based on the nOS.
//	@Override
//	public int compareTo(Bus o) {
//		if(this.nOS>o.nOS) {return 1;}
//		else if(this.nOS<o.nOS) {return -1;}
//		{return 0;}
//	}
}
