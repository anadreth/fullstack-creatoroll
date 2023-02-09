![logo](https://user-images.githubusercontent.com/118491174/217795082-769a525a-b543-41fe-9582-64e350b32fb8.png)

<nav>
  <ul>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#why">Why did I create this?</a></li>
    <li><a href="#planning">Planning</a></li>
    <li><a href="#coding-process">Coding Process</a></li>
      <ul>
        <li><a href="#backend">Backend</a></li>
        <li><a href="#frontend">Frontend</a></li>
      </ul>
  </ul>
</nav>

<section>
<h2 id="overview">Overview</h2>
CreatoRoll is a fullstack web application build with MERN stack and with its backend and frontend hosted on render. 
<br><br>
It was created for people who love RPG board games like Dungeon & Dragons, Dragon's Lair etc., and all kinds of creative people who like to create stories and adventures.
<br><br>
This web application consist of:

1. Home, About and Contact:
    <ul>
      <li>navigating user to join and create acount</li> 
      <li>explaining the site</li> 
      <li>giving option for contacting</li>
    </ul>
![home](https://user-images.githubusercontent.com/118491174/217788355-62269f8d-2149-4c4a-a6e1-860b00219de8.png)
![contact](https://user-images.githubusercontent.com/118491174/217788360-fb831997-cec6-424b-b101-3d157a278517.png)

2. Registration and Login
    <ul>
      <li>needed for personal user profiles</li> 
      <li>authentication and authorisation</li> 
    </ul>
![register](https://user-images.githubusercontent.com/118491174/217788357-6d08f056-7dbb-408c-85f9-b9cb79f7ed96.png)

3. Userdashboard
    <ul>
      <li>for displaying created characters and interaction with them</li>
      <li>showcasing user stats</li>
    </ul>
![dashboard](https://user-images.githubusercontent.com/118491174/217788349-17bf945e-df6e-4546-8711-7697b7ea4b64.png)

4. Character Creator
    <ul>
      <li>set of steps needed for creation of new character</li>
      <li>custom creation and display of assets needed for new character</li>
      <li>background and description generation by use of AI</li>
      <li>assets are available to all users for usage and inspiration</li>
    </ul>
    
 <div display="flex" justify="space-between" align="center">
    <img src="https://user-images.githubusercontent.com/118491174/217798870-03579eb6-9b52-456e-8b7f-1690cc576874.png" width="auto" height="443" margin="auto"/>
    <img src="https://user-images.githubusercontent.com/118491174/217798887-2f6b115f-b247-4799-8575-8423adad60ef.png" width="auto" height="443" margin="auto"/>
    <img src="https://user-images.githubusercontent.com/118491174/217801763-b30b2f34-dc55-4d55-915b-8ef4da6c0dbd.png" width="auto" height="443" margin="auto"/>
    <img src="https://user-images.githubusercontent.com/118491174/217801767-8bfa718d-5388-4b0e-90df-c51c83426e08.png" width="auto" height="443" margin="auto"/>
 </div>

5. Adventure Creator (currently in development)
    <ul>
      <li>steps for creating custom adventure/story</li>
      <li>creation of plot, maps, NPCs and many more</li>
    </ul>
</section>    

<section>
    <h2 id="why">Why did I build this?</h2>
    <p align="justify">
    I love stories and I love DnD... yea, nerd. 
    <br><br>
    But I truly enjoy spending time with my friends while playing any kind of board game (especially the rpg ones).
    <br>
    And from this came up this idea.
    <br><br>
    Hear me out. 
    <br><br>
    Did you ever tried to create a full-fledged Dnd adventure filled with NPCs, beautiful maps, interesting locations and catchy plot? <br>
    Yeah, I did it a few times, spend a looot of my time on it and know that as much enjoyable as it is, it is not the kind of game you can play spontaneously.
    It requires, if you are not playing with pure imporvisation, thorough preparing and commitment from you and all the other players who also need to come up with their characters.
    This many times leads to loss of big enthusiasm that comes up from the idea of creating and playing such an adventure and in the worst case the game will never be played.
    <br><br>
    This application should solve this problem of long preparation and need for thorough commitment.
    It enables you to play right on the spot with carefully prepared adventure, characters and many more with just a few clicks and short time of reading through materials.
    This is done with the help of AI and carefully designed step by step approach that is needed for detailed creation.
    <br><br>
    Daunting task right? 
    <br> 
    Is it even possible to create with just few clicks something that would be comparable with DnD adventure books? 
    <br>
    Right now I am in the process of figuring that out. 
    However, every workhour I am getting closer to the phase where I can say <italic>"Yes, it is."</italic>
    <br><br>
    I started this task small by creating <bold>Character Creator</bold>. 
    <br>
    It creates unique characters which can be used as NPCs or as players.
    They are build from custom created assets which user chooses from during creation.
    Character is defined by name, race, profession, personality, attributes, background and equipment.
    They are then compiled together into full-fledgd character which can be displayed with all the data in dashboard and played with.
    <br><br>
    In next sections I will talk about planning and coding of Character Creator.
    <p>
</section>

<section>
    <h2 id="planning">Planning</h2>
    <p>
    As a stack I chose MERN as MongoDB as database, Express and Node for backend and React for frontend. 
    <br>
    I love following step by step approach for getting closer to my goals and that's what I did here too.
    <br><br>
    Steps I planned were:
    <ol>
      <li>
        Summary of everything I need for this implementation
      </li>
      <li>
        Server and hosting set up
      </li>
      <li>
        Figuring out data flow
      </li>
      <li>
        Database preparation and creation of needed schemas
      </li>
      <li>
        Implementation of registration and logging-ing
        <br>
        (Why when I could use sth like auth0? Well...
          <br> as mainly front-end dev
        I never implemented it myseld so because I wanted to learn more about this process)
      </li>
      <li>
        Implementation of creation logic and communication with AI
      </li>
      <li>
        Design, styling and UX of application
      </li>
      <li>
        A little community testing!
      </li>
    </ol>
    </p>
</section>

<section>
    <h2 id="coding-process">Coding Process</h2>
    <h3 id="backend">Backend</h3>
    <p>
      As talked before I used Express and Node.js for server set-up and logic running on server. 
      <ul>
        <li>I used jwt and bycrpt for authentication and authorisation,</li>
        <li> openAI gpt-3 for text completion,</li>
        <li>mongoose for communication with MongoDB,</li>
        <li>morgan,helmet, cors for better HTTP requests handling.</li>
      </ul>
      <br><br>
      My folder structure for server:
      
   <ul>
        <li>server</li>
        <ul>
          <li>controllers</li>
          &ensp;Files handling logic behind HTTP requests.
          <li>images</li>
           &ensp;Temporary for image storing.
          <li>middleware</li>
          &ensp;For jwt token verification process.
          <li>models</li>
          &ensp;Schemas for MongoDB.
          <li>routes</li>
          <li>index.js</li>
        </ul>
    </ul>
    </p>
    <br><br>
    <h3 id="frontend">Frontend</h3>
    <p>
      For frontend coding, UI and UX I used React.js with    
    <ul>
      <li>TailwindCSS for styling,</li>
      <li>Framer Motion for animation,</li>
      <li>Redux Toolkit for global state management,</li>
      <li>Formik, yup and EmailJS for form management and validation,</li>
      <li> uuid for unique ID generation.</li>
    </ul>
     <br><br>
      My folder structure for client:
      
   <ul>
        <li>src</li>
        <ul>
          <li>assets</li>
           &ensp;Storing of icon lists.
          <li>components</li>
           &ensp;For various big or small components that were or could be reused.
          <li>fonts</li>
          <li>functions</li>
          <li>pages</li>
           &ensp;Combined components for router in App.jsx.
          <li>state</li>
           &ensp;For global state management.
          <li>App.jsx</li>
          <li>main.jsx</li>
          <li>index.css</li>
        </ul>
    </ul>
    </p>
   
    
</section>












