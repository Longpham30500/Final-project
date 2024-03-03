let request = indexedDB.open("DBDemo");
let db = null;

request.onupgradeneeded = (event) => {
  db = event.target.result;
  let objData = db.createObjectStore("Employees", {
    keyPath: "Id",
    autoIncrement: true,
  });
  let nameIndex = objData.createIndex('nameEmpl', 'nameEmpl' );
  let phoneIndex = objData.createIndex('phoneEmpl', 'phoneEmpl' );
  objData.put({nameEmpl: 'Nguyen Van A', phoneEmpl: '123456'})
  objData.put({nameEmpl: 'Nguyen Van B', phoneEmpl: '123457'})
  objData.put({nameEmpl: 'Nguyen Van C', phoneEmpl: '123458'})
};
const addEmployees = () => {
  let fullName = document.getElementById("fullName").value;
  let phone = document.getElementById("phone").value;
  db.transaction(["Employees"], "readwrite")
    .objectStore("Employees")
    .add({nameEmpl: fullName, phoneEmpl:phone})
};
request.onsuccess = () => {
    alert('Thêm dữ liệu thành công')
}
request.onerror = () => {
    alert('Thêm dữ liệu không thành công')
}
