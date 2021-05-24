import scrapy

class QuizzSpider(scrapy.Spider):
    name = 'quizz'
    start_urls = ['https://www.triviaquestionquiz.com/ecology-trivia-questions/']

    def parse(self, response):
        for block in response.css('div.wq-question'):
            yield{
                'question': block.css('h4::text').get(),
                'answers': block.css('label.wq_answerTxtCtr::text').getall(),
                'correct':'',
            }