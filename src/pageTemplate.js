const genCards = teamData => {
 
    const manager = teamData.manager.map(function(job) {
        let managerCard = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Manager<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p>Office Number: ${job.office}</p>
        </div>
        `
        return managerCard
    });

    const engineer = teamData.engineer.map(function(job) {
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Engineer<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p> Github: <a href="https://github.com/${job.github}" target="_blank">${job.github}</a></p>
        </div>
        `
        return engineerHtml
    })

    const intern = teamData.intern.map(function(job) {
        let interHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Intern<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p> School: ${job.school}</p>
        </div>
        `
        return interHtml
    })
    return [manager,engineer,intern]
}

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    
      <link rel="stylesheet" href="./assets/css/reset.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/all.css">
      <link rel="stylesheet" href="./assets/css/style.css" />
      <title>Team Generator</title>
    </head>
        <body>
            <header>
            <h1 class="text-center">My Team</h1>
            </header>
            ${generateCards(templateData)}
        </body>
        </html>    
        `
}