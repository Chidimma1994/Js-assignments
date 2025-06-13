const scores = [
  {student_1: 'John', Score : 50},
  {student_2: 'Chidimma', Score : 40},
  {student_3: 'Kelsey', Score : 80},
  {student_4: 'Frank', Score : 60},
  {student_5: 'Phoebe', Score : 90},
  {student_6: 'Ruth', Score : 70},
  {student_7: 'Peace', Score : 100},
]
 
const scoreGreaterThanFifthy = scores.filter((score)=> score.Score > 60)

console.log(scoreGreaterThanFifthy);


//sort through an object array
scores.sort((a,b)=>{
  if (a.Score < b.Score) return -1
  if (a.Score > b.Score) return 1
  return 0
})

console.log(scores);