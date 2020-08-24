const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {
//Inserir dados 

proffyValue = {
    name: "Gabriel Cedraz ",
    avatar:"https://media-exp1.licdn.com/dms/image/C4D03AQFbl0fEFcGl3g/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=v4hlnil38kY20UGOM8EYhgQuGPCrfWOC9EkKo5Gx4MA",
    whatsapp: "71994071539",
    bio: "Progamação", 
}

classValue ={
    subject:2,
    cost:"40"
    //O proffy_id vira pelo banco de dados
}

classScheduleValues =[
    //class_id vira pelo banco de dados,apos cadastrarmos a class
    {
        weekday: 1,
        time_from: 720,
        time_to: 1220
    },
    {
        weekday: 0,
        time_from: 520,
        time_to: 1220
    }
]

 //await createProffy(db, {proffyValue,classValue,classScheduleValues})

//Consultar os dados inseridos

//todos os proffys
const selectedProffys = await db.all("SELECT * FROM proffys")
//console.log(selectedProffys)

//consultar as classes de um determinado professor
//e trazer juntos os dados do professor
const selectClassesAndProffys= await db.all (`
       SELECT classes.*,proffys.*
       FROM proffys
       JOIN classes ON (classes.proffy_id = proffys.id)
       WHERE classes.proffy_id = 1;
`)
//console.log(selectClassesAndProffys)

   // o horario que a pessoa trabalha,por ex, eh das 08 a-18
   // o horario do time_from (8h) precisa ser antes ou igual ao horario solicitado
   //o time_to precisa ser acima 
   const selectClassesSchedules = await db.all(`
      SELECT class_schedule.*
      FROM class_schedule
      WHERE class_schedule.class_id = 2
      AND class_schedule.weekday = "0"
      AND class_schedule.time_from <= "1300"
      AND class_schedule.time_to > "1300"
   `)
   //console.log(selectClassesSchedules)
   
})