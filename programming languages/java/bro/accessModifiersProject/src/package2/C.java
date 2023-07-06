package package2;
import package1.*;

public class C {
    // Can't be seen by stuff in package 1 if using the default access modifier
    String defaultMessage = "This is the default";

    // Allows the variable to be called anywhere in the project
    public String publicMessage = "This is public";

    // Can be accessed from a different package as long as class is a subclass of contained variable
    protected String protectedMessage = "This is protected";

    // Can only access within its class
    private String privateMessage = "This is private";

}
