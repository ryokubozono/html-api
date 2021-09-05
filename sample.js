async function postData(url = '', data = {}) {
  console.log(data)
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  return response.json();
}

async function getIp() {
  await fetch('https://ipinfo.io?callback')
    .then(res => res.json())
    .then(json => ip =json.ip)
  return ip
}


getIp().then(ip => {
  postData("http://localhost:8000/v1/tracking/", { time: new Date(), location: window.location.href, ip: ip })
  .then(data => {
    console.log(data);
  });  
})

