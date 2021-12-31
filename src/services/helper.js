import axios from 'axios';

const url = 'https://api.adc.org.ng/api/';

export default {
    async login(credentials) {
        return axios
            .post(url + 'auth/login', credentials)
            .then(response => response.data);
    },
    async register() {
        return axios
            .post(url + 'auth/register')
            .then(response => response.data);
    },
    async getDetails() {
        return axios
            .get(url + 'project/signals')
            .then(response => response.data.data.signals);
    },
    async getForum() {
        return axios
            .get(url + 'posts/posts/all')
            .then(response => response.data.data.users);
    },
    //   async getMessages(){
    //     return axios
    //       .get(url + 'transaction/contacts')
    //       .then(response => response.data.data.contacts);
    //   },
    //   async getPayments(){
    //     return axios
    //       .get(url + 'transaction/payments')
    //       .then(response => response.data.data.transactions);
    //   },
    //   async getAnalytics(){
    //     return axios
    //       .get(url + 'transaction/charts')
    //       .then(response => response.data.data.transaction);
    //   },
    //   async getVideosId(){
    //     return axios
    //       .get(url + '/project/resource/view/' + this.id)
    //       .then(response => response.data.data);
    //   },
    //   async getPDF(){
    //     return axios
    //       .get(url + 'project/resource/types')
    //       .then(response => response.data.data.pdf.data);
    //   },
    //   async getRobot(){
    //     return axios
    //       .get(url + 'project/resource/types')
    //       .then(response => response.data.data.robots.data);
    //   },
    //   async addVideos(){
    //     return axios
    //       .post(url + 'project/resource/create')
    //       .then(response => response.data);
    //   },
};