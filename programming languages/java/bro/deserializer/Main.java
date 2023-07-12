import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        // Steps to Deserialize
        // 1. Declare your object (DON'T INSTANTIATE)
        // 2. Your class should implement Serializable intercace
        // 3. add import java.io.Serializable
        // 4. FileInputStream fileIn = new FileINputStream(file path);
        // 5. ObjectInputStream in = new OBjectInputStream(fileIn);
        // 6. objectNam = (Class) in.readObject();
        // 7. in.close(); fileIn.close();

        // Important notes
        // 1. children classes of a parent class that implements Serializable will do so as well
        // 2. static fields are not serialized (they belong to the class, not an individual object)
        // 3. the class's definition ("class file") itself is not recorded, cast it as the object type
        // 4. fields declared as "transient" aren't serialized, they're ignored
        // 5. serialVersionUID is a unique version ID

        // serialVersionUID = is a unique ID that functions like a version # 
        // verifies that the sender and receiver of a serialized object, haveloaded classes for that object that match
        // ensures object will be compatible between machines
        // number must match, otherwise this will cause a InvalidClassException
        // A SerialVersionUID will be calculated based on class properties, members, etc.
        // A serializable class can declare its own serialVersionUID explicitly (recommended)
        // If you try to deserialize a serialized thingy that has a different SVUID, if will error
        // You can manually declare a SVUID

        User user = null;

        FileInputStream fileIn = new FileInputStream("/Users/gerardsanjuan/Documents/Coding/Repos/Practice Repo/programming languages/java/bro/serialization/UserInfo.ser");
        ObjectInputStream in = new ObjectInputStream(fileIn);
        user = (User) in.readObject();
        in.close();
        fileIn.close();

        System.out.println(user.name);
        System.out.println(user.password);
        user.sayHello();

        long serialVersionUID = ObjectStreamClass.lookup(user.getClass()).getSerialVersionUID();
        System.out.println(serialVersionUID);
    }
}