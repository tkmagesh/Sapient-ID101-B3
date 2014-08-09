window.addEventListener("DOMContentLoaded", init);
function init(){
	document.getElementById("btnAdd").addEventListener("click",onBtnAddTaskClick);
	document.getElementById("btnRemoveCompleted").addEventListener("click", onBtnRemoveCompletedClick);
	var allTaskItems = document.querySelectorAll("#taskList > li");
	for(var i=0;i<allTaskItems.length;i++){
		allTaskItems[i].addEventListener("click", onTaskItemClick);
	}

	document.getElementById("btnAddTaskType").addEventListener("click", onBtnAddTaskTypeClick);
	document.getElementById("taskType").addEventListener("change",onTaskTypeChange);

}
function onTaskTypeChange(){
	var allTaskLists = document.getElementsByTagName("ol");
	for(var i=0;i<allTaskLists.length;i++)
		allTaskLists[i].style.display = "none";

	document.getElementById(this.value).style.display = "block";
}
function onBtnAddTaskTypeClick(){
	var taskTypeName = document.getElementById("txtTaskType").value;
	var newTaskTypeItem = "<option value='" + taskTypeName + "'>" + taskTypeName + "</option>";
	document.getElementById("taskType").innerHTML += newTaskTypeItem;
	document.getElementById("taskLists").innerHTML += "<ol id='" + taskTypeName + "'></ol>";
	document.getElementById(taskTypeName).style.display = "none";
	
}
function onBtnRemoveCompletedClick(){
	/*var allTaskItems = document.getElementById("taskList").children;
	for(var i=allTaskItems.length - 1;i>=0;i--){
		if (allTaskItems[i].classList.contains("completed")){
			allTaskItems[i].remove();
		}
	}*/
	var allCompletedTaskItems = document.querySelectorAll("#taskList > li.completed");
	for(var i=allCompletedTaskItems.length;i>=0;i--)
		allCompletedTaskItems[i].remove();
} 
function onTaskItemClick(){
	this.classList.toggle("completed");
}
function onBtnAddTaskClick(){

   var taskName = document.getElementById("txtTask").value;
   var taskType = document.getElementById("taskType").value;
   var taskList = document.getElementById(taskType);
  
   var newTaskItem = document.createElement("li");
   newTaskItem.innerText = taskName;
   newTaskItem.addEventListener("click", onTaskItemClick);
   taskList.appendChild(newTaskItem);
}