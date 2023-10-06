function speak() {
    console.log(`${this.sound} ! Меня зовут ${this.name} ! `)
}


let cat = {
    name : 'FurFur',
    legs : 4,
    isAwesome: true,
    speak: speak,
    sound: 'Мяф'

}

let dog = {
    sound: "Тяф",
    name: "Бобстер",
    speak: speak
}


cat.speak();
dog.speak();

