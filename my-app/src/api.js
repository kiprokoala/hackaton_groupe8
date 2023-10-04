function api() {
  const getUsers = () => {
    return fetch("http://localhost:8000/api/users", {
      type: "GET",
    }).then((res) => res.json());
  };

  return {
    getUsers,
  };
}

export default api();