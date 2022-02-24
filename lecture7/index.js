[1,2,3,4,5].reduce((accum, elem, index, arr) => {
    
});

const sum = (a, b) => {
    return a + b;
};

sum(34, 200);

const arr = [1,2,3,4,5];

const index = arr.indexOf(2); 

if(index === -1) {
    console.log('Congrats')
}



const video = {name: 'ds', url: 'bblblb'};
Object.assign(video, {a: 1});

Object.keys(video).forEach(key => {

    console.log(video[key]);
});



const events = {
    SBTE_106729182: {
       "id":"SBTE_106729182",
       "raceHour":"16:00",
       "racePeriodId":"GAME_OVER"
    },
    SBTE_106729181 :{
       "id":"SBTE_106729181",
       "raceHour":"16:28",
       "racePeriodId":"GAME_OVER"
    },
    SBTE_106729180: {
       "id":"SBTE_106729180",
       "raceHour":"16:56",
       "racePeriodId":"GAME_OVER"
    },
    SBTE_106729179: {
       "id":"SBTE_106729179",
       "raceHour":"17:24",
       "racePeriodId":"PRE_GAME"
    }
}

events['SBTE_106729179'];

// ['SBTE_106729179', ......]
const event22 = Object.keys(events).find(key => events[key].raceHour === '16:28');

console.log(event22);