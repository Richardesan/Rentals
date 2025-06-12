import axios from "axios";


export const baseAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
  headers: {
    
    "Content-Type": "application/json",
  },
});

export const authenticatedAPI = (token) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
          'ngrok-skip-browser-warning':  '69420',

      Authorization: `Bearer ${token}`,
    },
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const res = error.response;

      if (res) {
        const contentType = res.headers['content-type'];
        // Check if response is HTML (ngrok error page)
        if (contentType && contentType.includes('text/html')) {
          // Handle ngrok error page gracefully
          return Promise.reject(
            new Error('Ngrok tunnel error: Backend not reachable.')
          );
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};
