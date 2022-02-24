import {API_DOMAIN} from "./constants";


export function getUserProfile(uid: string, gameId: string | null = null): Promise<Record<string, any>> {

    return new Promise(async (resolve, reject) => {
        const user = await fetch(`${API_DOMAIN}/users/${uid}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(e => e.json());
        if (gameId) {
            Object.assign(user, await fetch(`${API_DOMAIN}/elimination/game/${gameId}/user/${uid}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(e => e.json()));
        }
        resolve(user);

        /*let userCache: IDBObjectStore;
        let db: IDBDatabase;
        const req: IDBOpenDBRequest = window.indexedDB.open("EliminationDB", 1)

        req.onerror = event => {
            // Do something with request.errorCode!
        };

        req.onupgradeneeded = (event) => {
            // Do something with request.result!
            userCache = db.createObjectStore('users', {keyPath: 'userID'});
            userCache.createIndex('userID', 'userID', {unique: true});
            userCache.transaction.oncomplete = event => {

            }
        };
        req.onsuccess = async () => {
            db = req.result

            const UserT = db.transaction("users", "readwrite").objectStore('users');
            const ureq = UserT.get(uid)
            ureq.onsuccess = async () => {
                if (!ureq.result) return;
                let user = JSON.parse(JSON.stringify(ureq.result))
                if (gameId) {
                    user = Object.assign(user, await fetch(`${API_DOMAIN}/elimination/game/${gameId}/user/${uid}`, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(e => e.json()));
                   resolve(user);
                }
                else resolve(user);
            }
            const user = await fetch(`${API_DOMAIN}/users/${uid}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(e => e.json());
            db.transaction("users", "readwrite").objectStore('users').put(user);
            if (gameId) {
                Object.assign(user, await fetch(`${API_DOMAIN}/elimination/game/${gameId}/user/${uid}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(e => e.json()));
            }
            resolve(user);
        }*/
    });

}
