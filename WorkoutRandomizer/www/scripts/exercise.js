function Exercise(name, muscle, max, exclude){
    this.name = name;
    this.muscle = muscle;
    this.max = max;
    this.exclude = exclude;
}

// Update the 1 Rep Max for an exercise based on repitions and weight lifted.
function updateMax(exer, reps, weight) {
    exer.max = weight * (1 + (0.025 * reps)); // O'Connor's equation
}

function getRepWeight(exer, reps) {
    return exer.max / (1 + (0.025 * reps)); // Inverse of O'Connor's equation
}

function updateExclude(exer) {
    exer.exclude = !exer.exclude;
}