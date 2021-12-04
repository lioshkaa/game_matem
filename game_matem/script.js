const name=[];
let mask=document.getElementById("mask");
const modal=document.querySelector(".modal");
let button=document.getElementById('btn-text');
const option1=document.querySelector(".option1");
const option2=document.querySelector(".option2");
const option3=document.querySelector(".option3");
const optionElement=document.querySelectorAll(".option");
const question=document.querySelector(".question"); 
const buttonQuestion=document.getElementById("btn");
const open=document.querySelector(".open");
const btnNext=document.getElementById("bt");
const numberOfQuestion=document.getElementById('number-of-question'),
      numberOfAllQuestion=document.getElementById('number-of-all-questions');
let user="";
let indexOfPage=0;
let indexOfQuestion=0;
function Button(){
  const n=document.getElementById('form');
  const names=n.Name.value;
  if(names===''){
    alert("Вы не ввели имя")
  }else{
   
    mask.classList.add("hide");
    modal.classList.add('active');
    user+=""+ names;
    document.querySelector('.hello_user').innerHTML=user;
  }
}

buttonQuestion.addEventListener('click',()=>{
  open.classList.add('active');
  modal.classList.remove('active');
});




const questions=[
  {
    question:'10+10 = ?',
    options:[
      '20',
      '30',
      '90',
    ],
    rightAnswer:0,
   
  },
  {
    question:'300+100+50+20+10 = ?',
    options:[
      '480',
      '300',
      '400',
      '10',
    ],
    rightAnswer:0,
  },
  {
    question:'Вы фронтенд?',
    options:[
      'кто это?',
      'нет',
      'да',
     
    ],
    rightAnswer:2,
  }
];

const load = () => {
 question.innerHTML=questions[indexOfQuestion].question;
 option1.innerHTML=questions[indexOfQuestion].options[0];
 option2.innerHTML=questions[indexOfQuestion].options[1];
 option3.innerHTML=questions[indexOfQuestion].options[2];
 indexOfPage+1;
 indexOfPage++;
};
let completedAnswers=[];

const randomQuestion=()=>{
let randomNumber = Math.floor(Math.random()*questions.length);
let hitDuplicate =false;
if(indexOfPage===questions.length){
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'Record3.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true;
}
else{
  if(completedAnswers.length>0){
    completedAnswers.forEach(item=>{
      if(item == randomNumber ){
        hitDuplicate=true;
      }
    });
    if(hitDuplicate){
      randomQuestion();
    }
    else{
      indexOfQuestion=randomNumber;
      load();
    }
  }
  if(completedAnswers.length===0){
    indexOfQuestion=randomNumber;
      load(); 
  }
}
completedAnswers.push(indexOfQuestion);
};
const checkAnswer=el=>{
if(el.target.dataset.id==questions[indexOfQuestion].rightAnswer){
      el.target.classList.add('correct');
      var audio = new Audio(); // Создаём новый элемент Audio
      audio.src = 'Record.mp3'; // Указываем путь к звуку "клика"
      audio.autoplay = true; 
     
      

}else{
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'Record(1).mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; 
  el.target.classList.add('wrong');

}
disabledOptions();

}
for(option of optionElement){
option.addEventListener('click',e=>checkAnswer(e));
}
const disabledOptions=()=>{
optionElement.forEach(item=>{
  item.classList.add('disabled');
  if(item.dataset.id==questions[indexOfQuestion].rightAnswer){
    item.classList.add('correct');
  }
})
};
const enabledOptions=()=>{
optionElement.forEach(item=>{
  item.classList.remove('disabled','correct','wrong');
})
};


const validate=()=>{
if(!optionElement[0].classList.contains('disabled')){
  alert('Вам нужно выбарать');
}else{
  
  randomQuestion();
  enabledOptions();
}
}

const quizOver=()=>{
document.querySelector('.modal').classList.add('active');
var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'Record3.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; 
  el.target.classList.add('wrong');
};


btnNext.addEventListener('click',()=>{
validate();
})

window.addEventListener('load',()=>{
randomQuestion();

});









