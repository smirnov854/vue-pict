import {createRouter, createWebHashHistory} from 'vue-router';
import LoginPage from "./components/LoginPage.vue";
import RegisterForm from "./components/SignupForm.vue";
import HomePage from "./components/HomePage.vue";
import RecoverPage from "./components/ForgotPassword.vue";
import UplaodPict from "./components/UplaodPict.vue";
import VotePict from "./components/VotePict.vue";
import MyPictures from "./components/MyPictures.vue";



export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {name: 'login', path: '/login', component: LoginPage},
        {name: 'register', path: '/register', component: RegisterForm},
        {name: 'home', path: '/home', component: HomePage},
        {name: 'forgot-password', path: '/forgot-password', component: RecoverPage},
        {name: 'upload-pict', path: '/upload-pict', component: UplaodPict},
        {name: 'my-pictures', path: '/my-pictures', component: MyPictures},
        {name: 'vote', path: '/vote', component: VotePict},
    ]
})