function displayProject(title, description, content){
    document.getElementById("current-project").style.display = 'block';
    document.getElementById("project-title").innerHTML = title;
    document.getElementById("project-description").innerHTML = description;
    document.getElementById("this-project").innerHTML = content;
    window.location.href = '#project-description';
}

function congress(){
    var title = "US Congressional Social Media";
    var description = "This report aims to investigate the role of social media in Congressional politics through an analysis of heightened periods of engagement and an analysis of partisanship based on term usage.";
    var content = "";
    displayProject(title, description, content);
};

function atlanta(){
    var title = "Atlanta Urban Sprawl, a Geo-Analysis";
    var description = "This research analyzes and visualizes the suburbanization of Atlanta from 1975 to 2014 by using GHSL data to determine artificial surfaces.";
    var content = "";
    displayProject(title, description, content);
};

function book(){
    // var title = "Book Recommender";
    // var description = "This model takes input on your favorite books in order to recommend a new book you may like using the BLANK method.";
    // displayProject(title, description);
    document.getElementById("current-project").style.display = 'none';
    alert("Uh oh! This project is under construction.")
};

function friend(){
    var title = "Friend Network Chart";
    var description = "This project is a fun visualization of my roommate's (Diana) and my friends to show the interconnectivity of different types of people at UNC.";
    var content = "";
    displayProject(title, description, content);
};

function covid(){
    var title = "COVID-19 Air Pollution in the US";
    var description = "This research analyzes the environmental effects of coronavirus shutdown legislation as seen through pollution levels in major US cities. Made in under 24 hours for the Carolina Data Challenge hackathon.";
    var content = "";
    displayProject(title, description, content);
};

function prob(){
    var title = "Statistics Probability Library";
    var description = "This is a Python library based on the content in a probability for data science couse. Contents include basic and conditional probability, and many types of random variables.";
    var content = "<p>The contents of this project can be found in the GitHub repository <a href='https://github.com/samantho/storProbDS'>here</a>.</p>";
    displayProject(title, description, content);
};

