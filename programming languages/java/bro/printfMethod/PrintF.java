public class PrintF {
    public static void main(String[] args) {
        // printf() = an optional method to control, format, and display text to the console window
        // two arguments = ("format string %d", 123)
        // % [flags] [precision] [width] [conversion-character]

        boolean myBoolean = true;
        char myChar = '@';
        String myString = "Bro";
        int myInt = 50;
        double myDouble = 1000;

        // System.out.printf("This is a format string %d", 123);
        // System.out.printf("%b", myBoolean);
        // System.out.printf("%c", myChar);
        // System.out.printf("%s", myString);
        // // decimal
        // System.out.printf("%d", myInt);
        // // floating point/double
        // System.out.printf("%f", myDouble);

        // [width]
        // minimum number of characters to be written as output
        // includes the length of the string; distance in the example from the end of myString to the space after Hello is 10
        // System.out.printf("Hello %10s", myString);

        // [precision]
        // sets number of digits of precision when outputting floating-point values
        // limits the digits after the decimal point

        // System.out.printf("You have this much money %.2f", myDouble);

        // [flags]
        // adds an effect to output based on the flag added to format specifier
        // - : left-justify
        // + : output a plus ( + ) or minus ( - ) sign for a numeric value
        // 0 : numeric values are zero-padded
        // , : comma grouping separator if numbers > 1000

        System.out.printf("You have this much money %,f", myDouble);
        
    }
}
