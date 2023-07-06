# The Fishing Hole

The Fishing Hole is a browser click-based game that allows the user to catch a variety of fish with hand-drawn stying and simple controls. This includes over 20 custom fish with unique reel counts score na images.
The user is given a pond full of dynamically swimming fish that they must click on. Once they successfully click a fish, they will then be given a pop-up of the reeling minigame, where the user must then click in a ring as the ring pulses larger and smaller. If the user clicks when the ring is too large, then the user will not catch the fish! Rarer fish will give the user more points, but will also take more reels to successfully catch. On the left side there will be a display of the 3 rarest fish that the user has caught. The user wins the game when they reach 5000 points, and their score is how long it took them to reach that score. 

<img width="635" alt="fishing game" src="https://github.com/JasonStaubach/Fishing-game/assets/33754025/22af20f6-ba97-465f-976f-48d1f939e207">


This project was made almost entirely in canvas, with layers of canvas on top of each other to create the fish, pond, and ui around it.
## UI explanation 
<img width="116" alt="go fishing" src="https://github.com/JasonStaubach/Fishing-game/assets/33754025/654692f0-2d71-452d-bb73-8ce6f40b74bb">

You can only click once every half second, to prevent users from spamming and losing the reeling minigame before they realize it is open. This display will turn red and say no fishing when you are unable to click.

<img width="140" alt="small circle" src="https://github.com/JasonStaubach/Fishing-game/assets/33754025/f3771252-db8b-4eef-8510-803b98d2dbbc">
<img width="130" alt="big circle" src="https://github.com/JasonStaubach/Fishing-game/assets/33754025/ea1f21e3-80f1-42f4-aeb0-f14a7739ee03">

This is two screenshots of the minigame circle that will show up over the fish once it has been clicked. The user wants to click as the circle is as small as possible to catch the fish

![new fish](https://github.com/JasonStaubach/Fishing-game/assets/33754025/9abf110d-67d2-4e97-ba85-ae0de59516e1)

This is the pop-up that will show up whenever you successfully catch a fish

## Wireframe

<img width="568" alt="Screenshot 2023-06-28 175630" src="https://github.com/JasonStaubach/Fishing-game/assets/33754025/b3cf8df4-d186-4bec-b02d-7e194e5b77cc">

## Code Snippets

### Minigame Click Handling and Curried Score Function

<img width="334" alt="minigame-click-handling-and-curried-function" src="https://github.com/JasonStaubach/Fishing-game/assets/33754025/53a36ff2-ab94-41fe-b1fb-6e396cc43a4d">

Custom click handling checks to make sure that the clicks are within the bounds of the minigame, and then upon the last click, immediately remove the minigame from game. Each click calls upon a curried score function that keeps track of the clicks and stores them for the final result.

### Fish Movement and Pond Rendering Loop

<img width="206" alt="pond-outline" src="https://github.com/JasonStaubach/Fishing-game/assets/33754025/5138973a-225b-457c-a157-86406698e2ab">

This loop renders the pond outline, the fish, and the displays for the timer and whether the fish are clickable at this moment. It makes sure that the pond and timer are always rendered in black script, but if the fish are not clickable, the fish will be rendered with a red outline as well as the no fishing display to show they are unselectable.

### Custom Pond Outline

<img width="241" alt="custom-pond" src="https://github.com/JasonStaubach/Fishing-game/assets/33754025/95cbb155-4fc7-46d3-9860-e34d4c104fae">

This is a custom path2D object made in canvas for the pond, it was used for collision detection and custom shapes.

### DRY button creation

<img width="275" alt="header dry function" src="https://github.com/JasonStaubach/Fishing-game/assets/33754025/c18181f2-cb43-4b9e-b1e4-4fa648d76d6f">

This is a simple bit of code called to make a header button, but is one of several times in this game where designing DRY functions to make things cleaner make for easier readability and better understanding of what the code is doing

## Implementation Timeline

Friday Afternoon & Weekend - Set up project, including getting web pack up and running. Build canvas for gameplay. learned canvas API by setting up pond. Build classes for fish, pond, game, index, score

Monday Create background for screen, and added click functioinality to catch fish upon click. Started to create dynamic movement for fish, created score counter and effects

Tuesday Add in many more types of fish, make better fish movement, refactor in score class for cleaner code. Add in buttons for links to my pages and sound, create header and work on styling

Wendesday Add in top 3 fish for right corner, add in fish pop-up when you catch fish, and notification when you lose a fish. Rebalance the click timer and add in the reel minigame to really lock down an improvedd gameplay loop.

Thursday Add instructions page and completion scrreen and deploy to GitHub pages.


