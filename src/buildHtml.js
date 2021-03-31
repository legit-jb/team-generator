const fs = require("fs");

let cards = "";

// builds the individual card
buildCard = (member) => {
  const { name, id, email } = member;
  const position = member.getRole();
  switch (position) {
    case "Manager":
      const { officeNumber } = member;
      cards += "\n" + `<div class="card" id="manager" style="width: 18rem;">
      <div class="card-header p-4">
      <h2>${name}</h2>
      <h4><i class="fas fa-mug-hot"></i>Manager<h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${id}</li>
        <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
        <li class="list-group-item">office Number: ${officeNumber}</li>
      </ul>
      </div>`;
      break;
    // end of manager case

    case "Engineer":
      const { github } = member;
      cards += "\n" + `<div class="card" style="width: 18rem;">
      <div class="card-header p-4">
      <h2>${name}</h2>
      <h4><i class="fas fa-glasses"></i>   Engineer<h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${id}</li>
        <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
       <li class="list-group-item">Github:  <a href="https://github.com/${github}"> ${github} </a>
      </ul>
    </div>`;
      break;
    // end of engineer case

    case "Intern":
      const { school } = member;
      cards += "\n" + `<div class="card" style="width: 18rem;">
      <div class="card-header p-4">
      <h2>${name}</h2>
      <h4><i class="fas fa-user-graduate"></i>   Intern<h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${id}</li>
        <li class="list-group-item">Email: <a href=mailto:"${email}>${email}</a></li>
        <li class="list-group-item">School: ${school}</li>
      </ul>
    </div>`;
      break;
    // end of intern case

    default:
      console.log("No members of team reported!")
  }
  // end of switch
}
// end of buildCard function

// breaks up the teammember arrays and call for each object to have a card
roleCard = (teamArray) => {
  console.log("roleCard teamArray " + teamArray);
  const [manager, engineerArray, internArray] = teamArray;
  // build manager card
  buildCard(manager);
  // build a engineer card for every engineer object in engineerArray
  if (engineerArray.length > 0) {
    for (const engineer of engineerArray) {
      buildCard(engineer);
    }
  }
  // end if statement

  // build an intern card for every intern object in internArray
  if (internArray.length > 0) {
    for (const intern of internArray) {
      buildCard(intern);
    }
  }
  // end if statement

  // build the HTML PAGE
  fs.writeFile("./dist/index.html", startHtml(), err => {
    if (err) throw err;
    console.log("File generated")
  })
  //  end fs.writeFile function
}
// end roleCard

// builds the non changing HTML and styling
startHtml = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="/style.css">
        <title>Main</title>
    </head>
    <body>
      <style>

      :root {
        --jblack: #1e1d20;
        --jdarkgray: #333333;
        --jgray: #d6d6d6;
        --jblue: #0571e3;
        --jdarkblue: #01448b;
        --jdarkred: #bb8482;
        --jdarkgreen: #91bd83;
        --jdarkyellow: #b0ba53;
        --jwhite: #fbfbfd;
        --joffwhite: #f5f5f7;
        font-family: helvetica, Arial, sans-serif;
      }

      body{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: var(--jwhite);
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      height: 100%;
      width: 100%;
      letter-spacing: 2px;
      }

      a {
        color: var(--jblue);
      }
    
      .header{
      width: 100%;
      text-align: center;
      padding: 7%;
      background-color: var(--jdarkred);
      color: var(--jwhite);
      border: 1px solid var(--jdarkred);
      margin-bottom: 30px;
      clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);
      }
    
      .card{
      margin-top: 20px;
      margin-right: 20px;
      margin-left: 20px;
      background-color: var(--joffwhite);
      }

      #manager{
      color: var(--jdarkred);
      border: 1px solid var(--jdarkred);
      }
    
      #engineer{
      color: var(--jdarkyellow);
      border: 1px solid var(--jdarkyellow);
      }

      #engineer{
      color: var(--jdarkgreen);
      border: 1px solid var(--jdarkgreen);
      }

      .card ul li, .card-header{
      background-color: var(--joffwhite);
      border-bottom: 1px solid var(--jdarkgray);
      }
    
      .footer{
      width: 100%;
      padding: 7%;
      }
     </style>
     <div class="header"><h1>My Team</h1></div>
 
      ${cards}
    
 
      <div class="footer"></div>  
 </body>
 </html>`

}

module.exports =
  roleCard
