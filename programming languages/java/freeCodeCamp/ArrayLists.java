import java.util.ArrayList;
import java.util.Comparator;

public class ArrayLists {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        // int double float boolean > all primitive types
        // can make them into reference types using the wrapper classes
        // Integer is a wrapper class for primitive int, is the reference type form of int
        // also have Double, Float, Boolean, etc
        // When making an ArrayList, you have to use the wrapper class and not the primitive

        numbers.add(3);
        numbers.add(4);
        numbers.add(2);
        numbers.add(5);
        numbers.add(1);

        // numbers.remove(2); // removes the element at stated index
        // numbers.remove(Integer.valueOf(4)); // removes the integer with the stated value, regardless of index
        // numbers.clear(); // removes all items from ArrayList
        // numbers.set(0,  Integer.valueOf(69)); // to replace elements within an arrayList
        // numbers.sort(Comparator.naturalOrder()); // sorts ArrayList in its natural order
        // numbers.sort(Comparator.reverseOrder()); // sorts ArrayList to reverse order
        // System.out.println(numbers.size()); // to print out length/size of ArrayList
        // System.out.println(numbers.contains(Integer.valueOf(1))); // checks if ArrayList has specified value
        // System.out.println(numbers.isEmpty()); // boolean check if ArrayList is empty
        // System.out.println(numbers.get(0)); // to print out single value

        System.out.println("before: " + numbers.toString());

        // forEach loop, for ArrayLists
        numbers.forEach(number -> {
            numbers.set(numbers.indexOf(number), number * 2); // doubles the value of each element
            System.out.println(number * 2);
            
        });
        
        System.out.println("after: " + numbers.toString()); // to print out entire ArrayList
    }
}