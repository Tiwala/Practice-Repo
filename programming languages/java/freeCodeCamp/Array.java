// Allows you to deal with java arrays
import java.util.Arrays;

public class Array {
    public static void main(String[] args) {
        // creating an array with a length of 5
        // char vowels[] = new char[5];
        // You can also define your array in one line like this
        // char vowels[] = {'e', 'u', 'a', 'i', 'o'};


        // vowels[0] = 'a';
        // vowels[1] = 'e';
        // vowels[2] = 'i';
        // vowels[3] = 'o';
        // vowels[4] = 'u';
        // vowels[5] = 'x' // This will create an error, as it is out of bounds for the declared array length
        // vowels[2] = 'x';

        // .instanceof() returns true if something is an instance of something

        // By importing Arrays, and stringifies it, shows it in array form
        // System.out.println(Arrays.toString(vowels));
        // System.out.println(vowels.length); // .length is a property here, if you do it on the string, it becomes a method

        int startingIndex = 1;
        int endingIndex = 4; // keep in mind that ending index is not included

        // Arrays.sort(vowels, startingIndex, endingIndex);

        // char key = 'o';

        // Arrays.sort(vowels);

        // int foundItemIndex = Arrays.binarySearch(vowels, key); // looks in the entire vowels array
        // int foundItemIndex = Arrays.binarySearch(vowels, startingIndex, endingIndex, key); // searches within the specific span only

        // Arrays.fill(vowels, 'x'); // fills the entire array with x
        // Arrays.fill(vowels, startingIndex, endingIndex, 'x'); // fills indices with x

        // System.out.println(Arrays.toString(vowels));
        // System.out.println(foundItemIndex);

        // This shit only prints out the array contents in a string format
        // System.out.println(vowels);

        int numbers[] = {1, 2, 3, 4, 5};

        // int copyOfNumbers[] = numbers; // doesn't exactly create a copy, points to the original, changes as well if original is modified
        int copyOfNumbers[] = Arrays.copyOf(numbers, numbers.length); // actually creates a copy that doesn't change with the original, 2nd value is the new length and gets truncated with 0s if longer than original
        // int copyOfNumbers[] = Arrays.copyOfRange(numbers, startingIndex, endingIndex); // same as above but limited to the range specified

        // Arrays.fill(numbers, 2); // unfortunately also changes the copy; arrays in Java are reference types

        System.out.println(Arrays.toString(numbers));
        System.out.println(Arrays.toString(copyOfNumbers));
        System.out.println(numbers == copyOfNumbers); // shows that these 2 are identical but different
        System.out.println(Arrays.equals(numbers, copyOfNumbers)); // shows that they are equal
    }
}
