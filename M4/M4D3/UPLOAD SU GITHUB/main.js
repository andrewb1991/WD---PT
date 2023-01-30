
  const api = "https://api.pexels.com/v1/search";
  const token = "KD8N2WgcxfoxJ7Cf3MLRjbN2JnFW7zO0eBYYkK3QHBDn2ttUggtArf76";
  const options = {
  method: `GET`,
  headers: {
      'Authorization': token,
  }
}

function creaCard({imgs, titles, authors, ids}) {
  const myModal = new bootstrap.Modal('#imageModal')
  
  let div = document.createElement("div")
  div.classList.add("col-md-4")

  let card = document.createElement("div")
  card.classList.add("card", "mb-4", "shadow-sm")

  let img = document.createElement("img")
  img.classList.add("bd-placeholder-img", "card-img-top")
  img.src = photo.src.medium

  let cBody = document.createElement("div")
  cBody.classList.add("card-body")

  let p = document.createElement("p")
  p.classList.add("card-text")
  p.innerText = author.photographer
  let flex = document.createElement("div")
  flex.classList.add("d-flex", "justify-content-between", "align-items-center")

  let group = document.createElement("div")
  group.classList.add("btn-group")

  let btn = document.createElement("button")
  btn.classList.add("btn","btn-sm", "btn-outline-secondary")
  btn.innerText = "Nascondi"
  btn.addEventListener("click", (e)=>{
      div.classList.add("d-none")
  })
  let btnV = document.createElement("button")
  btnV.classList.add("btn","btn-sm", "btn-outline-secondary")
  btnV.innerText = "View"
  btnV.addEventListener("click", (e)=>{
      // location.href=url
      document.getElementById("modalImg").src = src.original
      myModal.show()
  })

  let small = document.createElement("small")
  small.classList.add("text-muted")
  small.innerText = id

  group.append(btn, btnV)
  flex.append(group, small)
  cBody.append(p, flex)
  card.append(img, cBody)
  div.append(card)

  //div TODO
  return div

}
const getData = async () => {
  try{
      const data = await fetch(api + "?query=tech&page=1&per_page=15", options);
  return await data.json();

  }
  catch(error){
  console.log(error)
  }
};

getData().then((data) => {
  const photos = data.photos;
  console.log(photos)
  const imgs = photos.map(photo => photo.src.medium)
  console.log(imgs);
  const titles = photos.map(title => title.alt)
  console.log(titles);
  const authors = photos.map(author => author.photographer)
  console.log(authors);
  const ids = photos.map(id => id.id )
  console.log(ids)
})


document.getElementById("loadBTN").addEventListener("click", (e)=>{
  getData().then(res=>{
      console.log(res);
      mainContent.innerHTML = ""
      res.map((el)=>{
          let c = creaCard(el)
          mainContent.append(c)
      })
  })
})
document.getElementById("loadSecondaryBTN").addEventListener("click", (e)=>{
  getData().then(res=>{
      console.log(res);
      res.forEach((el)=>{
          let c = creaCard(el)
          mainContent.append(c)
      })
  })
})
