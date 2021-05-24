# DI_Hackaton_May_2021
# Theme: Aggregate quizzes from the Web using Scrapy

The idea is to assemble from many places quizzes about a particular theme, for example ecology.

The process to collect a given quizz from a website can be broken down into three steps :

### 1. Analyze the structure of the targeted web pages and set-up a webcrawler (or "spider", in Scrapy jargon) to extract the right data.

The preparatory stage is rather "manual" as it is difficult for the spider to automatically identify the right data. If done correctly, it is a piece of cake for the spider to absorb the data.

Note that an etiquette must be followed as site owners do not appreciate that their content be ripped savagely and/or the performance of their servers be impacted by heavy bots.

The outcome of this step is, concretely, a json file representing parts of the visited web pages.

### 2. Load the collected data into a database.
The json file is fed into an SQL database. For quizzes, the objects are : quizz, question, answer.

### 3. Use the collected data to feed a web site.
So we end up with a web site with many quizzes dedicated to a theme (as opposed to a quizz site stretching over many themes).


As these steps are iterated over different source sites, the first step will always require additional work, while step two and three should require few modifications.