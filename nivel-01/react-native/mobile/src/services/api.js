import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3333"
})

export default api;

/*
    * IOS com emulador: localhost
    * IOS com físico: IP da máquina
    * Android com emulador: localhost usando adb reverse tcp:3333 tcp:3333
    * Android com emulador: 10.0.2.2 (Android Studio)
    * Android com emulador: 10.0.3.2 (GenyMotion)
    * Androind com físico: IP da máquina

*/