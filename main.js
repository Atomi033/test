4
var topics = [
{
topic: "Front-end",
courses: [
{
id: 1,
title: "HTML, CSS"
},
{
id: 2,
title: "Javascript"
}
]
},
{
    topic: "Back-end",
    courses: [
    {
    id: 1,
    title: "PHP"
    },
    {
    id: 2,
    title: "NodeJS"
    }
    ]   
}
];

var newCourses = topics.reduce(function(courses,topic){
    return courses.concat(topic.courses);
},[]);

var htmls = newCourses.map(function(course){
return `
      <div>
           <h2>${course.title}</h2>
           <p>${course.id}</p>      
      </div> 
`;
});
console.log(htmls.join(''));


var courses = [
{
    id : 1,
    name : 'Java',
    coin : 0
},
{
    id : 2,
    name : 'C#',
    coin : 1
},
{
    id : 3,
    name : 'Python',
    coin : 2
}
];

// var newName = courses.map(function(elements){
//     return `<h2>${elements.name}</h2>`;
// });
// console.log(newName);