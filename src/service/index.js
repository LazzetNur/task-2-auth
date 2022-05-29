export async function fetchLogin(data) {
  const res = await fetch('http://10.130.19.30/api/login/access-token/', {
    method: 'POST',
    body: new URLSearchParams(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  if (res.statusText === 'OK') {
    const result = await res.json();
    sessionStorage.setItem('access_token', result.access_token);
    const token = sessionStorage.getItem('access_token');
    token ? document.location.replace('/') : console.log('NO');
  } else {
    alert('error. Try again');
  }
  console.log(res.statusText);
}

export async function fetchRegister(data) {
  const response = await fetch('http://10.130.19.30/api/register/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.statusText === 'OK') {
    document.location.replace('/login');
  } else {
    alert('error. Try again');
  }
  console.log(response);
}

export async function createPost(data) {
  const token = sessionStorage.getItem('access_token');
  const post = await fetch('http://10.130.19.30/api/items/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (post.statusText === 'OK') {
    document.location.replace('/');
  }
  console.log(post);
}

export async function readPost(data) {
  const token = sessionStorage.getItem('access_token');
  const res = await fetch('http://10.130.19.30/api/items/?skip=0&limit=15', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/raw',
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await res.json();
  return result;
}
