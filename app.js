const ageToVote = 100

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE
let holmesCase = {
  title: "",
  year: 0
}

let currentYear = 2023
let jsReleaseYear = 1995
console.log("current age of JavaScript is " + (currentYear - jsReleaseYear).toString());

if (currentYear - jsReleaseYear < ageToVote) {
  console.log("JavaScript is not old enough to vote")
}
else {
  console.log("JavaScript is old enough to vote")
}

console.log("Starting")
for(i=0; i<=100; i+= 10){
  if (i==50){console.log("Halfway")}
  console.log(i)
}
console.log("Finished")

console.log(`${user.name} lives at ${user.address.street}, ${user.address.city}`)

cases.forEach(holmesCase => {
  if (holmesCase.releaseYear == 1903){
  console.log(`${holmesCase.title}, ${holmesCase.releaseYear}`)
  }
})
