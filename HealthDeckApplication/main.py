# importing pygame
import pygame
import sys
import json
from twilio.rest import Client
import requests

from pymongo import MongoClient
client = MongoClient("mongodb+srv://hackathon:hockeymanhockeyman@cluster0.mwfxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

url = 'https://us-central1-aiot-fit-xlab.cloudfunctions.net/healthdecklastreading'

account_sid = 'ACb06771b5806b577fb291a49b65da417c'
auth_token = 'a38fa335dd14a32873dae977c39a08c8'
clientSMS = Client(account_sid, auth_token)
sendMessage = 0

#!/usr/bin/env python
# -*- coding: utf-8 -*-

bg = pygame.image.load("logo.PNG")


#colors
color = (255,255,255)
color_light = (255,255,255)
color_dark = (100,100,100)
white = (255, 255, 255)
green = (0, 255, 0)
red = (255, 0, 0)
blue = (0, 0, 255)
black = (0,0,0)
yellow = (255,255,0)
teal = (0,200,200)
indicatorColor = green

pygame.init()


db = client["mycgmic"]
col = db["entries"]
# setting window size
screen = pygame.display.set_mode((0, 0), pygame.FULLSCREEN)
  
# setting title to the window
pygame.display.set_caption("Health Deck")

# fill the window with black color
screen.fill(teal)


# stores the width of the
# screen into a variable
width = screen.get_width()


# stores the height of the
# screen into a variable
height = screen.get_height()

# defining a font
smallfont = pygame.font.SysFont('cambriacambriamath',35)
  
# rendering a text written in
# this font
font = pygame.font.SysFont('cambriacambriamath', 32)
text = font.render('X' , True , black)

#for quit
bg = pygame.transform.scale(bg, (width, height))
rect5 = bg.get_rect()
rect5.center = (width//2, height//2)
screen.blit(bg, rect5)

textRect = text.get_rect()
textRect.center = (40, 40)

currentBG = smallfont.render('Blood Sugar' , True , white)
currentPulse = smallfont.render('Pulse' , True , white)
currentOxy = smallfont.render('Blood Oxygen Levels' , True , white)
currentTemp = smallfont.render('Body Temperature' , True , white)

currentBGRect = currentBG.get_rect()
currentBGRect.center = (width // 3 + 40, height //9 -20)
screen.blit(currentBG, currentBGRect)

currentPulseRect = currentPulse.get_rect()
currentPulseRect.center = (2* width //3 + 40, height //9 - 20)
screen.blit(currentPulse, currentPulseRect)

currentOxyRect = currentOxy.get_rect()
currentOxyRect.center = (2* width // 3 + 40, 7 * height //9 - 20)
screen.blit(currentOxy, currentOxyRect)

currentTempRect = currentTemp.get_rect()
currentTempRect.center = (width // 3 + 40, 7* height //9- 20)
screen.blit(currentTemp, currentTempRect)



while True:
      
    for ev in pygame.event.get():
        mouse = pygame.mouse.get_pos()  
        if ev.type == pygame.QUIT:
            pygame.quit()
              
        #checks if a mouse is clicked
        if ev.type == pygame.MOUSEBUTTONDOWN:
              
            #if the mouse is clicked on the
            # button the game is terminated
            if 0 <= mouse[0] <= 80 and 0 <= mouse[1] <= 80:
                pygame.quit()
                
    pygame.draw.rect(screen,red,[0,0,80,80])

    

    #Grabbing Other Stats
    response = requests.post(url, data={})
    jsonResponse = json.loads(response.text)
    pulse = jsonResponse['pulse']
    oxygen = jsonResponse['oxygen']
    temperature = jsonResponse['temperature']

    text_pulse = font.render(str(pulse), True, black)
    pygame.draw.rect(screen,white,[2*width/3,height/9,80,80])
    text_oxy = font.render(str(oxygen), True, black)
    pygame.draw.rect(screen,white,[2*width/3,7*height/9,80,80])
    text_temp = font.render(str(temperature), True, black)
    pygame.draw.rect(screen,white,[width/3,7*height/9,80,80])

    PulseRect = text_pulse.get_rect()
    PulseRect.center = (2*width // 3 + 40, height //9 + 40)
    screen.blit(text_pulse, PulseRect)

    OxyRect = text_oxy.get_rect()
    OxyRect.center = (2*width // 3 + 40, 7*height //9 + 40)
    screen.blit(text_oxy, OxyRect)

    TempRect = text_temp.get_rect()
    TempRect.center = (width // 3 + 40, 7*height //9 + 40)
    screen.blit(text_temp, TempRect)

    

    #Grabbing Blood Sugare
    x = col.find({}, {"_id": 0, "sgv": 1}).sort([('dateString', -1)])
    arrayDoc = list(x)
    if arrayDoc is None:
        boomer = "N / A"
        indicatorColor = red
    else:
        boomer = arrayDoc[0]['sgv']
        if 80 <= arrayDoc[0]['sgv'] <= 160:
            if sendMessage == 0:
                sendMessage = 1
                #message = clientSMS.messages.create(
                #     body="ATTN: Our user has select your number as their emergency contact. The user is having a low blood sugar",
                #     from_='+17133389155',
                #     to='+19524521574'
                #)
                #print('SENT MESSAGE')
            indicatorColor = green
        if 151 <= arrayDoc[0]['sgv'] <= 299 :
            indicatorColor = yellow
        if 80 >= arrayDoc[0]['sgv'] <= 300:
            indicatorColor = red
    text2 = font.render(str(boomer), True, black)
    pygame.draw.rect(screen,indicatorColor,[width/3,height/9,80,80])

    textRect2 = text2.get_rect()
    textRect2.center = (width // 3 + 40, height //9 + 40)
    screen.blit(text2, textRect2)

    # superimposing the text onto our button
    screen.blit(text , textRect)
    
    # updates the frames of the game
    pygame.display.update()

# exiting the main window
pygame.quit()