public class WorkSchedule {
    public static void main(String[] args) {
        
        //See Learn the Part for the complete instructions (link in resources folder of Udemy video).  

        int day = 6;   //3rd day of the week...
        boolean holiday = true;
         
        // IF - ELSE IF - ELSE HERE!
    
        if ((day >= 1) && (day < 6)) {
            holiday = false;
        } else {
            holiday = true;
        }
        
        if (holiday) {
            System.out.println("Woohoo! No work");
        } else {
            System.out.println("Wake up at 7:00 :(");
        }
        }

    }
