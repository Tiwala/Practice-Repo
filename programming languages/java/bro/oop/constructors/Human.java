public class Human {


    public String name;
    public int age;
    public double weight;

    // constructor
    Human(String name, int age, double weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    void eat() {
        System.out.println(this.name + " is eating");
        this.weight += 5;
    }

    void drink () {
        System.out.println(this.name + " is drinking");
    }

}
