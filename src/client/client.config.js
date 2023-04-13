const clientBaseEndpoint = `http://localhost:6006/api`;

export const registerUrl = `${clientBaseEndpoint}/register`;
export const loginUrl = `${clientBaseEndpoint}/login`;
export const createEventUrl = (id) => `${clientBaseEndpoint}/createEvent/${id}`;
export const fetchEventUrl = (id) => `${clientBaseEndpoint}/listEvent/${id}`;
export const deleteEventUrl = (id) => `${clientBaseEndpoint}/deleteEvent/${id}`;
export const editEventUrl = (id) => `${clientBaseEndpoint}/editEvent/${id}`;