
let restaurant ={
    name: 'Salt & PAPPER',
    GeuestCapacity: 74,
    GuestCount: 4,
    checkAvilability: function(partySize){
        let seatsLeft =this.GeuestCapacity - this.GuestCount
       return partySize <= seatsLeft
    }
}

let status= restaurant.checkAvilability(45)
console.log(status)