# importing pygame
import pygame
import sys
import json

from pymongo import MongoClient
client = MongoClient("mongodb+srv://hackathon:hockeymanhockeyman@cluster0.mwfxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

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

font = pygame.font.Font('freesansbold.ttf', 32)
textRect = text.get_rect()
textRect.center = (width // 2 + 75, height // 4 + 75)




while True:
      
    for ev in pygame.event.get():
          
        if ev.type == pygame.QUIT:
            pygame.quit()
              
        #checks if a mouse is clicked
        if ev.type == pygame.MOUSEBUTTONDOWN:
              
            #if the mouse is clicked on the
            # button the game is terminated
            if width/2 <= mouse[0] <= width/2+150 and height/4 <= mouse[1] <= height/4+150:
                pygame.quit()
    
    # stores the (x,y) coordinates into
    # the variable as a tuple
    mouse = pygame.mouse.get_pos()
      
    # if mouse is hovered on a button it
    # changes to lighter shade 
    if width/2 <= mouse[0] <= width/2+150 and height/4 <= mouse[1] <= height/4+150:
        pygame.draw.rect(screen,red,[width/2,height/4,150,150])
          
    else:
        pygame.draw.rect(screen,color_dark,[width/2,height/4,150,150])

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
    pygame.draw.rect(screen,white,[width/4,height/4,150,150])

    textRect2 = text2.get_rect()
    textRect2.center = (width // 4 + 75, height //4 + 75)
    # superimposing the text onto our button
    screen.blit(text , textRect)
    screen.blit(text2, textRect2)
    # updates the frames of the game
    pygame.display.update()

# exiting the main window
pygame.quit()