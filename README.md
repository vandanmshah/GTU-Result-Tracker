# GTU-Result-Tracker
This is a small project which detects new result is arrived or not (This works only for GTU results).


I wanted to get notified whenever new result arrived like B.E., MCA, BCA, etc is arrive. So i made this small webapp which notifies  when ever new result is decelared of any branch on GTU website.

First of all it runs the 'python' file and in python file it will get the html content of result page then it will send thoes html content to our webpage. To send data i have used flask and to get html content i have used urllib2.

Now i have used javaScript for more calculation. In javaScript it will detect the result is decelared or not if result is decelared it will notify the user. 
