import json, requests
from bs4 import BeautifulSoup
import time

def get_count():
    url = requests.get("http://localhost:8070/")

    data = url.json()
    return data[0]
""" text = url.text

data = json.loads(text) """

dataTest = [
    {
 "frame_id":49, 
 "objects": [ 
  {"class_id":0, "name":"cigaret_butt", "relative_coordinates":{"center_x":0.544921, "center_y":0.629813, "width":0.424823, "height":0.290844}, "confidence":0.886806}
 ] 
}, 
{
 "frame_id":50, 
 "objects": [ 
  {"class_id":0, "name":"cigaret_butt", "relative_coordinates":{"center_x":0.529655, "center_y":0.720076, "width":0.444907, "height":0.312573}, "confidence":0.984720}
 ] 
}, 
{
 "frame_id":51, 
 "objects": [ 
  {"class_id":0, "name":"cigaret_butt", "relative_coordinates":{"center_x":0.547621, "center_y":0.828847, "width":0.434293, "height":0.319340}, "confidence":0.885697}
 ] 
}, 
{
 "frame_id":52, 
 "objects": [ 
  {"class_id":0, "name":"cigaret_butt", "relative_coordinates":{"center_x":0.562606, "center_y":0.902022, "width":0.442420, "height":0.173791}, "confidence":0.985215}
 ] 
}, 
{
 "frame_id":53, 
 "objects": [ 
  {"class_id":0, "name":"cigaret_butt", "relative_coordinates":{"center_x":0.565449, "center_y":0.969735, "width":0.431276, "height":0.059623}, "confidence":0.983080}
 ] 
}, 
{
 "frame_id":54, 
 "objects": [ 

 ] 
}, 
{
 "frame_id":55, 
 "objects": [ 

 ] 
}, 
]

def getInputAi():
    last = len(dataTest)

    user = dataTest[last -1]

    if not user['objects']:
        return False
    else :
        confidence = user['objects'][0]['confidence']

        if (confidence > 0.9) :
            return True
        else :
            return False  

a = getInputAi()
print(a)
   
while True :
    print(get_count())
    time.sleep(8)