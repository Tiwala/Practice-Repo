public class DatWrap {
    public static void main(String[] args) {
        // wrapper class = provides a way to use primitive data types as reference data types
        // one major advantage reference data types have is they contain useful methods
        // can be used with collections (ex.ArrayList)
        // reference data types take longer than primitive data types

        // primitive    // wrapper
        // boolean      // Boolean
        // char         // Character
        // double       // Double

        // fyi, strings are ALREADY reference data types, so they're not on the list

        // autoboxing = the automatic conversion that the Java compiler makes between the primitive types and their corresponding object wrapper classes
        // unboxing = the reverse of autoboxing. Automatic conversion of wrapper class to primitive

        // autoboxing
        Boolean a = true;
        Character b = '@';
        Integer c = 123;
        Double d = 3.14;
        String e = "Gerard";

        // unboxing
        // able to treat the reference types as primitives
        if (b == '@') {
            System.out.println("This is true");
        }

        
    }
}
