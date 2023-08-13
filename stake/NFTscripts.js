const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json', Authorization: '9ac9e02e-067c-4222-968c-9e15c77c7267'}
  };
  
  fetch('https://api.nftport.xyz/v0/nfts/0x88421bc1C0734048f80639BE6EF367f634c33804?chain=polygon', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
