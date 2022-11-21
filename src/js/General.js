export default class General{
     getMessage=(validationErrorsList,key)=>{
        const  ErrorElement=validationErrorsList.find(error => error.context.label === key);
        let message=(ErrorElement)?ErrorElement.message:'';
        return message;
      }
    
}