
import { fetchNewsList, 
         fetchAskList, 
         fetchJobsList, 
         fetchUserInfo} from '../api/index.js';

export default {
      // context로 mutation 접근 가능
      FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_NEWS', response.data);
        })
        .catch( error =>{
            console.log(error);
        });
    },
    FETCH_JOBS(context) {
        fetchJobsList()
        .then(response => {
            context.commit('SET_JOBS', response.data)
        })
        .catch(error => {
            console.log(error);
        })

    },
    FETCH_ASKS(context) {
        fetchAskList()
        .then( response => {
            context.commit('SET_ASKS', response.data );
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_USER({ commit }, userName) {
        fetchUserInfo(userName)
        .then(({ data }) => {
            commit('SET_USER', data);
        }).catch(error => {
            console.log(error);
        })
    }
}