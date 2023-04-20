async function abc() {
  let fet = await fetch(
    "https://api.nobelprize.org/2.1/laureates?_ga=2.14497521.751976514.1681977127-755363913.1681977127"
  );
  let response = await fet.json();
  for (i = 0; i < response.laureates.length; i++) {
    // console.log(response.laureates[i]);
    let dataofitems = [
      response.laureates[i].knownName.en,
      response.laureates[i].fullName.en,
      response.laureates[i].gender,
      response.laureates[i].birth.date,
      response.laureates[i].wikipedia.english,
      response.laureates[i].nobelPrizes[0].dateAwarded,
      response.laureates[i].nobelPrizes[0].category.en,
      response.laureates[i].nobelPrizes[0].categoryFullName.en,
    ];
    // console.log(dataofitems)
    myfunction(dataofitems);
  }
}
abc();
myfunction=([knownname,fullname,gender,dateofbirth,wikipedialink,awarddate,category,categorydesc])=>{
document.getElementById('demo').innerHTML+=`<div class="card m-2" style="width:18rem;height:25rem" >

<div class="card-body">
  <h5 class="card-title">Name : ${knownname}</h5><br>
  <p class="card-title">Full Name : ${fullname}</p>
  <p class="card-title">Gender : ${gender}</p>
  <p class="card-title">DOB : ${dateofbirth}</p>
  <p class="card-title">Awarded date : ${awarddate}</p>
  <p class="card-text">Category : ${category}</p>
  <p class="card-text">Description : ${categorydesc}</p>
 
  <a href=${wikipedialink} target="_blank" class="btn btn-primary">Know More</a>
</div>
</div>`
}
