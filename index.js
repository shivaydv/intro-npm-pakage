#!/usr/bin/env node

function logDetails() {

    const message = "Hey there! I'm Shiva Yadav, a Web Developer and a Tech Enthusiast.";
    const twitterLink = "https://twitter.com/shivay1256";
    const linkedinLink = "https://www.linkedin.com/in/shivaydv/";
    const githublink = "https://www.github.com/shivaydv";
    const wesbiteLink = "https://shivayadav.tech";
  
//box using ANSI escape codes
    const box = ` 
    \x1b[38;5;105m${message}
    
        \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${wesbiteLink}                      
        \x1b[38;5;93mLinkedIn:\x1b[0m   \x1b[38;5;39m${linkedinLink}                
        \x1b[38;5;93mGithhub:\x1b[0m    \x1b[38;5;39m${githublink}                
        \x1b[38;5;93mTwitter:\x1b[0m    \x1b[38;5;39m${twitterLink}                        
    \x1b[0m`;
  
 
    console.log(box);
  }
  
  logDetails();