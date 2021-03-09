const calcAge = (person) => {
    return person.yearOfDeath - person.yearOfBirth
}

const calcAgeImmortal = (person) => {
    return 2021 - person.yearOfBirth
}


let findTheOldest = function(people) {
    let oldest;
    let age = 0;
    for (let person in people) {
        if (people[person].yearOfDeath) {
            let newAge = calcAge(people[person])
            if (newAge > age) {
                oldest = people[person]
                age = newAge
            }
        } else {
            let newAge = calcAgeImmortal(people[person])
            if (newAge > age) {
                oldest = people[person]
                age = newAge
            }
        }
    }

    return oldest
}

module.exports = findTheOldest