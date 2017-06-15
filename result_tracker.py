from flask import Flask, render_template
import urllib2
from lxml import html
app = Flask(__name__)
import sys  

reload(sys)  
sys.setdefaultencoding('utf8')
@app.route('/')
def hello_name():
   url = "http://www.gtu.ac.in/result.aspx"
   html_content = str(urllib2.urlopen(url).read())
   return render_template('result_tracker.html', html_content = html_content)

if __name__ == '__main__':
   app.run(debug = True)