const openedWindow = window.open('https://virginbet.com', 'aaa','popup,width=500,height=200');
    
openedWindow && openedWindow.resizeTo(1000, 1000);

// doest work :(
openedWindow && openedWindow.blur();

window.navigator.getBattery().then(battery => {
    console.log(battery)
});

navigator.geolocation.getCurrentPosition((geo) => {
    console.log(geo)
})

// history manipulation
history.pushState({}, '', '/about');

history.back();

// location
console.log(location);
