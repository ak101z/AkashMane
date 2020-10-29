
### WebCrawler

- Webcrawler is webapp developed using java servlet,AJAX.Javascript,JQUERY,HTML,CSS Aand tomcat as a server
- Compatible with all major browsers (IE8+);
- It extracts Links from the web page which user enters in the tecxtbox.check status of those links and display information of link name and status code in tabular format.

# Important files from project
index.html :- HTML file contains the view logic of the project

-------------
index.js:- It contains javascript,AJAX code which is linked with index.html

-------------
Crawler.java : - Crawler Java contains Implementation of the sevlet POST method
which receives data from html page.

-------------
CrawlerService.java : - Service contains main logic of the webapp which is crawling.web page,extracting all the links from the webpage and hitting those links and returning status from them

###How to run:
 Deploy war file on tomcat server on port 8080(tomcat running port usually 8080) and go to http://localhost:8080/webCrawler/
 
 ###How to run:
Open Project and execute the following commands
mvn clean 
mvn install 
After that creat war file using either cmd or IDE

###Sequence Diagram
                    
```seq
index.html->Crawler: link 
Crawler-->Website: Request for webpage 
Website->>Crawler: return website source code
Note right of Crawler: Crawler Extratcts all the url
Crawler->>website1: Send request
Crawler->>website2: Send request
website1->>Crawler: receives  response
website2->>Crawler: receives  response
```

###End
