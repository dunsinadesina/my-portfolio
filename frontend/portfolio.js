document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'KCOAT E-Commerce Web Store',
            description: 'Developed and maintained a robust backend infrastructure for an e-commerce web store specializing in fashion items.',
            technogies: ['Node.js', 'MySQL', 'Express.js'],
            link: 'https://kcoat.netlify.app/'
        },
        {
            title: 'Gelks International (Richforth Tech)',
            description: 'Developed a robust and scalable backend infrastructure for an IP provider-based system.',
            technogies: ['Node.js', 'MongoDB'],
        },
    ];
    const experiences = [
        {
            title: 'Precious Art Initiative - Web Developer',
            duration: 'August 2023 - December 2023',
            details: [
                'Developed a custom website to meet individual client needs.',
                'Created clean, well-documented custom code.',
                'Leveraged mastery of HTML, CSS, and JavaScript to build top-quality code for a responsive project.',
            ],
        },
        {
            title: 'New Covenant Church - Technical Assistant',
            duration: 'May 2020 - Present',
            details: [
                'Created detailed reports on system utilization, downtime events, and other relevant metrics.',
                'Liaised with vendors and technicians to diagnose and repair equipment issues or defective products.',
                'Developed and maintained collaborative relationships to accomplish goals and support church values.',
            ],
        },
        {
            title: "All Saints' College - Food Service Supervisor",
            duration: 'February 2019 - June 2020',
            details: [
                'Ensured all safety regulations were met by food handlers according to local health regulations and standards.',
                'Utilized excellent communication skills when interacting with customers and vendors.',
                'Monitored food preparation processes to ensure quality, freshness, and timeliness of meals served.',
            ],
        },
    ];
    const projectList = document.getElementById('project-list');
    projects.forEach(project=>{
        const listItem = document.createElement('li');
        listItem.innerHTML=`
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technogies.join(', ')}</p>
        <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(listItem);
    });
    const experienceList = document.getElementById('experience-list');
    experiences.forEach(experience =>{
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <h3>${experience.title}</h3>
        <p>${experience.duration}</p>
        <ul>
            ${experience.details.map(detail=>`<li>${detail}</li>`).join('')}
        </ul>
        `;
        experienceList.appendChild(listItem);
    });
});