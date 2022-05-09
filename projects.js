// SORT PROJECTS
{
    function activation(){
        document.getElementById("all").classList.remove("is-active");
        document.getElementById("datascience").classList.remove("is-active");
        document.getElementById("webdev").classList.remove("is-active");
        document.getElementById("geospatial").classList.remove("is-active");
        document.getElementById("other").classList.remove("is-active");
    }
    function clearStyle(){
        //document.getElementById("current-project").style.display = 'none';
        activation();
        var elements = document.getElementsByClassName('proj-col');
        
        for(var i=0; i<elements.length; i++){
            elements[i].style.backgroundColor = "#fafafa";
            elements[i].style.display = "none";
        }
    }
    function showAll(){
        clearStyle();
        document.getElementById("all").classList.add("is-active");
        var elements = document.getElementsByClassName('proj-col');
        
        for(var i=0; i<elements.length; i++){
            elements[i].style.display = "flex";
        }
    }
    function dataScience(){
        clearStyle();
        document.getElementById("datascience").classList.add("is-active");
        var elements = document.getElementsByClassName('cat-ds');
        
        for(var i=0; i<elements.length; i++){
            elements[i].style.display = "flex";
        }
    }
    function webDev(){
        clearStyle();
        document.getElementById("webdev").classList.add("is-active");
        var elements = document.getElementsByClassName('cat-wd');
        
        for(var i=0; i<elements.length; i++){
            elements[i].style.display = "flex";
        }
    }
    function geospatial(){
        clearStyle();
        document.getElementById("geospatial").classList.add("is-active");
        var elements = document.getElementsByClassName('cat-g');
        
        for(var i=0; i<elements.length; i++){
            elements[i].style.display = "flex";
        }
    }
    function other(){
        clearStyle();
        document.getElementById("other").classList.add("is-active");
        var elements = document.getElementsByClassName('cat-or');
        
        for(var i=0; i<elements.length; i++){
            elements[i].style.display = "flex";
        }
    }
}

// SHOW PROJECTS
{
    function displayProject(title, description, content){
        //document.getElementById("current-project").style.display = 'block';
        document.getElementById("project-title").innerHTML = title;
        document.getElementById("modal-footer").innerHTML = description;
        document.getElementById("modal-card-body").innerHTML = content;
        //window.location.href = '#current-project';
    }

    function art(){
        var title = "Image Art Styler - Pearl Hacks '22"
        var description = "Arbitrary neural artistic sylization network to transform one image into the style of another."
        var content = "<iframe src='./projects/art.html' id='iframe-content'></iframe>"
        displayProject(title, description, content);
    }

    function drug(){
        var title = "Drug Consumption: ML Analysis of Marijuana and Other Drug Users";
        var description = "This report sought to predict who are marijuana users and investigate which other drugs are related to marijuana use.";
        var content = "<iframe src='./projects/drugs.html' id='iframe-content'></iframe>";
        //document.getElementById("modal-card-body").innerHTML = content;
        //document.getElementById("project-title").innerHTML = title;
        //document.getElementById("modal-footer").innerText = description;
        //document.getElementById("project-description").innerHTML = description;
        displayProject(title, description, content);
    }

    function congress(){
        var title = "US Congressional Social Media";
        var description = "This report aims to investigate the role of social media in Congressional politics through an analysis of heightened periods of engagement and an analysis of partisanship based on term usage.";
        //var content = "<iframe scrolling='no' src='./projects/congress.html' style='width:100%; height:900vh;'></iframe>";
        var content = "<iframe src='./projects/congress.html' id='iframe-content'></iframe>";
        displayProject(title, description, content);
    };

    function atlanta(){
        var title = "Atlanta Urban Sprawl, a Geo-Analysis";
        var description = "This research analyzes and visualizes the suburbanization of Atlanta from 1975 to 2014 by using GHSL data to determine artificial surfaces.";
        var content = "<iframe src='./projects/atlanta.html' id='iframe-content'></iframe>";
        displayProject(title, description, content);
    };

    function book(){
        // var title = "Book Recommender";
        // var description = "This model takes input on your favorite books in order to recommend a new book you may like using the BLANK method.";
        // var content = "<iframe src='./projects/book.html'  id='iframe-content'></iframe>";
        // displayProject(title, description, content);
        document.getElementById("current-project").style.display = 'none';
        alert("Uh oh! This project is under construction.")
    };

    function friend(){
        var title = "Friend Network Chart";
        var description = "This project is a fun visualization of my roommate's (Diana) and my friends to show the interconnectivity of different types of people at UNC.";
        var content = "<iframe src='./projects/friend.html'  id='iframe-content'></iframe>";
        displayProject(title, description, content);
    };

    function covid(){
        var title = "COVID-19 Air Pollution in the US";
        var description = "This research analyzes the environmental effects of coronavirus shutdown legislation as seen through pollution levels in major US cities. Made in under 24 hours for the Carolina Data Challenge hackathon.";
        var content = "<iframe src='./projects/covid.html'  id='iframe-content'></iframe>";
        displayProject(title, description, content);
    };

    function prob(){
        var title = "Statistics Probability Library";
        var description = "This is a Python library based on the content in a probability for data science couse. Contents include basic and conditional probability, and many types of random variables.";
        var content = "<iframe src='./projects/prob.html'  id='iframe-content'></iframe>";
        displayProject(title, description, content);
    };

    function conway(){
        var title = "Conway's Game of Life";
        var description = "This is a Java project with an interactive GUI to play Conway's Game of Life, an automation developed by mathematician John Conway in 1970. You can manipulate the size, speed, conditions, formations, etc of the visualization.";
        var content = "<iframe src='./projects/conway.html'  id='iframe-content'></iframe>";
        displayProject(title, description, content);
    }

    function othello(){
        var title = "Othello Game";
        var description = "This is a two-player strategy game written in Java. The objective is to get the majority of your color disks on the board at the end of the game.";
        var content = "<iframe src='./projects/othello.html'  id='iframe-content'></iframe>";
        displayProject(title, description, content);
    }

    function alu(){
        var title = "Simple ALU Circuit";
        var description = "This is a physical electronics circuit using adder and register chips to implement a simple ALU. On every clock tick, the circuit will take the register value, add or subtract the specified amount, and store the results back into the register.";
        var content = "<iframe src='./projects/alu.html'  id='iframe-content'></iframe>";
        displayProject(title, description, content);
    }

    function thisSite(){
        var title = "Samantha Anthony Portfolio";
        var description = "This website is a collection of a few personal and school projects written in many different languages. For more information, connect with me using the Contact section at the bottom of the page or by emailing samanthahanthony@gmail.com";
        var content = "<iframe src='./projects/portfolio.html'  id='iframe-content'></iframe>";
        displayProject(title, description, content);
    }
}

// SHOW MODAL
{
function reset_modal(){
    var title = "Project Title";
    var description = "Project Description";
    document.getElementById("project-title").innerHTML = title;
    document.getElementById("modal-footer").innerHTML = description;
    document.getElementById("modal-card-body").innerHTML = "";
}

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
      reset_modal();
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });
}