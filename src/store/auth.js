import firebase from "firebase/app";

export default {
    actions: {
        async login({ dispatch, commit}, { email, password }) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
            } catch(e) {
                commit("setError", e);
                throw e;
            }
        },
        async register({ dispatch, commit}, { email, password, name }) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                const id = await dispatch("getUserId");
                const bill = 1000;
                await firebase.database().ref(`/users/${id}/info`).set({ bill, name });
            } catch(e) {
                commit("setError", e);
                throw e;
            }
        },
        async logout() {
            await firebase.auth().signOut();
        },
        getUserId() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        }
    }
}