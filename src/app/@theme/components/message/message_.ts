import Swal from 'sweetalert2'
export class message_{


 public getSuccessMessage(){
    Swal.fire({
        title: 'Success',
        text: 'Success',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
}


public getUpdatedMessage(){
  Swal.fire({
      title: 'Success',
      text: 'Update success !',
      icon: 'info',
      confirmButtonText: 'Ok'
    })
}

public getErrorMessage(){
  Swal.fire({
    icon: 'error',
    title: 'warning',
    text: 'Something went wrong!',
    footer: 'Sorry try again !'
  })
}


public getErrorMessageWithError(message: string){
  Swal.fire({
    icon: 'error',
    title: 'warning',
    text: 'Something went wrong!',
    footer: message
  })
}

public getWarningMessage(text){
  Swal.fire({
    icon: 'warning',
    title: 'warning!',
    text: text,
    footer: 'Sorry try again !'
  })
}
 getConfirmMessage(){
   Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  })
  .then((result) => {
    if (result.isConfirmed) {
     return true;
    }else{
      return false;
    }
  })
 
}

getDeleteMessage(){
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
}


}