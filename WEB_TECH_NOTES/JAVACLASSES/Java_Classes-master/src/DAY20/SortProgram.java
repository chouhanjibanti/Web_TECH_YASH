// Bubble sort
package DAY20;

public class SortProgram {

	public static void main(String[] args) {
		int[] a = {4,1,6,3,2}; // {1,2,3,4,6}
	
		for(int i=0;i<a.length-1;i++) {
			for(int j=1;j<a.length-i;j++) {
				if(a[j-1]>a[j]) {// a[0]>a[1]
					int temp = a[j-1];
					a[j-1] = a[j];
					a[j] = temp;
				}
			}
		}
		
		for(int a1:a) {
			System.out.println(a1);
		}
	}
	
	
	
}
