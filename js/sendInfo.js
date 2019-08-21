var btn = document.getElementById('send-info');
btn.onclick = async() => {
    let firstName = document.getElementById('boxFirstName').value;
    let lastName = document.getElementById('boxLastName').value;
    let email = document.getElementById('boxEmail').value;
    let note = document.getElementById('boxMessage').value;
    if (firstName != '' && lastName != '' && email != '') {
        var db = await firebase.firestore();
        await db.collection("infoUsers").doc('new-data').set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            note: note
        })
    }
    location.href = "welcome.html";

}