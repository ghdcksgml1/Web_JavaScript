const toDoForm = document.querySelector('.js-toDoform'),
    toDoInput = toDoForm.querySelector('input');
    toDoList = document.querySelector('.js-toDoList');


const TODOS_LS = 'toDos';

let toDos = []; // 해야할 일들 리스트

function deleteToDo(evnet){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li"); // li태그 생성
    const delBtn = document.createElement("button"); // btn태그 생성
    const span = document.createElement("span"); // span태그 생성
    const newId = toDos.length+1;

    delBtn.innerText = "❌"; // button의 value값
    delBtn.addEventListener("click",deleteToDo); // 이벤트 리스너
    span.innerText = text; //
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){ // 비어있지 않으면
        const parsedToDos = JSON.parse(loadedToDos); // 목록들을 가져온다.
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text); // html에 목록 추가
        });
    }
}
function init(){
    loadToDos(); // localstorage에 있는 아이템을 불러온다.
    toDoForm.addEventListener("submit",handleSubmit);
}
init();