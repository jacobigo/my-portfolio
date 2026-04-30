export const projects = [
{
id: 1,
title: 'Card Counting CV',
image: `${process.env.PUBLIC_URL}/card_image.png`,
description: 'Computer vision pipeline that detects and counts playing cards using a YOLO-based detector and OpenCV overlay.',
github: 'https://github.com/jacobigo/card-counting-ml'
},
{
id: 2,
title: 'Instructional Agent Video Generation',
image: `${process.env.PUBLIC_URL}/instruct_image.png`,
description: 'Utilizes Instructional Agents\' output to generate online course lectures.',
github: 'https://github.com/jacobigo/instruct_video_research'
},
{
id: 3,
title: 'Supply Chain Routing Tool',
image: `${process.env.PUBLIC_URL}/carbon_image.png`,
description: 'Calculates most efficient route based on carbon output; made with Neo4j, Networkx, and MapBox GL.',
github: 'https://github.com/jacobigo/carbon'
},
{
id: 4,
title: 'College Football Ranking System',
image: `${process.env.PUBLIC_URL}/Auburn_vs_Georgia.png`,
description: 'Uses advanced ELO & regularization to determine rankings for teams, can visualize & compare teams\' game history',
github: 'https://github.com/jacobigo/cfb'
}
];

export const internships = [
{
id: 1,
role: 'Software Engineering Intern',
company: 'FOX Sports',
period: 'Spring 2026, Summer 2026',
description: 'Developed ML stream identification system and dashboard using OpenCLIP and P-Hash, hosted on an NVIDIA DGX Spark with Docker.\n\n Achieved 89% F1 score with 8x potential scalability.',
link: 'https://www.linkedin.com/in/jacob-igo/'
},
{
id: 2,
role: 'Machine Learning Researcher',
company: 'Paragon Autonomous',
period: 'Fall 2024 - Fall 2025',
description: 'Worked for student-led startup on autonomous firefighting drones. Focused on LiDAR and image fusion to perform semantic segmentation. Used PyTorch, GCP VM, OpenCV, ROS2',
link: 'https://www.linkedin.com/in/jacob-igo/'
},
{
id: 3,
role: 'Research and Development Intern',
company: 'Infosys',
period: 'Summer 2025',
description: 'Created various POCs for external clients, flew out to Indianapolis for product pitch and live demo. Gained profiency with Huggingface, RAG, Neo4j, and more.',
link: 'https://www.linkedin.com/in/jacob-igo/'
}
];

export const skills = [
'Python',
'C++',
'React',
'OpenCV',
'PyTorch',
'ROS2',
'SQL',
'Docker',
'Scikit-Learn',
'Matplotlib',
'Numpy',
'Pandas',
'Huggingface',
'GCP',
'AWS'
];