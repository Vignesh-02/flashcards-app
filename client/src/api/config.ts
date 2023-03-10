const api = import.meta.env.VITE_API_URL
const mode =  import.meta.env.VITE_mode
// for development use this -> 'http://localhost:5002'
export const API_URL =  mode === 'prod' ? api : 'http://localhost:5002'