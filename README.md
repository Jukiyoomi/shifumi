# Shifumi - React

---

## Navigation

-   [Explanation](#explanation)
-   [Design](#design)
-   [Technologies and Tools Used](#technologies-and-tools-used)
-   [Plan](#plan)
-   [Progress](#progress)

## Explanation

**Shifumi** (in english **Rock - Paper - Scissor**) is a famous game which takes place between 2 players. The aim of the game is to "beat" your opponent by choosing the sign that win against your opponent's.
According to its english name, there are 3 signs that have a "winning-losing" relation which each other.

[Click here to play a game and lose against my powerful program !](https://www.figma.com/file/uITqUspFto082IRqNgAo13/Shifumi-React?node-id=0%3A1)

## Design

[Link to see the whole design](https://www.figma.com/file/uITqUspFto082IRqNgAo13/Shifumi-React?node-id=0%3A1)

![Design of the app](./src/public/Default.png)

## Technologies and Tools Used

-   **_Figma_** : design
-   **_Vscode_** : Code Editor
-   **_[ViteJS](https://vitejs.dev/)_** : frontend build tool
-   **_React_** : JS Library for UI
-   **_TailwindCSS_** : CSS framework
-   **_Git_** : Version control system

## Plan

I think this project is quite big to have many components, logic and steps to achieve it. My goal is to build it using git as much as possible, by creating a branch for each new feature, merging it into the _main_ branch.
Here are several steps I found relevant to follow in order to achieve this project :

1. [x] Create the base react project using ViteJS
2. [x] Install Tailwind
3. [x] Import fonts, images
4. [x] Create the basic UI with React - Tailwind
5. [x] Create Global Provider for state management
6. [x] Implement the possibility to have several levels
7. [x] Return the computer choice according to the set difficulty and player choice
8. [x] Implement score update
9. [x] Stop the game when the player or the machine reaches 5 points
10. [ ] Implement a cool loading design using `SVG` and `background blurring`
11. [ ] Get actual name of the player and put it instead of 'You'

Down here you can follow my progress on this project.

## Progress

_(These days don't necessarily follow each other, but these are the days when I worked on the project)_

---

### Day 1

-   I just created the React project and created the github repo. Another branch was created in order to install Tailwind.
-   After that, I spent time on the design, trying to make something cool, simple. I always wanted to use Figma or Adobe XD to create a real design, so this project gave me a reason to use them.

---

### Day 2

-   This day was dedicated to create the global state provider. I identified, according to the design, some states that I would need to use, such as the score, the difficulty, the choices of the player and the machine and a `difficultyRatio` set by difficulty and which will be used by the machine to return its choice.

#### What I learned

-   I learned to create a global state provider in React. I heard about Redux which is a library which helps us on state management, but I found it a bit hard to use so I used the React method which consists of using `createContext()`. Then we create a funcitonal component which contains all the states and returns a `Provider` which will include as its children the whole app, so that every component beigin a child of the `Provider` will have access to the state, on the condition that we set all the state values and modifiers as props `value` on the provider.
    This is an awesome discovery because before that, I had to use a local state on the parent, create modifier function and pass them to children, then get the (eventually) modified state on the parent.

---

### Day 3

-   Here I created most of the important components and tried to connect them to the state. Of course, I tried as much as possible to use git to commit my code as I went along. However, it is difficult to remember to commit your work when you are focus on it.

---

### Day 4

-   Today, I was focused on how to set player and machine choice, and the most important, how do I create that feeling of difficulty when the player thinks that the machine predicts everyof his choices. For this feature, I think it is better to use Machine Learning or AI , but for this project, I decided to make the machine decide by 2 ways (to choose between them, I have a variable linked to the difficulty that returns a certain ratio, the higher it is, the more likely it is that the first way would happen) :

    -   The machine looks the player choice and decide to return the winning choice
    -   The machine returns randomly a choice

-   I don't know if it is a good way to proceed, but I did not find another way to do that.
-   At this point of the project, I have a _**Shifumi that works**_ 🎊

---

### Day 5

-   A few days passed since the last time I worked on this project. Today, I fixed some bugs about the `difficultyRatio`, I did not exactly understand how to use it for the game. Also, I saw a bug concerning a `setTimeout` in a `useEffect` triggered by an object. This timeout was activated each time I changed the object, and I change this object very often, from full values to null and vice versa. I understood that problem by using a `console.time()` which was logged many times at once.
    The last step is the loading page using background blurring.

---

### Day 6

-   Months later 😭, I remembered I did not finish this project. Today, I decided to make the loading page of the game. I learned to create custom Tailwind animations (through tailwind.config.js). I decreased a little bit the difficulty ratios for every level because I couldn't win any game against the easiest level.

---

## Review

During this project, I learned a lot of things. The first one was to write a README file. It is the first project where I entirely wrote one. Also, it helped me to understand React better and JS. The difficulty of manipulating so much states at a time was a great challenge for me too.
As an improvement, I could use Redux for the states and maybe use TypeScript which would be better the simple JS.
