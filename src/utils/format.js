
const subjects=[
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Geografia",
    "História",
    "Português",
    "Química",
]
const weekdays=[
    "Domingo",
    "Segunda-Feira",
    "Terca-Feira",
    "Quarta-feira",
    "Quinta feira",
    "Sexta feira",
    "Sabado",
]
//funcionalidades

function getSubject(subjectNumber){
const position = +subjectNumber - 1
return subjects[position]
}

function convertHoursToMinutes(time){
    const [hour,minutes] = time.split(":")
    return Number((hour*60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}