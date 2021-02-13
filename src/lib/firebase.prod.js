import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';

const config = {
	apiKey: "AIzaSyCM_DxbisQy1s7rSJ4KY3u7XoFfcrK_HLc",
    authDomain: "netflix-clone-ea43e.firebaseapp.com",
    projectId: "netflix-clone-ea43e",
    storageBucket: "netflix-clone-ea43e.appspot.com",
    messagingSenderId: "662284703317",
    appId: "1:662284703317:web:d4d73636b9eab321daa6dc"
};

const firebase = Firebase.initializeApp(config);

export { firebase };
