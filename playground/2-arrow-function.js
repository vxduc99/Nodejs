const event = {
    name: 'Ca Khia',
    guests: ['Duc','Sen','Yen'],
    printGuest() {
        console.log('Guest list for: ' + this.name)
        
        this.guests.forEach((guest) => {
            console.log(guest + ' is ' + this.name)
        });
    }
}

event.printGuest()