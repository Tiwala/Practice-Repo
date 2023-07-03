public class Hero extends Person {
    String power;

    // When creating a subclass constructor, you have to call on the superclass and pass its prior parameters
    Hero(String name, int age, String power) {
        super(name, age);
        this.power = power;
    }

    public String toString() {
        return super.toString() + "\n" + this.power;
    }
}
