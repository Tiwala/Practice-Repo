public class SuperKeyword {
    public static void main(String[] args) {
        // super = keyword refers to the superclass (parent) of an object
        // very similar to the "this" keyword

        Hero hero1 = new Hero("Batman", 42, "$$$");
        Hero hero2 = new Hero("Superman", 43, "everything");


        // System.out.println(hero1.name + hero1.age + hero1.power);
        System.out.println(hero2.toString());
    }
}