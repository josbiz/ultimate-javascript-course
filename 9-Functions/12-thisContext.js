const user = {
    name: 'Nicolas',
    citizenships: ['Chile', 'Colombia', 'New Zealand'],
    showCitizenships () {
        this.citizenships.forEach(el => console.log(this.name, el))
    }
}

user.showCitizenships()