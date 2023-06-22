class HelloWorld {
    public static void main(String[] args) {
        User user = new User("Gerard San Juan", "1994-08-16");

        Book norwegianWood = new Book("Norwegian Wood", "Haruki Murakami", 696);

        AudioBook theDandelionGirl = new AudioBook("The Dandelion Girl", "Donald Young", 3000);

        Ebook jeeves = new Ebook("Carry On Jeeves", "P.G. Wodehouse", 280, "PDF");

        // user.borrow(norwegianWood);

        // System.out.printf("%s was born back in %s and he is now %d years old. \n", user.getName(), user.getBirthday(), user.age());

        // System.out.printf("%s has borrowed these books: %s", user.getName(), user.borrowedBooks());

        System.out.println(theDandelionGirl.toString());

        System.out.println(jeeves.toString());
    }
}
