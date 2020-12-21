import { firestore, serverTime, storage } from "../../Firebase/Firebase";
import { v4 as uuid } from 'uuid';

export var addProduct = (productObj) => async () => {
  try {
    // 1-  send file to storage and get URL
    var imageRef = storage.child(`products/img-${uuid()}`);
    var fileListener = imageRef.put(productObj.photo);
    // fileListener.on(event_type, cb-Status, cb-error-handling, cb-will trigger after file being uploaded)
    fileListener.on("state_changed", (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is '+progress+'% done..');
    },
    (error)=>{
        console.log(error);
    },
    async()=>{
        var downloadURL = await imageRef.getDownloadURL();
        // 2- Modify productObj with photo and createdAt
        productObj.photo = downloadURL;
        productObj.createdAt = serverTime();
        productObj.cost = parseFloat(productObj.cost);
        productObj.quantity = parseInt(productObj.quantity);
        // 3- create doc in the firestore Products  
        await firestore.collection("products").add(productObj);
        
    }
    );
  } catch (error) {
    console.log(error);
  }
};
