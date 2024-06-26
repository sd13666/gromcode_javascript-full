const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

function getTasksList() {
  // put your code here
  return fetch(baseUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => console.error("Error:", error));
}

function getTaskById(taskId) {
  // put your code here
  return fetch(`${baseUrl}/${taskId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => console.error("Error:", error));
}

// // examples
// getTasksList().then((tasksList) => {
//   console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
// });

// getTaskById("2").then((taskData) => {
//   console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
// });
