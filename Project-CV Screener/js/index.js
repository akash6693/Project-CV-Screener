console.log("This is JavaScript File");

const data = [
    {
        name: 'Rohan Das',
        age: 29,
        City: 'Delhi',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'

    },

    {
        name: 'Swati Sharma',
        age: 26,
        City: 'Hyderabad',
        language: 'SQL',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/51.jpg'

    },

    {
        name: 'Shubham',
        age: 31,
        City: 'Delhi',
        language: 'C',
        framework: 'MangoDB',
        image: 'https://randomuser.me/api/portraits/men/58.jpg'

    },

    {
        name: 'Arpana Dixit',
        age: 29,
        City: 'Mumbai',
        language: 'PHP',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/67.jpg'

    },

    {
        name: 'Annu',
        age: 29,
        City: 'Patna',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/91.jpg'

    }

]

function cvIterator(profiles){
    let nextIndex = 0;
    return{
        next : function(){
            if (nextIndex < profiles.length)
            return{
            value: profiles[nextIndex++], 
            done : false
        }
        else{
            return{
                done :true
            }
        }   
        }
    };
}

const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.City}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}
