public class Ebook extends Book {
    private String format;
    
    Ebook(String title, String author, int pageCount, String format) {
        // refers to the parent class of the current class
        super(title, author, pageCount);

        this.format = format;
    }
}
