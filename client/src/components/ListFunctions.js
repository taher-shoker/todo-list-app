import axios from "axios";

 export const getList = () => {
  return axios
    .get("http://localhost:5000/tasks/alltasks", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      return res.data;
    });
  /* .then(data => {
      console.log(data);
    }); */
}; 

export const addToList = term => {
  return axios
    .post(
      "http://localhost:5000/tasks/create",
      {
        title: term
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then((response)=> {
      console.log(response);
      
    });
};

export const deleteItem = term => {
 return axios
    .delete(`http://localhost:5000/tasks/delete/${term}`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      console.log(response);
      
    })
    .catch(function(error) {
      console.log(error);
    });
};
