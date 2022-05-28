export async function fetchLogin(data) {
  let res = await fetch('http://10.130.19.30/api/login/access-token/', {
    method: 'POST',
    body: new URLSearchParams(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  if (res.statusText === 'OK') {
    const result = await res.json();
    sessionStorage.setItem("access_token", result.access_token);
    let token = sessionStorage.getItem("access_token")
    token ? document.location.replace('/') : console.log("NO") ;
  } else {
    alert("error. Try again");
  }
  console.log(res.statusText);
}

export async function fetchRegister(data) {
  let response = await fetch('http://10.130.19.30/api/register/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.statusText === 'OK') {
    document.location.replace('/login');
  } else{
    alert("error. Try again")
  }
  console.log(response);
}


export async function createPost(data) {
  let token = sessionStorage.getItem("access_token");
  let post = await fetch('http://10.130.19.30/api/items/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization : `Bearer ${token}`,
    },
  });
  if (post.statusText === 'OK') {
    document.location.replace('/');
  }
  console.log(post);
}

export async function readPost() {
  let params = {
    "skip": 0, 
    "limit": 15
  };
  let query = Object.keys(params)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
             .join('&');

let url = 'http://10.130.19.30/api/items/?' + query;
  let token = sessionStorage.getItem("access_token");
  let res = await fetch('url', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/raw',
      Authorization : `Bearer ${token}`,
    },
  });
  if (res.statusText === 'OK') {
   const result = await res.json();
  //  let data = result[0].description;
  }
  console.log(json[0]);
}