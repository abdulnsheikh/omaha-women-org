export const apiURL = 'http://ec2-18-224-229-247.us-east-2.compute.amazonaws.com:3100/api';
//export const apiURL = 'http://localhost:3100/api';

/*
    User related URLS  
*/
export const UsersURL = `${apiURL}/users`;
export const userRegisrationURL = `${UsersURL}/register`; 
export const loginURL = `${UsersURL}/authenticate`;

/*
    Events related URLS  
*/
export const EventsURL = `${apiURL}/Events`;
export const eventRegistrationURL = `${EventsURL}/register`;

/*
    Admin related URLS  
*/
export const adminDashboardURL = `${apiURL}/admin/dashboard`;
export const addEventsURL = `${EventsURL}/addEvent`;