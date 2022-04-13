const name = "Chathuranga";
const age = 25;
const job = "Web Development";
const city = "Kurunegala";

// without template string (ES 5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: '
        + job + '</li><li>City: ' + city + '</li></ul>';

// with template string

function hello(){
    return 'hello';
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li> ${2+3} </li>
        <li> ${hello()}</li>
        <li> ${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>      
`; 
// this is template string init 
// this is not single cote(' ') this is ( ``) > near the no 1 key

document.body.innerHTML = html;  