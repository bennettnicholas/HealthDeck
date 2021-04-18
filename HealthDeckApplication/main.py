# importing pygame
import pygame
import sys
import json
import requests

from pymongo import MongoClient
client = MongoClient("mongodb+srv://hackathon:hockeymanhockeyman@cluster0.mwfxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

url = 'https://us-central1-aiot-fit-xlab.cloudfunctions.net/healthdecklastreading'



#!/usr/bin/env python
# -*- coding: utf-8 -*-

pygame.init()

db = client["mycgmic"]
col = db["entries"]
# setting window size
screen = pygame.display.set_mode((0, 0), pygame.FULLSCREEN)
  
# setting title to the window
pygame.display.set_caption("Health Deck")

# fill the window with black color
screen.fill((0, 0, 0))

# white color
color = (255,255,255)
color_light = (255,255,255)
color_dark = (100,100,100)
white = (255, 255, 255)
green = (0, 255, 0)
red = (255, 0, 0)
blue = (0, 0, 255)
black = (0,0,0)
yellow = (255,255,0)
indicatorColor = green
# stores the width of the
# screen into a variable
width = screen.get_width()


# stores the height of the
# screen into a variable
height = screen.get_height()

# defining a font
smallfont = pygame.font.SysFont('Corbel',35)
  
# rendering a text written in
# this font
text = smallfont.render('quit' , True , black)

#for quit
font = pygame.font.Font('freesansbold.ttf', 32)
textRect = text.get_rect()
textRect.center = (40, 40)

currentBG = smallfont.render('Current Blood Sugar' , True , white)
currentPulse = smallfont.render('Current Pulse' , True , white)
currentOxy = smallfont.render('Current Blood Oxygen Levels' , True , white)
currentTemp = smallfont.render('Current Body Temperature' , True , white)

currentBGRect = currentBG.get_rect()
currentBGRect.center = (width // 4 + 75, height //4 -20)
screen.blit(currentBG, currentBGRect)

currentPulseRect = currentPulse.get_rect()
currentPulseRect.center = (width // 2 + 75, height //4 - 20)
screen.blit(currentPulse, currentPulseRect)

currentOxyRect = currentOxy.get_rect()
currentOxyRect.center = (width // 2 + 75, height //2 - 20)
screen.blit(currentOxy, currentOxyRect)

currentTempRect = currentTemp.get_rect()
currentTempRect.center = (width // 4 + 75, height //2- 20)
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
                
    pygame.draw.rect(screen,color_dark,[0,0,80,80])

    #Grabbing Other Stats
    response = requests.post(url, data={})
    jsonResponse = json.loads(response.text)
    pulse = jsonResponse['pulse']
    oxygen = jsonResponse['oxygen']
    temperature = jsonResponse['temperature']

    text_pulse = font.render(str(pulse), True, black, blue)
    pygame.draw.rect(screen,white,[width/2,height/4,80,80])
    text_oxy = font.render(str(oxygen), True, black, blue)
    pygame.draw.rect(screen,white,[width/2,height/2,80,80])
    text_temp = font.render(str(temperature), True, black, blue)
    pygame.draw.rect(screen,white,[width/4,height/2,80,80])

    PulseRect = text_pulse.get_rect()
    PulseRect.center = (width // 2 + 40, height //4 + 40)
    screen.blit(text_pulse, PulseRect)

    OxyRect = text_oxy.get_rect()
    OxyRect.center = (width // 2 + 40, height //2 + 40)
    screen.blit(text_oxy, OxyRect)

    TempRect = text_temp.get_rect()
    TempRect.center = (width // 4 + 40, height //2 + 40)
    screen.blit(text_temp, TempRect)

    #Grabbing Blood Sugare
    x = col.find({}, {"_id": 0, "sgv": 1}).sort([('dateString', -1)])
    arrayDoc = list(x)
    if arrayDoc is None:
        boomer = "N / A"
        indicatorColor = red
    else:
        boomer = arrayDoc[0]['sgv']
        if 80 <= arrayDoc[0]['sgv'] <= 150:
            indicatorColor = green
        if 151 <= arrayDoc[0]['sgv'] <= 299 :
            indicatorColor = yellow
        if 80 >= arrayDoc[0]['sgv'] <= 300:
            indicatorColor = red
    text2 = font.render(str(boomer), True, black, indicatorColor)
    pygame.draw.rect(screen,white,[width/4,height/4,80,80])

    textRect2 = text2.get_rect()
    textRect2.center = (width // 4 + 40, height //4 + 40)
    screen.blit(text2, textRect2)

    # superimposing the text onto our button
    screen.blit(text , textRect)
    
    # updates the frames of the game
    pygame.display.update()

# exiting the main window
pygame.quit()