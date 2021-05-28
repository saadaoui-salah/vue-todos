import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

var firebaseConfig = {
    apiKey: "AIzaSyDDc0bn1Pzv7jGqCSXtjHTdJG4770lzuVM",
    authDomain: "todo-e00dc.firebaseapp.com",
    projectId: "todo-e00dc",
    storageBucket: "todo-e00dc.appspot.com",
    messagingSenderId: "655399861031",
    appId: "1:655399861031:web:a85e7f9716c2a388640702",
    measurementId: "G-HEJ02BGFQ9"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const userCollection = db.collection('user')

export const addUser = (user)=>{
    return userCollection.add(user)
}

export const getUser = async id =>{
    const user = userCollection.doc(id).get()
    return user.exists ? user.data() : null;
}

export const updateUser = (id, user) => {
    return userCollection.doc(id).update(user)
}

export const deleteUser = id => {
    return userCollection.doc(id).delete()
}

export const useLoadUsers = ()=>{
    const users = ref([])
    const close = userCollection.onSnapshot(snapshot =>{
        users.value = snapshot.docs.map((docs)=>({id:doc.id, ...docs.data()}))
    })
    onUnmounted(close)
    return users
}
