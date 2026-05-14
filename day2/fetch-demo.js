async function loadUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await response.json();

  const accounts = users.map(user => ({
    accountId: user.id,
    accountName: user.name
  }));

  console.log(accounts);
}

loadUsers();
