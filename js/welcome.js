let content = document.getElementById('content');
const addContent = async() => {
    var db = await firebase.firestore();
    var data
    await db.collection("infoUsers").get().then((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
            if (doc.id == 'new-data')
                data = doc.data();
        });
    });
    content.innerText = ` ${data.firstName} ${data.lastName}`;
    await db.collection("infoUsers").add(data);
    await db.collection("infoUsers").doc('new-data').delete();
}
setTimeout(() => {
    addContent();
}, 500)