function POST(object) {
  return {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  };
}

const GET = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

function useServer(path) {
	function post(object) {
		return fetch(`http://localhost:4000/${path}`, { ...POST(object), credentials: 'include' })
		.then((response) => response.json());
	}

	function get() {
		return fetch(`http://localhost:4000/${path}`, { ...GET, credentials: 'include' })
		.then((response) => response.json());
	}

	return { get, post };
}

export default useServer;