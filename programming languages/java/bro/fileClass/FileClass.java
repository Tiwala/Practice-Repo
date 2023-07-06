import java.io.File;

public class FileClass {
    public static void main(String[] args) {
        // file = an abstract representation of file and directory pathnames

        // local path
        File file = new File("secret_message.txt");

        // direct path
        // File file = new File("/Users/gerardsanjuan/Downloads/secret_message.txt");

        if(file.exists()) {
            System.out.println("That file exists :O");
            System.out.println(file.getPath());
            // Gets the location where it is in the computer
            System.out.println(file.getAbsolutePath());
            // boolean to check if file
            System.out.println(file.isFile());
            // deletes the file; requires a refresh to update
            // file.delete();
            
        } else {
            System.out.println("That file doesn't exist :(");
        }
    }
}