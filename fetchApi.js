let btn = document.getElementById("my-btn");

btn.addEventListener("click", fetchingData);

function fetchingData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((res) => {
    //   console.table(res[0]);
      // console.table(res[0].address.street)
      var temp = "";
      res.map((user) => {
        temp += `<tr>
            <td> ${user.id} </td>
            <td> ${user.name} </td>
            <td> ${user.username} </td>
            <td> ${user.email} </td>
            <td> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode} </td>
            <td> ${user.phone} </td>
            <td> ${user.company.name} ${user.company.catchPhrase} ${user.company.bs}</td>
            <td>${user.website} </td>
        `
       });
      document.getElementById("table_body").innerHTML = temp;
    })
    .catch((err) => {
        document.getElementById("msg").innerHTML = "Something went wrong while fetching the users...."
    //   console.log(err,);
    });
}
