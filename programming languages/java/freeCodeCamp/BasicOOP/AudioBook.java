public class AudioBook extends Book{
    private int runTime;
    
    AudioBook(String title, String author, int runTime) {
        // refers to the parent class of the current class
        super(title, author, 0);

        this.runTime = runTime;
    }
}
