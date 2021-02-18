async function changeLevel(level){
  if(level !== "Choose level"){
    res = await fetch("../kanjiJson/"+level+".json");
    data = await res.json()
    console.log(data)
  }
}