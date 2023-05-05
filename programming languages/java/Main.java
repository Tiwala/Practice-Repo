import java.util.Date;
import java.awt.*;

// Functions

// PascalNamingConvention for Classes
// camelNamingConvention for Methods

// returnType
// main is the entry point to our programs
// whenever a java program is run, main function is called and executed
// in Java, all classes and methods have an "access modifier"
// keyword that determines whether other classes and methods can access these classes and methods
public class Main {
    // function inside class is a method
    public static void main(String[] args) {
        // // The compiler sees it by default as an integer, so you have to put an L at the end to override it and remove the error
        // // _ stand in for commas to make them readable
        // long viewsCount = 3_123_456_789L;
        // // by default, decimals are doubles, so same applies to make it a float
        // float price = 10.99F;
        // // single quotes for single characters, double quotes for strings
        // char letter = 'a';
        // boolean isEligible = true;
        // // automatically imports the package you called on
        // // new creates an instance of Date class
        // // objects are instances of classes
        // Date now = new Date();
        // System.out.println(now);

        // Primitives don't change value when the reference variable changes
        // Reference types change when referenced variable changes
        Point point1 = new Point(1,1);
        Point point2 = point1;
    }
}

// Primitive for storing simple values
// When calling primitives, memory is automatically allocated by java runtime environment
// byte Bytes: 1 Range:[-128, 127]
// short Bytes: 2 Range:[-32k, 32k]
// int Bytes: 4 Range:[-2B, 2B]
// long Bytes: 8
// float Bytes: 4 decimals
// double Bytes: 8
// char Bytes: 2 (A, B, C)
// boolean Bytes: 1

// Reference for storing complex objects
// Reference types you always gotta allocate memory
// date
// mail message