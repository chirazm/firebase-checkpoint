document.querySelector("#form").addEventListener("submit" , function(e){
    e.preventDefault()
    submitFormulaire()
})
var firebaseConfig = {
    apiKey: "AIzaSyAjc7MBCrggCTIWPSLQcXdCBNCxbpMtGGY",
    authDomain: "formulaire-af460.firebaseapp.com",
    databaseURL: "https://formulaire-af460.firebaseio.com",
    projectId: "formulaire-af460",
    storageBucket: "formulaire-af460.appspot.com",
    messagingSenderId: "803565336178",
    appId: "1:803565336178:web:7cdb7a78cd14b7d67cb4eb",
    measurementId: "G-VTC7P26M8L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  // 1 import librairies

  // 2 create database var
      let database = firebase.database()
  // 3 set a reference
       let ref = database.ref("formulaire")
function submitFormulaire(){
      // 4 prepare data
      let data = {
          prenom : document.querySelector("#prenom").value,
          nom : document.querySelector("#nom").value ,
          email : document.querySelector("#email").value,
          numero : document.querySelector("#numero").value 
        }
     // 5 upload data
          ref.push(data)
}
  