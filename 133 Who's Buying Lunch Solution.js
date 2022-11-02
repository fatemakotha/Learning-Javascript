function whosPaying(names) {
    noOfPeople = names.length;
    randomPosition = Math.floor(Math.random() * noOfPeople)
    chosenName = names[randomPosition]
    return chosenName + " is going to pay today"
}

listNames = ["Kotha", "Cutu", "Sheela", "Angela", "Downey"]

whosPaying(listNames);