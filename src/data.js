export const projects = [
{
id: 1,
title: 'Card Counting CV',
image: `${process.env.PUBLIC_URL}/card_image.png`,
description: 'Computer vision pipeline that detects and counts playing cards using a YOLO-based detector and OpenCV overlay.',
github: 'https://github.com/jacobigo/card-counter-ml'
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
];