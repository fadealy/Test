const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Функция для добавления новой задачи в список
function addTask() {
    // Проверяем, не пустое ли поле ввода
    if (inputBox.value === '') {
        alert('Пожалуйста, заполните поле!');
    } else {
        // Создаем новый элемент списка
        let li = document.createElement("li");
        // Устанавливаем текст задачи равным значению из поля ввода
        li.innerHTML = inputBox.value;
        // Добавляем новый элемент в контейнер списка
        listContainer.appendChild(li);

        // Создаем элемент span для кнопки удаления
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Знак "×" для кнопки удаления
        li.appendChild(span); // Добавляем кнопку удаления к элементу списка
    }
    inputBox.value = ''; // Очищаем поле ввода после добавления задачи
    saveData();
}

// Добавляем обработчик события для клика по элементам списка и их кнопкам удаления
listContainer.addEventListener("click", function(event) {
    // Если клик был по элементу списка
    if (event.target.tagName === "LI") {
        // Переключаем класс "checked" для завершения/отмены завершения задачи
        event.target.classList.toggle("checked");
        saveData();
    } 
    // Если клик был по кнопке удаления задачи
    else if (event.target.tagName === "SPAN") {
        // Удаляем родительский элемент списка (элемент <li>)
        event.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
// Вызываем функцию для отображения данных из локального хранилища
showTasks();




//  